import React, { useEffect } from "react";
import AuthContext from "./AuthContext";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = React.useState<string | null>(null);
  const [isAuthLoading, setIsAuthLoading] = React.useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setToken(storedToken);
    }
    setIsAuthLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, isAuthLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

// export const useAuth = () => React.useContext(AuthContext);
