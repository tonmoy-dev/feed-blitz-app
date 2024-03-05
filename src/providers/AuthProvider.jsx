import { useState } from "react";
import { AuthContext } from "../context";

// Authentication context provider
const AuthProvider = ({ children }) => {
  // authentication information
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children} {/* whole render tree */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
