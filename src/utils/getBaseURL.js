export default function getBaseURL() {
  const serverURL = import.meta.env.VITE_SERVER_BASE_URL;
  return {
    baseURL: serverURL,
  };
}
