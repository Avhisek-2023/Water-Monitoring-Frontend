import { motion } from "framer-motion";
import { Droplet, Gauge, AlertCircle } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="w-full">
      <section className="text-center py-12 md:py-20 px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-slate-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Real-Time Water Quality Monitoring
        </motion.h1>
        <motion.p
          className="mt-4 text-slate-700 dark:text-slate-300 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          AquaSense helps you ensure your water is clean, safe, and drinkable by
          analyzing live pH, TDS, turbidity, and more.
        </motion.p>

        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Button
            className="px-6 py-3 text-lg rounded-xl bg-sky-600 hover:bg-sky-700 text-white"
            onClick={() => navigate("/live-data")}
          >
            Check Live Data
          </Button>
        </motion.div>
      </section>
      <section className="py-12 px-4 md:px-10">
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-100">
          Key Highlights
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
            whileHover={{ scale: 1.03 }}
          >
            <Droplet className="w-10 h-10 text-sky-500 mb-3" />
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
              Water Purity Insights
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Live analysis of pH, TDS, turbidity and more to determine water
              drinkability.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
            whileHover={{ scale: 1.03 }}
          >
            <Gauge className="w-10 h-10 text-sky-500 mb-3" />
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
              Accurate IoT Sensors
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              High-precision sensors continuously track water quality with
              minimal error margin.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
            whileHover={{ scale: 1.03 }}
          >
            <AlertCircle className="w-10 h-10 text-sky-500 mb-3" />
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
              Instant Alerts
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Get real-time alerts on unsafe water based on detected quality
              thresholds.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 text-center px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Stay Informed. Stay Safe.
        </motion.h2>

        <motion.p
          className="mt-4 max-w-xl mx-auto text-slate-600 dark:text-slate-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          AquaSense keeps you connected with real-time updates so you always
          know the quality of your water.
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Button className="px-8 py-3 text-lg rounded-xl bg-sky-600 hover:bg-sky-700 text-white">
            View Live Dashboard
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
