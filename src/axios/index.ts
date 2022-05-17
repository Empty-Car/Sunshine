import axios, { AxiosRequestConfig } from "axios"

export const Instance = axios.create({
  baseURL: "http://54.180.219.114:8080",
});

export const TokenInstance = axios.create({
  baseURL: "http://54.180.219.114:8080",
});

TokenInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers === undefined) {
    config.headers = {}
  }

  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`;

  return config
})