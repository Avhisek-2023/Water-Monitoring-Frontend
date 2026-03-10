import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Bubbles = () => {
  const [bubbles, setBubbles] = useState<
    { id: number; size: number; left: string; duration: number }[]
  >([]);

  useEffect(() => {
    const bubbleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 40 + 20,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 6,
    }));
    setBubbles(bubbleArray);
  }, []);
  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {bubbles.map((b) => (
          <motion.div
            key={b.id}
            className="absolute rounded-full bg-linear-to-br from-white/70 to-sky-300/60dark:from-white/20 dark:to-teal-400/30 backdrop-blur-2xl border border-white/60 dark:border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
            style={{
              width: b.size,
              height: b.size,
              left: b.left,
              bottom: `-${b.size}px`,
            }}
            animate={{
              y: ["0%", "-130vh"],
              x: [0, Math.random() * 60 - 30],
              opacity: [0.1, 0.9, 0.1],
              scale: [0.9, 1.15, 0.95],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: b.duration,
              repeat: Infinity,
              delay: Math.random() * -b.duration,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Bubbles;
