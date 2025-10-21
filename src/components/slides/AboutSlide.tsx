import { motion } from "framer-motion";

export const AboutSlide = () => {
  return (
    <div className="h-screen flex items-center justify-center px-16">
      <div className="max-w-6xl">
        <motion.h2 
          className="text-7xl font-bold mb-12 bg-gradient-to-r from-cosmic-blue to-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Celion
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-8"
        >
          <p className="text-3xl text-foreground/90 leading-relaxed">
            We are a cutting-edge technology company pushing the boundaries of innovation.
          </p>
          
          <p className="text-2xl text-foreground/70 leading-relaxed">
            Our mission is to create transformative solutions that shape the future of technology 
            and empower businesses worldwide.
          </p>
          
          <motion.div 
            className="grid grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-2">50+</div>
              <div className="text-xl text-foreground/60">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-cosmic-pink mb-2">100+</div>
              <div className="text-xl text-foreground/60">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-cosmic-blue mb-2">15+</div>
              <div className="text-xl text-foreground/60">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
