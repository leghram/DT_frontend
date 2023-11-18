import axios from "axios";
import { BASE_URL_API } from "../constants";

export const service = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authService = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
