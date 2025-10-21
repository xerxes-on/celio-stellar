import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface HeroSlideProps {
  togglePicture?: () => void;
}

export const HeroSlide = ({ togglePicture }: HeroSlideProps) => {
  const { t } = useTranslation();
  const title = t('hero.title');

  return (
    <div className="h-screen flex flex-col items-center justify-center px-8 relative overflow-hidden">
      {/* Animated Gradient Background - More performant */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-cosmic-pink/5 to-cosmic-blue/10"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Reduced Animated Particles for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
            animate={{
              y: -window.innerHeight,
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.5,
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
        <h1 className="text-[12rem] font-bold mb-8 bg-gradient-to-r from-primary via-cosmic-pink to-cosmic-blue bg-clip-text text-transparent leading-none flex items-center justify-center gap-8">
          <motion.img
            src="/logo-transparent.png"
            alt="Celion Logo"
            className="w-48 h-48 rounded-3xl shadow-2xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1.5,
              type: "spring",
              stiffness: 100,
              delay: 0.3
            }}
            style={{
              filter: "drop-shadow(0 0 40px hsl(var(--primary-glow) / 0.6))"
            }}
          />
          <span>
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
          </span>
        </h1>
        
        <motion.p 
          className="text-4xl text-foreground/80 font-light tracking-wide mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.p 
          className="text-3xl text-foreground/60 font-light tracking-wide"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          {t('hero.description')}
        </motion.p>
        
        <motion.div
          className="mt-16 w-32 h-1 bg-gradient-cosmic mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          animate-pulse
        />

      </motion.div>

      {/* Celion Branding */}
      <motion.div
        onClick={togglePicture}
        className="absolute bottom-8 right-8 flex items-center gap-4 cursor-pointer hover:scale-110 transition-transform z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.7, 1, 0.7],
          scale: [0.98, 1, 0.98]
        }}
        transition={{
          opacity: { duration: 3, repeat: Infinity },
          scale: { duration: 3, repeat: Infinity },
          delay: 2
        }}
      >
        <motion.img
          src="/logo-transparent.png"
          alt="Celion Logo"
          className="w-16 h-16 rounded-xl shadow-lg"
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            filter: "drop-shadow(0 0 20px hsl(var(--primary-glow) / 0.4))"
          }}
        />
        <span
          className="text-5xl font-bold bg-gradient-to-r from-primary via-cosmic-pink to-cosmic-blue bg-clip-text text-transparent"
          style={{
            textShadow: "0 0 40px hsl(var(--primary-glow) / 0.3)",
          }}
        >
          celion.io
        </span>
      </motion.div>
    </div>
  );
};
