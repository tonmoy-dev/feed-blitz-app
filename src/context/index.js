import { createContext } from "react";

// creating a context API for authentication
const AuthContext = createContext();

// profile context
const ProfileContext = createContext();

export { AuthContext, ProfileContext };
