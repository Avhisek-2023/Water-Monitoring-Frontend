import { Droplet, Facebook, Instagram, Linkedin } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../features/auth/contexts/AuthContext";
// import { useAuth } from "../../features/auth/contexts/AuthContext";

const Footer = () => {
  // const { navItems } = useAuth();
  const token = localStorage.getItem("token");
  const loggedInNavItems = [
    { label: "Home", to: "/home" },
    { label: "About", to: "/about" },
    { label: "How It Works", to: "/steps" },
    { label: "Live Data", to: "/live-data" },
    { label: "Contact", to: "/contact" },
  ];
  const navItems = token ? loggedInNavItems : [];

  return (
    <footer className="mt-10 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border-t border-slate-300 dark:border-slate-700">
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <Droplet className="text-sky-600 dark:text-sky-400" size={26} />
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
              AquaSense
            </h2>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 text-center md:text-left max-w-xs">
            Monitoring water quality in real-time to keep you and your family
            safe.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-100">
            Quick Links
          </h3>
          <ul className="space-y-2 text-center">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-100">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-sky-500 hover:text-white transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-sky-500 hover:text-white transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-sky-500 hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white/40 dark:bg-slate-800/40 border-t border-slate-300 dark:border-slate-700 py-4 text-center text-sm text-slate-700 dark:text-slate-300">
        © {new Date().getFullYear()} AquaSense. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
