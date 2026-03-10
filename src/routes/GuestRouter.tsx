import { Route, Routes, useNavigate } from "react-router-dom";
import GuestLayout from "../layout/GuestLayout";
import Login from "../features/auth/components/Login";
import Register from "../features/auth/components/Register";
import ForgotPassword from "../features/auth/components/ForgotPassword";
import ResetPassword from "../features/auth/components/ResetPassword";
import { AuthProvider } from "../features/auth/contexts/AuthContext";
import OTPVerification from "../features/auth/components/OTPVerification";
import { useEffect } from "react";

const GuestRouter = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token, navigate]);

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/otp-verification" element={<OTPVerification />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
};

export default GuestRouter;
