import { motion } from "framer-motion";

export const HeroSlide = () => {
  const title = "CELION.IO";

  return (
    <div className="h-screen flex flex-col items-center justify-center px-8 relative">
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
            animate={{
              y: -window.innerHeight,
              scale: [1, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center relative z-10"
      >
        <h1 className="text-9xl font-bold mb-8 bg-gradient-to-r from-primary via-cosmic-pink to-cosmic-blue bg-clip-text text-transparent">
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: i * 0.08,
                duration: 0.8,
                type: "spring" as const,
                stiffness: 100,
              }}
              className="inline-block"
              style={{
                textShadow: "0 0 40px hsl(var(--primary-glow) / 0.5)",
              }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        
        <motion.p 
          className="text-4xl text-foreground/80 font-light tracking-wide"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Innovation in Action
        </motion.p>
        
        <motion.div
          className="mt-16 w-32 h-1 bg-gradient-cosmic mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          animate-pulse
        />

        {/* Orbiting Elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute w-3 h-3 bg-cosmic-pink rounded-full"
            style={{
              top: "50%",
              left: "50%",
            }}
            animate={{
              rotate: 360,
              x: Math.cos((i * 120 * Math.PI) / 180) * 200,
              y: Math.sin((i * 120 * Math.PI) / 180) * 200,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};
