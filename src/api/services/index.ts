import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const headers: any = {};

export const setAuthorizationHeader = (token: any) => {
  httpInstance.defaults.headers.Authorization = `${token}`;
};

const axiosParams = {
  baseURL: baseUrl,
  headers,
};

export const httpInstance = axios.create(axiosParams);

const api = (httpClient: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      httpClient.get<T>(url, config),

    post: <T>(
      url: string,
      body: unknown = null,
      config: AxiosRequestConfig = {}
    ) => httpClient.post<T>(url, body, config),

    delete: <T>(url: string, config: AxiosRequestConfig = {}) =>
      httpClient.delete<T>(url, config),

    patch: <T>(
      url: string,
      body: unknown = null,
      config: AxiosRequestConfig = {}
    ) => httpClient.patch<T>(url, body, config),

    put: <T>(
      url: string,
      body: unknown = null,
      config: AxiosRequestConfig = {}
    ) => httpClient.put<T>(url, body, config),
  };
};

export default api(httpInstance);
