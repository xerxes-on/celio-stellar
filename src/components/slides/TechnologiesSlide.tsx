import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import techAbstract from "@/assets/tech-abstract.jpg";

const techStack = {
  frontend: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind"],
  backend: ["Node.js", "Python", "Java", "Go", "PHP", ".NET"],
  mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
  devops: ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD"],
  database: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"],
};

export const TechnologiesSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen flex flex-col items-center justify-center px-16 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${techAbstract})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <motion.path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.h2 
        className="text-7xl font-bold mb-16 text-center bg-gradient-to-r from-cosmic-blue via-primary to-cosmic-pink bg-clip-text text-transparent relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t('technologies.title')}
      </motion.h2>
      
      <div className="grid grid-cols-5 gap-8 max-w-7xl w-full relative z-10">
        {Object.entries(techStack).map(([category, techs], catIndex) => (
          <motion.div
            key={category}
            className="flex flex-col gap-3"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: catIndex * 0.15, duration: 0.8 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-primary mb-2 uppercase tracking-wider"
              whileHover={{ scale: 1.1, textShadow: "0 0 20px hsl(var(--primary))" }}
            >
              {t(`technologies.${category}`)}
            </motion.h3>
            {techs.map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-card/30 backdrop-blur-md border border-primary/20 rounded-lg p-3 text-center hover:bg-card/50 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: catIndex * 0.15 + index * 0.05 }}
                whileHover={{ 
                  scale: 1.1, 
                  borderColor: "hsl(var(--primary))",
                  boxShadow: "0 0 20px hsl(var(--primary) / 0.5)"
                }}
              >
                <motion.span 
                  className="text-foreground/90 font-medium group-hover:text-primary transition-colors"
                  animate={{ 
                    opacity: [0.7, 1, 0.7] 
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                >
                  {tech}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Floating Tech Icons */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`tech-${i}`}
          className="absolute w-4 h-4 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};
