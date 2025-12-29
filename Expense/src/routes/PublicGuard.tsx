import GlobalLoader from "@/components/feedback/GlobalLoader";
import { useAuth } from "@/contexts/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PublicGuard = () => {
  const { token, isAuthLoading } = useAuth();
  if (isAuthLoading) {
    return <GlobalLoader />;
  }
  // ✅ already logged in → home
  if (token) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};

export default PublicGuard;
