import { motion } from "framer-motion";
import { Droplet, Gauge, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <div className="w-full px-4 md:px-10">
      <section className="text-center py-12 md:py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About AquaSense
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-slate-700 dark:text-slate-300 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          AquaSense is an IoT-enabled real-time water quality monitoring system
          developed to continuously assess the safety of drinking water. The
          system focuses on monitoring critical parameters such as pH, Total
          Dissolved Solids (TDS), turbidity, and temperature, which directly
          influence water potability. By providing instant insights, AquaSense
          overcomes the limitations of traditional laboratory-based water
          testing.
        </motion.p>
      </section>
      <section className="py-10">
        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 md:p-12">
          <motion.h2
            className="text-3xl font-bold text-slate-800 dark:text-slate-100 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="mt-4 text-slate-700 dark:text-slate-300 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Our mission is to provide households and communities with accurate,
            real-time water quality insights, empowering them to make informed
            decisions about drinking and domestic water usage through
            intelligent monitoring technology.
          </motion.p>
        </div>
      </section>
      <section className="py-12 text-center">
        <motion.h2
          className="text-3xl font-bold text-slate-800 dark:text-slate-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          The Problem We Address
        </motion.h2>
        <motion.p
          className="mt-4 max-w-3xl mx-auto text-slate-700 dark:text-slate-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Water contamination caused by industrial discharge, agricultural
          runoff, pipeline corrosion, and environmental pollution often goes
          undetected due to the absence of continuous monitoring. Conventional
          testing methods are time-consuming and fail to provide real-time
          insights. AquaSense addresses this gap by enabling automated,
          real-time detection of unsafe water conditions.
        </motion.p>
      </section>
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-100">
          Why Choose AquaSense?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
          >
            <Droplet className="w-10 h-10 text-sky-500 mb-3" />
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
              Real-Time Monitoring
            </h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              Continuous monitoring of pH, TDS, turbidity, and temperature
              ensures immediate awareness of water quality changes.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
          >
            <Gauge className="w-10 h-10 text-sky-500 mb-3" />
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
              High-Precision Sensors
            </h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              IoT sensors integrated with a micro-controller provide reliable
              measurements with minimal error margin.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
          >
            <ShieldCheck className="w-10 h-10 text-sky-500 mb-3" />
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
              Secure & Reliable Insights
            </h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              Data is securely transmitted and processed to ensure accuracy,
              integrity, and trustworthiness.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Our Vision
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-slate-700 dark:text-slate-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Our vision is to create a reliable and accessible water quality
          monitoring ecosystem that empowers individuals and communities to
          proactively safeguard water resources and improve public health
          through intelligent monitoring solutions.
        </motion.p>
      </section>
    </div>
  );
};

export default About;
