import axios from "axios";

const GITHUB_URL = process.env.VUE_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.VUE_APP_GITHUB_TOKEN;

export const requestUrl = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});
