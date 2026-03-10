import { useState } from "react";
import { Droplet, Menu, X, User } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const loggedInNavItems = [
    { label: "Home", to: "/home" },
    { label: "About", to: "/about" },
    { label: "How It Works", to: "/steps" },
    { label: "Live Data", to: "/live-data" },
    { label: "Contact", to: "/contact" },
  ];
  const navItems = token ? loggedInNavItems : [];
  const handleLogin = () => {
    navigate("/login");
  };
  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <>
      <header className="relative z-50 w-full h-18 flex items-center justify-between px-4 md:px-10 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border-b border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex items-center gap-2">
          <Droplet className="text-sky-600 dark:text-sky-400" size={24} />
          <h1 className="font-semibold text-lg text-slate-700 dark:text-slate-200">
            AquaSense
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition hover:text-sky-700 dark:hover:text-sky-300",
                  isActive
                    ? "text-sky-700 dark:text-sky-300"
                    : "text-slate-700 dark:text-slate-300"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          {token ? (
            <div
              onClick={goToProfile}
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer
             bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600
             transition"
              title="Profile"
            >
              <User size={20} className="text-sky-700 dark:text-sky-300" />
            </div>
          ) : (
            <Button
              className="rounded-xl px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white"
              onClick={handleLogin}
            >
              Login
            </Button>
          )}
        </nav>
        <div className="md:hidden">
          <Button variant="outline" size="icon" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-40 md:hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-b border-slate-200 dark:border-slate-700 shadow-lg px-4 py-4"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "text-base font-medium transition",
                      isActive
                        ? "text-sky-700 dark:text-sky-300"
                        : "text-slate-700 dark:text-slate-300"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              {token ? (
                <div
                  onClick={goToProfile}
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer
             bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600
             transition"
                  title="Profile"
                >
                  <User
                    size={18}
                    className="text-slate-700 dark:text-slate-200"
                  />
                </div>
              ) : (
                <Button
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white"
                  onClick={() => {
                    setOpen(false);
                    handleLogin();
                  }}
                >
                  Login
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
