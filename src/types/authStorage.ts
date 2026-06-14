// src/utils/authStorage.ts
import { createAsyncStorage } from "@react-native-async-storage/async-storage";
import { AuthResponse, User } from "../types/auth";
import { AuthAPI } from "../api/auth";
import { store } from "./store";
import { logout, setTokens, setUser } from "./authSlice";
const storage = createAsyncStorage("appDB");

export const persistAuth = async (data: AuthResponse) => {

  console.log("userss ", data)

  store.dispatch(setTokens(data));
  store.dispatch(setUser({
    displayName: "abc",
    email: "t@gmail.com",
  }));

  await storage.setItem('refreshToken', data.refreshToken);
  await storage.setItem('user', JSON.stringify({
    displayName: "abc",
    email: "t@gmail.com",
  }));
};

export const clearAuth = async () => {
  store.dispatch(logout());
  await storage.removeMany(['refreshToken', 'user']);
};

export const restoreAuth = async () => {
  const refreshToken = await storage.getItem('refreshToken');
  const userJson = await storage.getItem('user');

  console.log("refreshTokenrefreshToken ", refreshToken, userJson)

  if (!refreshToken) return false;

  try {
    if (userJson) {
      const tokens = await AuthAPI.refresh(refreshToken);
      store.dispatch(setTokens({ ...tokens, refreshToken: tokens.refreshToken ?? refreshToken }));
      store.dispatch(setUser(JSON.parse(userJson)));
      await storage.setItem('refreshToken', tokens.refreshToken ?? refreshToken);
      return true;
    }
  } catch {
    await clearAuth();
    return false;
  }
};