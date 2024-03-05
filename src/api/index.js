import axios from "axios";

// creating axios instance
const api = axios.create({
  baseURL: "http://localhost:3000",
});

export { api };
