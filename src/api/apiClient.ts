import axios from "axios";
import { store } from "../types/store";
import { logout, setTokens } from "../types/authSlice";
import { createAsyncStorage } from "@react-native-async-storage/async-storage";
const storage = createAsyncStorage("appDB");

export const apiClient = axios.create({
  baseURL: "http://10.0.2.2:3001/api/",
  //"http://172.20.10.5:3001/api/" + "properties"
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

// Request interceptor — attach the access token
apiClient.interceptors.request.use((config) => {
  const { accessToken } = store.getState().auth;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// Response interceptor — refresh on 401, then retry once
apiClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;
      const { refreshToken } = store.getState().auth;
      if (!refreshToken) {

        return Promise.reject(error);
      }
      try {
        const { data } = await axios.post(
          `${apiClient.defaults.baseURL}auth/refresh`,
          { refreshToken }
        );
        store.dispatch(setTokens(data));
        await storage.setItem('refreshToken', data.refreshToken);
        original.headers.Authorization = `Bearer ${data.accessToken}`;
        return apiClient(original);
      } catch (refreshErr) {
        store.dispatch(logout());
        await storage.removeMany(['refreshToken', 'user']);
        return Promise.reject(refreshErr);
      }
    }
    return Promise.reject(error);
  }
);