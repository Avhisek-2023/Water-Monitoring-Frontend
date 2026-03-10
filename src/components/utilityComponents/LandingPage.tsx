import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Droplets, Activity, Settings } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Bubbles from "./Bubbles";
import { useEffect } from "react";

const LandingPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogin = () => {
    navigate("/login");
  };
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token]);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden text-gray-800 dark:text-gray-100 bg-linear-to-b from-blue-100 via-blue-50 to-teal-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
        <Bubbles />
        <Navbar />
        <section className="relative z-10 flex flex-col items-center text-center py-24 px-6">
          <motion.h1
            className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Real-Time Water Quality Monitoring
          </motion.h1>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 mb-8">
            Monitor pH, TDS, temperature, and purity of your water instantly —
            from sensors to screen. Stay informed, stay safe.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white rounded-full px-8 py-6 text-lg shadow-md shadow-blue-200 dark:shadow-teal-900/40 transition-all"
            onClick={handleLogin}
          >
            Get Started
          </Button>
        </section>
        <section id="features" className="relative z-10 py-16 px-6 md:px-20">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Droplets,
                title: "pH & TDS Analysis",
                desc: "Track purity and composition of water in real time.",
              },
              {
                icon: Activity,
                title: "Live Monitoring",
                desc: "Get instant readings when water contacts your device.",
              },
              {
                icon: Settings,
                title: "Smart Alerts",
                desc: "Set thresholds and receive warnings instantly.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/20">
                  <CardHeader className="flex flex-col items-center text-center">
                    <feature.icon className="w-10 h-10 text-blue-600 dark:text-teal-400 mb-2" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300 text-center">
                    {feature.desc}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
        <section
          id="about"
          className="relative z-10 py-20 px-6 md:px-24 bg-blue-50/60 dark:bg-slate-800/50 backdrop-blur-sm border-t border-white/10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">About AquaSense</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              AquaSense bridges real-world sensors with intelligent dashboards —
              giving communities, industries, and researchers real-time insights
              into water quality. Our mission: make clean water monitoring
              accessible and actionable for everyone.
            </p>
          </div>
        </section>
        <footer className="bg-white/40 dark:bg-slate-800/40 border-t border-slate-300 dark:border-slate-700 py-4 text-center text-sm text-slate-700 dark:text-slate-300">
          © {new Date().getFullYear()} AquaSense. All Rights Reserved.
        </footer>
      </div>
    </>
  );
};
export default LandingPage;
