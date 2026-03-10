import { useNavigate } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../../../components/ui/button";

const Profile = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white/60 dark:bg-slate-800/60
                   backdrop-blur-xl rounded-2xl shadow-xl
                   border border-slate-200 dark:border-slate-700 p-8"
      >
        {/* Avatar */}
        <div className="flex justify-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center
                       bg-sky-100 dark:bg-sky-900"
          >
            <User size={36} className="text-sky-600 dark:text-sky-300" />
          </div>
        </div>

        {/* Title */}
        <h1 className="mt-6 text-2xl font-bold text-center text-slate-800 dark:text-slate-100">
          User Profile
        </h1>

        {/* Description */}
        <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
          Manage your AquaSense account and session settings.
        </p>

        {/* Info Section (Optional / Mock Data) */}
        <div className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <div className="flex justify-between">
            <span className="font-medium">Role</span>
            <span>User</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Access</span>
            <span>Monitoring Dashboard</span>
          </div>
        </div>

        {/* Logout */}
        <Button
          variant="destructive"
          className="mt-8 w-full rounded-xl flex items-center justify-center gap-2"
          onClick={logout}
        >
          <LogOut size={16} />
          Logout
        </Button>
      </motion.div>
    </div>
  );
};

export default Profile;
