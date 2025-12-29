import Home from "../pages/Home";
import Login from "../pages/Login";
import ExpenseTrackerDesign from "../pages/ExampleDesign";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthGuard from "./AuthGuard";
import PublicGuard from "./PublicGuard";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicGuard />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/example" element={<ExpenseTrackerDesign />} />
        {/* Protected Routes */}
        <Route element={<AuthGuard />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
