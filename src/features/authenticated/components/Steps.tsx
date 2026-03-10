import { motion } from "framer-motion";
import { Droplet, Cpu, Signal, CheckCircle } from "lucide-react";

const Steps = () => {
  const stepCard = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <div className="w-full px-4 md:px-10">
      <section className="text-center py-12 md:py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          How AquaSense Works
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-slate-700 dark:text-slate-300 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          A simple and powerful system designed to monitor water quality in
          real-time.
        </motion.p>
      </section>
      <section className="py-10">
        <div className="relative flex flex-col items-center gap-12">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 mx-auto w-full h-1 bg-linear-to-r from-sky-300 via-blue-400 to-cyan-300 opacity-40"></div>
          <div className="block md:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-sky-300 via-blue-400 to-cyan-300 opacity-40"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 relative w-full">
            <motion.div
              custom={0}
              variants={stepCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg z-10"
            >
              <Droplet className="w-14 h-14 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                1. Water Sensing
              </h3>
              <p className="mt-2 text-slate-700 dark:text-slate-300">
                The IoT device is placed inside the water source to collect live
                readings like pH, TDS, turbidity, and temperature.
              </p>
            </motion.div>
            <motion.div
              custom={1}
              variants={stepCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg z-10"
            >
              <Cpu className="w-14 h-14 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                2. Data Processing
              </h3>
              <p className="mt-2 text-slate-700 dark:text-slate-300">
                The onboard micro controller analyzes the sensor values and
                prepares them for secure transmission.
              </p>
            </motion.div>
            <motion.div
              custom={2}
              variants={stepCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg z-10"
            >
              <Signal className="w-14 h-14 text-cyan-500 mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                3. Cloud Upload
              </h3>
              <p className="mt-2 text-slate-700 dark:text-slate-300">
                Sensor data is sent wirelessly to the cloud in real-time using
                Wi-Fi or GSM networks.
              </p>
            </motion.div>
          </div>
          <motion.div
            custom={3}
            variants={stepCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 md:mt-4 flex flex-col items-center text-center p-8 max-w-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg"
          >
            <CheckCircle className="w-14 h-14 text-green-500 mb-4" />
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
              4. Dashboard Insights
            </h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              Users instantly view water quality status, charts, color-coded
              alerts, and drinkability indicators through the AquaSense
              dashboard.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Steps;
