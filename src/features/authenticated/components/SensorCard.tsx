import { motion } from "framer-motion";

const SensorCard = ({
  icon,
  label,
  value,
  unit,
}: {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  unit: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-6 bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 backdrop-blur-xl shadow-xl rounded-2xl text-center"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
        {label}
      </h3>
      <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
        {value}
        <span className="text-lg ml-1">{unit}</span>
      </p>
    </motion.div>
  );
};

export default SensorCard;
