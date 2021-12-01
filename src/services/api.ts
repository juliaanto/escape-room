import axios, { AxiosInstance } from "axios";

const BACKEND_URL = 'http://localhost:3001';
const REQUEST_TIMEOUT = 5000;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};

export const api = createAPI();
