import GlobalLoader from "@/components/feedback/GlobalLoader";
import { useAuth } from "@/contexts/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
  const { token, isAuthLoading } = useAuth();
  if(isAuthLoading){
    return <GlobalLoader/>;
  }
  if (!token) {
    return <Navigate to="/login" replace/>;
  }
  return <Outlet />;
};

export default AuthGuard;
