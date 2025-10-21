import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import teamCollab from "@/assets/team-collab.jpg";

export const TeamSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen flex items-center justify-center px-16 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${teamCollab})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-primary/30 backdrop-blur-sm" />

      {/* 3D Rotating Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-primary/30 rounded-full"
            style={{
              width: `${300 + i * 150}px`,
              height: `${300 + i * 150}px`,
            }}
            animate={{
              rotateY: 360,
              rotateX: [0, 20, 0],
            }}
            transition={{
              duration: 10 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        <motion.h2 
          className="text-8xl font-bold mb-8 bg-gradient-to-r from-primary via-cosmic-pink to-cosmic-blue bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          {t('team.title')}
        </motion.h2>
        
        <motion.p 
          className="text-3xl text-foreground/90 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t('team.description')}
        </motion.p>

        {/* Animated Stats */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          {[
            {
              value: t("team.stats.projects.value"),
              label: t("team.stats.projects.label"),
            },
            {
              value: t("team.stats.members.value"),
              label: t("team.stats.members.label"),
            },
            {
              value: t("team.stats.years.value"),
              label: t("team.stats.years.label"),
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-card/40 backdrop-blur-xl border border-primary/30 rounded-2xl p-6"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2 }}
              whileHover={{ scale: 1.1, borderColor: "hsl(var(--primary))" }}
            >
              <motion.div 
                className="text-5xl font-bold text-primary mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-foreground/70 text-xl">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <Button 
            size="lg" 
            className="text-xl px-12 py-6 bg-gradient-to-r from-primary to-cosmic-pink hover:shadow-glow"
          >
            {t('team.cta')}
          </Button>
        </motion.div>
      </div>

      {/* Orbiting Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-primary/60 rounded-full"
          style={{
            left: "50%",
            top: "50%",
          }}
          animate={{
            x: Math.cos((i * 360 / 20) * Math.PI / 180) * 300,
            y: Math.sin((i * 360 / 20) * Math.PI / 180) * 300,
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
};
