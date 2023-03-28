import axios, { AxiosInstance } from "axios";
import { apiUrl } from "../utils/environments";

export const httpCommon: AxiosInstance = axios.create({
  baseURL: `${apiUrl}/api`,
  headers: {
    "Content-type": "application/json",
  },
});
