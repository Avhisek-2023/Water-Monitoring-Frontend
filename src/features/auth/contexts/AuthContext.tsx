import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { AuthContextType } from "../types/AuthContextTypes";
import axiosClient from "../../../lib/axios";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  const handleAxiosError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } else if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error("Unexpected error occurred!");
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const res = await axiosClient.post("/auth/login", { email, password });
      const accessToken = res.data?.data?.accessToken;
      if (accessToken) {
        localStorage.setItem("token", accessToken);
        setToken(accessToken);
        toast.success("Login successful!");
      }
      navigate("/hello");
    } catch (error) {
      handleAxiosError(error);
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      setLoading(true);
      const res = await axiosClient.post("/auth/register", {
        name,
        email,
        password,
      });
      toast.success(res.data?.message || "Registration successful!");
      localStorage.setItem("email", email);
      navigate("/otp-verification");
    } catch (error) {
      handleAxiosError(error);
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (email: string, otp: string) => {
    try {
      setLoading(true);
      const res = await axiosClient.post("/auth/verify-otp", { email, otp });
      const accessToken = res.data?.data?.accessToken;
      if (accessToken) {
        localStorage.setItem("token", accessToken);
        setToken(accessToken);
        toast.success("OTP verified successfully!");
      }
    } catch (error) {
      handleAxiosError(error);
    } finally {
      setLoading(false);
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      setLoading(true);
      const res = await axiosClient.post("/auth/forgot-password", { email });
      toast.success(res.data?.message || "OTP sent to your email!");
      localStorage.setItem("email", email);
      navigate("/otp-verification");
    } catch (error) {
      handleAxiosError(error);
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email: string, newPassword: string) => {
    try {
      setLoading(true);
      const res = await axiosClient.post("/auth/reset-password", {
        email,
        newPassword,
      });
      toast.success(res.data?.message || "Password reset successfully!");
    } catch (error) {
      handleAxiosError(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    toast.success("Logged out successfully!");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        loading,
        login,
        register,
        verifyOtp,
        forgotPassword,
        resetPassword,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
