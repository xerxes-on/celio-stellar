import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface ProjectsCarouselSlideProps {
  togglePicture?: () => void;
}

export const ProjectsCarouselSlide = ({ togglePicture }: ProjectsCarouselSlideProps) => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<any[]>([]);
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    // Load partners.json
    fetch('/partners.json')
      .then(res => res.json())
      .then(data => {
        const colors = [
          "from-orange-500 to-red-500",
          "from-blue-500 to-indigo-500",
          "from-green-500 to-emerald-500",
          "from-purple-500 to-violet-500",
          "from-cyan-500 to-sky-500",
          "from-rose-500 to-pink-500",
          "from-amber-500 to-yellow-500",
          "from-lime-500 to-green-500",
          "from-yellow-500 to-orange-500",
          "from-teal-500 to-cyan-500",
          "from-emerald-500 to-green-500",
          "from-indigo-500 to-purple-500",
          "from-slate-500 to-gray-500",
          "from-red-500 to-orange-500",
          "from-violet-500 to-purple-500",
          "from-blue-500 to-cyan-500",
          "from-pink-500 to-rose-500",
          "from-sky-500 to-blue-500",
          "from-orange-600 to-red-600",
          "from-blue-400 to-indigo-400",
          "from-emerald-600 to-teal-600",
          "from-orange-400 to-amber-400",
          "from-purple-600 to-violet-600",
          "from-gray-500 to-slate-500",
          "from-orange-700 to-red-700",
          "from-blue-700 to-indigo-700",
          "from-cyan-600 to-sky-600",
          "from-orange-500 to-yellow-500",
          "from-green-600 to-emerald-600",
          "from-green-500 to-teal-500",
          "from-indigo-600 to-purple-600",
          "from-yellow-600 to-orange-600",
          "from-rose-600 to-pink-600",
          "from-teal-600 to-cyan-600",
        ];

        const projectsWithColors = data.map((project: any, index: number) => ({
          ...project,
          color: colors[index % colors.length]
        }));

        setProjects(projectsWithColors);
      })
      .catch(err => console.error('Failed to load projects:', err));
  }, []);

  // Create six rows for vertical scroll - duplicate for seamless loop
  const row1 = [...projects.slice(0, 6), ...projects.slice(0, 6)];
  const row2 = [...projects.slice(6, 12), ...projects.slice(6, 12)];
  const row3 = [...projects.slice(12, 18), ...projects.slice(12, 18)];
  const row4 = [...projects.slice(18, 24), ...projects.slice(18, 24)];
  const row5 = [...projects.slice(24, 30), ...projects.slice(24, 30)];
  const row6 = [...projects.slice(30, 34), ...projects.slice(30, 34)];

  useEffect(() => {
    // Hide title and show carousel after 3 seconds
    const titleTimer = setTimeout(() => {
      setShowTitle(false);
    }, 3000);

    return () => clearTimeout(titleTimer);
  }, []);

  if (projects.length === 0) {
    return null; // Wait for projects to load
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Title Screen */}
      {showTitle && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20 bg-gradient-to-br from-background via-primary/5 to-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-9xl font-bold text-center bg-gradient-to-r from-primary via-cosmic-pink to-cosmic-blue bg-clip-text text-transparent"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100
              }}
              style={{
                textShadow: "0 0 80px hsl(var(--primary-glow) / 0.5)",
              }}
            >
            {t("projects.title")}
          </motion.h2>
        </motion.div>
      )}

      {/* Vertical Scrolling Rows */}
      {!showTitle && (
        <motion.div
          className="relative w-full h-full flex gap-8 justify-center items-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
        {/* Column 1 */}
        <motion.div
          className="flex flex-col gap-8"
          initial={{ y: 0 }}
          animate={{ y: -3200 }}
          transition={{
            duration: 27,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {row1.map((project, index) => (
            <motion.div
              key={`row1-${index}`}
              className="flex-shrink-0 w-96 h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${project.color} shadow-xl`}>
                <div className="w-full h-full rounded-2xl bg-background/90 backdrop-blur-sm p-6 flex flex-col items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Column 2 */}
        <motion.div
          className="flex flex-col gap-8"
          initial={{ y: -3200 }}
          animate={{ y: 0 }}
          transition={{
            duration: 27,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {row2.map((project, index) => (
            <motion.div
              key={`row2-${index}`}
              className="flex-shrink-0 w-96 h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${project.color} shadow-xl`}>
                <div className="w-full h-full rounded-2xl bg-background/90 backdrop-blur-sm p-6 flex flex-col items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Column 3 */}
        <motion.div
          className="flex flex-col gap-8"
          initial={{ y: 0 }}
          animate={{ y: -3200 }}
          transition={{
            duration: 27,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {row3.map((project, index) => (
            <motion.div
              key={`row3-${index}`}
              className="flex-shrink-0 w-96 h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${project.color} shadow-xl`}>
                <div className="w-full h-full rounded-2xl bg-background/90 backdrop-blur-sm p-6 flex flex-col items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Column 4 */}
        <motion.div
          className="flex flex-col gap-8"
          initial={{ y: -3200 }}
          animate={{ y: 0 }}
          transition={{
            duration: 27,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {row4.map((project, index) => (
            <motion.div
              key={`row4-${index}`}
              className="flex-shrink-0 w-96 h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${project.color} shadow-xl`}>
                <div className="w-full h-full rounded-2xl bg-background/90 backdrop-blur-sm p-6 flex flex-col items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Column 5 */}
        <motion.div
          className="flex flex-col gap-8"
          initial={{ y: 0 }}
          animate={{ y: -3200 }}
          transition={{
            duration: 27,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {row5.map((project, index) => (
            <motion.div
              key={`row5-${index}`}
              className="flex-shrink-0 w-96 h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${project.color} shadow-xl`}>
                <div className="w-full h-full rounded-2xl bg-background/90 backdrop-blur-sm p-6 flex flex-col items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Column 6 */}
        <motion.div
          className="flex flex-col gap-8"
          initial={{ y: -3200 }}
          animate={{ y: 0 }}
          transition={{
            duration: 27,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {row6.map((project, index) => (
            <motion.div
              key={`row6-${index}`}
              className="flex-shrink-0 w-96 h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${project.color} shadow-xl`}>
                <div className="w-full h-full rounded-2xl bg-background/90 backdrop-blur-sm p-6 flex flex-col items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </motion.div>
      )}

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
          delay: 0.5
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
