import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ProjectsSlide = () => {
  const { t } = useTranslation();
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: "olcha",
      titleKey: "projects.olcha.title",
      descKey: "projects.olcha.description",
      techKey: "projects.olcha.tech",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      textGradient: "from-amber-400 to-orange-600",
    },
    {
      id: "topbrains",
      titleKey: "projects.topbrains.title",
      descKey: "projects.topbrains.description",
      techKey: "projects.topbrains.tech",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      textGradient: "from-blue-400 to-indigo-600",
    },
    {
      id: "ihma",
      titleKey: "projects.ihma.title",
      descKey: "projects.ihma.description",
      techKey: "projects.ihma.tech",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      textGradient: "from-green-400 to-emerald-600",
    },
    {
      id: "praelegal",
      titleKey: "projects.praelegal.title",
      descKey: "projects.praelegal.description",
      techKey: "projects.praelegal.tech",
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      textGradient: "from-purple-400 to-violet-600",
    },
    {
      id: "emu",
      titleKey: "projects.emu.title",
      descKey: "projects.emu.description",
      techKey: "projects.emu.tech",
      gradient: "from-cyan-500 via-sky-500 to-blue-500",
      textGradient: "from-cyan-400 to-sky-600",
    },
    {
      id: "express24",
      titleKey: "projects.express24.title",
      descKey: "projects.express24.description",
      techKey: "projects.express24.tech",
      gradient: "from-rose-500 via-pink-500 to-red-500",
      textGradient: "from-rose-400 to-pink-600",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden">
      <motion.h2
        className="absolute top-20 text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-cosmic-pink bg-clip-text text-transparent z-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("projects.title")}
      </motion.h2>

      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            initial={{ x: "100%", opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: "-100%", opacity: 0, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 1.2,
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-full h-full flex items-center justify-center px-8 md:px-20">
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10 max-w-6xl w-full">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.3,
                  }}
                  className="mb-12 flex items-center justify-center"
                >
                  <div
                    className={`w-48 h-48 md:w-64 md:h-64 rounded-3xl bg-gradient-to-br ${project.gradient} shadow-2xl flex items-center justify-center`}
                  >
                    <span className="text-7xl md:text-9xl font-black text-white/90 uppercase tracking-wider">
                      {project.id.substring(0, 1)}
                    </span>
                  </div>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className={`text-5xl md:text-7xl font-bold mb-6 text-center bg-gradient-to-r ${project.textGradient} bg-clip-text text-transparent`}
                >
                  {t(project.titleKey)}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-2xl md:text-3xl text-foreground/80 mb-8 text-center max-w-4xl mx-auto"
                >
                  {t(project.descKey)}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex items-center justify-center gap-4 flex-wrap"
                >
                  {t(project.techKey)
                    .split("•")
                    .map((tech, index) => (
                      <motion.span
                        key={index}
                        className={`px-6 py-3 rounded-full bg-gradient-to-r ${project.gradient} text-white font-semibold text-lg shadow-lg`}
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      >
                        {tech.trim()}
                      </motion.span>
                    ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevProject}
          className="absolute left-8 z-20 p-4 rounded-full bg-primary/20 backdrop-blur-sm hover:bg-primary/40 transition-all duration-300 group"
          aria-label={t("navigation.previousProject")}
        >
          <ChevronLeft className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextProject}
          className="absolute right-8 z-20 p-4 rounded-full bg-primary/20 backdrop-blur-sm hover:bg-primary/40 transition-all duration-300 group"
          aria-label={t("navigation.nextProject")}
        >
          <ChevronRight className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-32 flex gap-3 z-20">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`h-3 rounded-full transition-all duration-500 ${
              index === currentProject
                ? "w-16 bg-primary"
                : "w-3 bg-primary/30 hover:bg-primary/50"
            }`}
            animate={{
              scale: index === currentProject ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              repeat: index === currentProject ? Infinity : 0,
            }}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
