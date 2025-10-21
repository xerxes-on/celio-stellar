import { motion } from "framer-motion";

export const HeroSlide = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center"
      >
        <motion.h1 
          className="text-9xl font-bold mb-8 bg-gradient-to-r from-primary via-cosmic-pink to-cosmic-blue bg-clip-text text-transparent"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          CELION.IO
        </motion.h1>
        
        <motion.p 
          className="text-4xl text-foreground/80 font-light tracking-wide"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Innovation in Action
        </motion.p>
        
        <motion.div
          className="mt-16 w-32 h-1 bg-gradient-cosmic mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
      </motion.div>
    </div>
  );
};
