import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { GraduationCap, Building2, Users, Stethoscope } from "lucide-react";

interface EmuSlideProps {
  togglePicture?: () => void;
}

export const EmuSlide = ({ togglePicture }: EmuSlideProps) => {
  const { t } = useTranslation();

  const features = [
    { icon: GraduationCap, labelKey: "projects.emu.highlights.students" },
    { icon: Building2, labelKey: "projects.emu.highlights.campuses" },
    { icon: Stethoscope, labelKey: "projects.emu.highlights.practice" },
    { icon: Users, labelKey: "projects.emu.highlights.faculty" },
  ];

  return (
    <div className="h-screen w-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-cyan-950/20 via-background to-sky-950/20">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-12 flex items-center gap-20">
        <motion.div
          initial={{ opacity: 0, x: -100, rotateY: -90 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="flex-shrink-0"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-[500px] h-[500px] rounded-[80px] bg-gradient-to-br from-cyan-600/20 via-sky-600/20 to-blue-600/20 shadow-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm border border-cyan-500/20"
              animate={{
                boxShadow: [
                  "0 25px 50px -12px rgba(6, 182, 212, 0.5)",
                  "0 25px 50px -12px rgba(14, 165, 233, 0.7)",
                  "0 25px 50px -12px rgba(6, 182, 212, 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <img
                src="/emu-logo.png"
                alt={t("projects.emu.title")}
                className="w-full h-full object-contain p-12 relative z-10"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.h2
              className="text-8xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent leading-tight"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {t("projects.emu.title")}
            </motion.h2>

            <motion.p
              className="text-2xl text-foreground/90 mb-12 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {t("projects.emu.description")}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {t("projects.emu.tech")
                .split("•")
                .map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-sky-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl text-2xl font-semibold text-cyan-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      y: {
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.2,
                      },
                    }}
                  >
                    {tech.trim()}
                  </motion.span>
                ))}
            </motion.div>
          </motion.div>
        </div>
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
