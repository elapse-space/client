import { API_URL } from "@shared/config";
import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
});
