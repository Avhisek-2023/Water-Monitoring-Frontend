import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/utilityComponents/Navbar";
import Footer from "../components/utilityComponents/Footer";
import Bubbles from "../components/utilityComponents/Bubbles";

const AuthLayout = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-linear-to-br from-sky-100 via-blue-100 to-cyan-200 dark:from-slate-900 dark:via-blue-950 dark:to-slate-800">
      <Navbar />
      <Bubbles />
      <motion.main
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 w-full px-4 py-6 md:px-10"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
