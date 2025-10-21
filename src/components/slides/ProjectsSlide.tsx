import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";

export const ProjectsSlide = () => {
  const { t } = useTranslation();

  const projects = [
    {
      titleKey: "projects.olcha.title",
      descKey: "projects.olcha.description",
      techKey: "projects.olcha.tech",
    },
    {
      titleKey: "projects.topbrains.title",
      descKey: "projects.topbrains.description",
      techKey: "projects.topbrains.tech",
    },
    {
      titleKey: "projects.nasp.title",
      descKey: "projects.nasp.description",
      techKey: "projects.nasp.tech",
    },
  ];
  return (
    <div className="h-screen flex flex-col items-center justify-center px-16">
      <motion.h2 
        className="text-7xl font-bold mb-20 text-center bg-gradient-to-r from-primary to-cosmic-pink bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t('projects.title')}
      </motion.h2>
      
      <div className="grid grid-cols-3 gap-12 max-w-7xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            <Card className="bg-card/50 backdrop-blur-xl border-primary/30 p-8 h-full hover:shadow-glow transition-all duration-500 hover:scale-105 group relative overflow-hidden">
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-cosmic opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                animate={{
                  background: [
                    "linear-gradient(135deg, hsl(280, 90%, 45%) 0%, hsl(250, 100%, 60%) 100%)",
                    "linear-gradient(135deg, hsl(300, 100%, 70%) 0%, hsl(270, 85%, 60%) 100%)",
                    "linear-gradient(135deg, hsl(280, 90%, 45%) 0%, hsl(250, 100%, 60%) 100%)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.3 + 0.5, duration: 0.5, type: "spring" as const }}
                className="w-16 h-16 bg-gradient-cosmic rounded-2xl mb-6 mx-auto relative z-10"
                whileHover={{ rotate: 360, scale: 1.1 }}
              />
              
              <h3 className="text-3xl font-bold mb-4 text-foreground relative z-10">
                {t(project.titleKey)}
              </h3>
              <p className="text-xl text-foreground/70 mb-4 relative z-10">
                {t(project.descKey)}
              </p>
              <motion.p 
                className="text-sm text-primary font-semibold tracking-wide relative z-10"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {t(project.techKey)}
              </motion.p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
