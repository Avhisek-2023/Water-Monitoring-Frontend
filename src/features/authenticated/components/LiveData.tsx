import { motion } from "framer-motion";
import { Droplet, Thermometer, Activity, Waves } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import SensorCard from "./SensorCard";

const sampleData = [
  { time: "1s", ph: 7.2, tds: 120, turbidity: 3 },
  { time: "2s", ph: 7.1, tds: 130, turbidity: 2.8 },
  { time: "3s", ph: 7.0, tds: 118, turbidity: 3.1 },
  { time: "4s", ph: 6.9, tds: 125, turbidity: 3.2 },
  { time: "5s", ph: 7.0, tds: 128, turbidity: 3 },
];

const LiveData = () => {
  const ph = 7.0;
  const tds = 125;
  const turbidity = 3.1;

  const waterStatus =
    ph >= 6.5 && ph <= 8.5 && tds <= 300 && turbidity < 5
      ? "Safe to Drink"
      : "Not Safe";

  return (
    <div className="w-full px-4 md:px-10 py-10">
      <motion.h1
        className="text-4xl font-bold text-slate-800 dark:text-slate-100 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Live Water Quality Data
      </motion.h1>
      <motion.p
        className="text-center text-slate-700 dark:text-slate-300 mt-2 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Real-time readings from your AquaSense IoT device.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mx-auto max-w-xl p-6 rounded-2xl shadow-xl border bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-slate-200 dark:border-slate-700 text-center"
      >
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
          Water Status
        </h2>
        <p
          className={`mt-3 text-2xl font-bold ${
            waterStatus === "Safe to Drink" ? "text-green-600" : "text-red-500"
          }`}
        >
          {waterStatus}
        </p>
        <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
          Based on pH, TDS & turbidity thresholds.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <SensorCard
          icon={<Droplet className="text-sky-500" size={32} />}
          label="pH Level"
          value={ph}
          unit=""
        />
        <SensorCard
          icon={<Waves className="text-blue-500" size={32} />}
          label="TDS"
          value={tds}
          unit="ppm"
        />
        <SensorCard
          icon={<Activity className="text-purple-500" size={32} />}
          label="Turbidity"
          value={turbidity}
          unit="NTU"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <SensorCard
          icon={<Thermometer className="text-red-500" size={32} />}
          label="Water Temperature"
          value={26}
          unit="°C"
        />
      </div>
      <section>
        <motion.h2
          className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Live Sensor Trends
        </motion.h2>
        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="ph"
                stroke="#0ea5e9"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="tds"
                stroke="#6366f1"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="turbidity"
                stroke="#8b5cf6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default LiveData;
