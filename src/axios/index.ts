import axios, { AxiosRequestConfig } from "axios"

export const Instance = axios.create({
  baseURL: "https://binch.allie.kr/",
});

export const TokenInstance = axios.create({
  baseURL: "https://binch.allie.kr/",
});

TokenInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers === undefined) {
    config.headers = {}
  }

  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`;

  return config
})