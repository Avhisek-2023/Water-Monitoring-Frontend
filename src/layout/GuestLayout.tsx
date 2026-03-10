import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Bubbles from "../components/utilityComponents/Bubbles";

const GuestLayout = () => {
  return (
    <div className="relative min-h-screen w-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-sky-100 via-blue-100 to-cyan-200 dark:from-slate-900 dark:via-blue-950 dark:to-slate-800">
      <Bubbles />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md mx-auto bg-white/70 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20 dark:border-slate-700/40"
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-sky-600 dark:text-sky-400 flex items-center justify-center gap-2">
            💧 AquaSense
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
            Smart Water Quality Monitoring System
          </p>
        </div>
        <Outlet />
      </motion.div>
    </div>
  );
};

export default GuestLayout;
