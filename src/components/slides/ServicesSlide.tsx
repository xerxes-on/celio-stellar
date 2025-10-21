import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";

const services = [
  { key: "webDev", color: "from-purple-500 to-pink-500", pattern: "dots" },
  { key: "mobileDev", color: "from-cyan-500 to-blue-500", pattern: "waves" },
  { key: "security", color: "from-green-500 to-emerald-500", pattern: "grid" },
  { key: "consulting", color: "from-orange-500 to-red-500", pattern: "circles" },
  { key: "cloud", color: "from-blue-500 to-indigo-500", pattern: "lines" },
  { key: "ai", color: "from-pink-500 to-purple-500", pattern: "hexagon" },
];

interface ServicesSlideProps {
  togglePicture?: () => void;
}

export const ServicesSlide = ({ togglePicture }: ServicesSlideProps) => {
  const { t } = useTranslation();

  return (
    <div className="h-screen flex flex-col items-center justify-center px-16 relative overflow-hidden">
      {/* Elegant floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full blur-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--cosmic-pink)) 100%)`,
              opacity: 0.1,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.h2
        className="text-7xl font-bold mb-20 text-center bg-gradient-to-r from-primary via-cosmic-pink to-cosmic-blue bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t('services.title')}
      </motion.h2>

      <div className="grid grid-cols-3 gap-8 max-w-7xl w-full relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.6,
            }}
            whileHover={{
              scale: 1.03,
              y: -10,
            }}
          >
            <Card className="bg-card/40 backdrop-blur-xl border-primary/20 p-8 h-full transition-all duration-500 group relative overflow-hidden">
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* SVG Pattern Background */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0.5 }} />
                    </linearGradient>
                  </defs>
                  {service.pattern === "dots" && (
                    <pattern id={`pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="2" fill={`url(#grad-${index})`} />
                    </pattern>
                  )}
                  {service.pattern === "waves" && (
                    <pattern id={`pattern-${index}`} x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
                      <path d="M0,10 Q10,0 20,10 T40,10" stroke={`url(#grad-${index})`} strokeWidth="2" fill="none" />
                    </pattern>
                  )}
                  {service.pattern === "grid" && (
                    <pattern id={`pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="20" height="20" fill="none" stroke={`url(#grad-${index})`} strokeWidth="1" />
                    </pattern>
                  )}
                  {service.pattern === "circles" && (
                    <pattern id={`pattern-${index}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                      <circle cx="15" cy="15" r="8" fill="none" stroke={`url(#grad-${index})`} strokeWidth="2" />
                    </pattern>
                  )}
                  {service.pattern === "lines" && (
                    <pattern id={`pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="20" y2="20" stroke={`url(#grad-${index})`} strokeWidth="2" />
                    </pattern>
                  )}
                  {service.pattern === "hexagon" && (
                    <pattern id={`pattern-${index}`} x="0" y="0" width="35" height="30" patternUnits="userSpaceOnUse">
                      <polygon points="17.5,2 30,10 30,22 17.5,30 5,22 5,10" fill="none" stroke={`url(#grad-${index})`} strokeWidth="2" />
                    </pattern>
                  )}
                  <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                </svg>
              </div>

              {/* Gradient accent bar */}
              <motion.div
                className={`w-16 h-1 bg-gradient-to-r ${service.color} rounded-full mb-6`}
                animate={{
                  scaleX: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />

              <h3 className="text-2xl font-bold mb-4 text-foreground relative z-10">
                {t(`services.${service.key}.title`)}
              </h3>
              <p className="text-foreground/70 leading-relaxed relative z-10">
                {t(`services.${service.key}.description`)}
              </p>

              {/* Animated corner accent */}
              <motion.div
                className={`absolute bottom-0 left-0 w-0 h-0 border-l-[40px] border-l-transparent border-b-[40px] opacity-20`}
                style={{
                  borderBottomColor: `hsl(var(--primary))`,
                }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            </Card>
          </motion.div>
        ))}
      </div>

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
          delay: 1.2
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
