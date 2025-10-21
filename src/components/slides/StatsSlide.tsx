import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

interface StatsSlideProps {
  togglePicture?: () => void;
}

const Counter = ({ value, gradient }: { value: string; gradient: string }) => {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    // Extract number and suffix from value (e.g., "34+" -> 34, "+")
    const match = value.match(/(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseInt(match[1]);
    const suffix = match[2];

    let current = 0;
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic for smooth deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      current = Math.floor(easeProgress * targetNumber);

      setDisplayValue(current + suffix);

      if (progress >= 1) {
        setDisplayValue(targetNumber + suffix);
        clearInterval(timer);
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.h3
      className={`text-6xl font-black mb-4 bg-gradient-to-br ${gradient} bg-clip-text text-transparent`}
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {displayValue}
    </motion.h3>
  );
};

export const StatsSlide = ({ togglePicture }: StatsSlideProps) => {
  const { t } = useTranslation();

  const stats = [
    {
      value: t("hero.stats.projects"),
      label: t("hero.stats.projectsLabel"),
      gradient: "from-violet-500 to-fuchsia-500",
      shape: "square",
    },
    {
      value: t("hero.stats.clients"),
      label: t("hero.stats.clientsLabel"),
      gradient: "from-cyan-500 to-blue-600",
      shape: "circle",
    },
    {
      value: t("hero.stats.years"),
      label: t("hero.stats.yearsLabel"),
      gradient: "from-emerald-500 to-teal-400",
      shape: "triangle",
    },
    {
      value: t("hero.stats.team"),
      label: t("hero.stats.teamLabel"),
      gradient: "from-amber-500 to-orange-600",
      shape: "diamond",
    },
  ];

  return (
    <div className="h-screen flex flex-col items-center justify-center px-8 relative overflow-hidden">
      {/* Elegant floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--cosmic-pink)) 100%)`,
              opacity: 0.2,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <motion.h2
        className="text-6xl md:text-8xl font-bold mb-24 text-center bg-gradient-to-r from-primary to-cosmic-pink bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("hero.impact")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl w-full relative z-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
            }}
            className="relative group"
          >
            <motion.div
              className="relative bg-card/30 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 h-full overflow-hidden"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient background overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Geometric Shape */}
              <div className="w-24 h-24 mx-auto mb-6 relative">
                {stat.shape === "square" && (
                  <motion.div
                    className={`w-full h-full bg-gradient-to-br ${stat.gradient} rounded-2xl`}
                    animate={{
                      rotate: [0, 90, 180, 270, 360],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
                {stat.shape === "circle" && (
                  <motion.div
                    className={`w-full h-full rounded-full`}
                    style={{
                      background: `conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--cosmic-pink)), hsl(var(--primary)))`,
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
                {stat.shape === "triangle" && (
                  <motion.div
                    className="w-full h-full relative"
                    animate={{
                      rotate: [0, 120, 240, 360],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id={`triangle-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: 'hsl(var(--cosmic-pink))', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      <polygon points="50,10 90,80 10,80" fill={`url(#triangle-grad-${index})`} />
                    </svg>
                  </motion.div>
                )}
                {stat.shape === "diamond" && (
                  <motion.div
                    className="w-full h-full relative"
                    animate={{
                      rotate: [0, 90, 180, 270, 360],
                    }}
                    transition={{
                      duration: 14,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id={`diamond-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: 'hsl(var(--cosmic-blue))', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      <polygon points="50,10 90,50 50,90 10,50" fill={`url(#diamond-grad-${index})`} />
                    </svg>
                  </motion.div>
                )}
              </div>

              {/* Stats */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.15 + 0.3,
                  duration: 0.6,
                  type: "spring",
                }}
                className="text-center"
              >
                <Counter value={stat.value} gradient={stat.gradient} />
                <p className="text-xl text-foreground/80 font-semibold tracking-wide">
                  {stat.label}
                </p>
              </motion.div>

              {/* Animated border accent */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.5,
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.p
          className="text-2xl text-foreground/70 font-light max-w-3xl mx-auto"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {t("hero.impactDescription")}
        </motion.p>
      </motion.div>

      {/* Celion Branding */}
      <motion.div
        onClick={togglePicture}
        className="absolute bottom-8 right-8 text-5xl font-bold bg-gradient-to-r from-primary via-cosmic-pink to-cosmic-blue bg-clip-text text-transparent cursor-pointer hover:scale-110 transition-transform z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.7, 1, 0.7],
          scale: [0.98, 1, 0.98]
        }}
        transition={{
          opacity: { duration: 3, repeat: Infinity },
          scale: { duration: 3, repeat: Infinity },
          delay: 1.5
        }}
        style={{
          textShadow: "0 0 40px hsl(var(--primary-glow) / 0.3)",
        }}
      >
        celion.io
      </motion.div>
    </div>
  );
};
