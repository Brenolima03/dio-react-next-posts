import axios from "axios";

export const api = axios.create({
  baseURL: "CHANGE-ME",
  headers: {
    apikey: "CHANGE-ME",
    authorization: "Bearer CHANGE-ME"
  }
});
