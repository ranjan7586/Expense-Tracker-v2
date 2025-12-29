import { createContext } from "react";
interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  isAuthLoading: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export default AuthContext;
