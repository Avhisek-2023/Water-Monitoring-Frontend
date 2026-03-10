import { useState } from "react";
import { motion } from "framer-motion";
import { Droplet, Eye, EyeOff } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Password reset successful!");
    }, 1000);
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
            Reset Password 🔒
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-6 text-sm">
            Enter and confirm your new password.
          </p>
          <form onSubmit={handleReset} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="new-password">New Password</Label>
              <div className="relative mt-1">
                <Input
                  id="new-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <div className="relative mt-1">
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium transition"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </Button>

            <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-2">
              <Link
                to="/"
                className="text-sky-600 font-medium hover:underline dark:text-sky-400"
              >
                Back to Home
              </Link>
            </p>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ResetPassword;
