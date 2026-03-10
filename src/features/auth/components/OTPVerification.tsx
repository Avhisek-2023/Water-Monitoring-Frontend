import { useState } from "react";
import { motion } from "framer-motion";
import { Droplet } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "../../../components/ui/button";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const { verifyOtp } = useAuth();
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email is missing. Please go back and try again.");
      return;
    }
    try {
      setLoading(true);
      await verifyOtp(email, otp);
      navigate("/");
      setLoading(false);
    } catch (error) {
      toast.error("OTP verification failed.");
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="p-6 rounded-xl shadow-md bg-linear-to-br from-sky-100 to-blue-50 dark:from-slate-800 dark:to-slate-900 border border-sky-200 dark:border-slate-700"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-sky-500/20 p-3 rounded-full">
              <Droplet className="w-8 h-8 text-sky-600 dark:text-sky-400 animate-pulse" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-center text-sky-700 dark:text-sky-300 mb-2">
            Verify OTP 🔐
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-6 text-sm">
            Enter the 6-digit code sent to{" "}
            <span className="font-medium">{email}</span>
          </p>
          <form onSubmit={handleVerify} className="space-y-5">
            <div>
              <Label htmlFor="otp">Enter OTP</Label>
              <Input
                id="otp"
                type="text"
                placeholder="Enter the OTP sent to your email"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </Button>
            <p className="text-sm text-center text-gray-600 mt-3">
              Didn’t receive the OTP?{" "}
              <span
                className="text-indigo-600 hover:underline cursor-pointer"
                onClick={() => toast("Resend OTP feature coming soon!")}
              >
                Resend
              </span>
            </p>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
};

export default OTPVerification;
