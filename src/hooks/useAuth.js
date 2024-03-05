import { useContext, useDebugValue } from "react";
import { AuthContext } from "../context";

// To get the auth current value, use this hook
export const useAuth = () => {
  const { auth } = useContext(AuthContext);
  // To check the user is logged In or Not
  useDebugValue(auth, (auth) =>
    auth?.user ? "User Logged In" : "User Logged Out"
  );

  return useContext(AuthContext); // using the context API
};
