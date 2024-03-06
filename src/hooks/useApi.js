import axios from "axios";
import { useEffect } from "react";
import { api } from "../api";
import { useAuth } from "./useAuth";

const useApi = () => {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    // add a request intercepter
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        const authToken = auth?.authToken; // auth token
        if (authToken) {
          // auth token added to authorization bearer
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        // console.log(config);

        return config;
      },
      (error) => Promise.reject(error) // error
    );

    // add a response intercepter
    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      // if there is an error
      async (error) => {
        console.log(error);
        const req = error.config; // taking the original request from error

        // checking if there is any token expire error
        if (error.response.status === 401 && !req._retry) {
          req._retry = true;
          try {
            const refreshToken = auth?.refreshToken; // refresh token from auth
            // add refresh token to server api
            const response = await axios.post(
              `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
              { refreshToken }
            );

            const { token } = response.data; // taking auth token from response data

            console.log(`new token: ${token}`);
            setAuth({ ...auth, authToken: token }); // update the auth token

            // adding new auth token to authorization bearer token
            req.headers.Authorization = `Bearer ${token}`;

            return axios(req); // retry call again by axios for that request
          } catch (error) {
            console.log(error);
            throw error;
          }
        }
        return Promise.reject(error); // error
      }
    );

    // clean up
    return () => {
      api.interceptors.request.eject(requestIntercept); // stop the request interceptor
      api.interceptors.response.eject(responseIntercept); // stop the response interceptor
    };
  }, [auth.authToken, auth, setAuth]); // if the auth token is changed

  return { api }; // return the updated api request or response
};

export default useApi;
