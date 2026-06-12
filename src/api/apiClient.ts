import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://10.0.2.2:3001/api/",
  //"http://172.20.10.5:3001/api/" + "properties"
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})