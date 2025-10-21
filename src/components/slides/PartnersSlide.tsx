import { motion } from "framer-motion";

const partners = [
  "TechCorp Global",
  "Innovation Labs",
  "Digital Ventures",
  "Cloud Solutions Inc",
  "Future Systems",
  "Quantum Dynamics",
];

export const PartnersSlide = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-16">
      <motion.h2 
        className="text-7xl font-bold mb-20 text-center bg-gradient-to-r from-cosmic-pink to-cosmic-blue bg-clip-text text-transparent"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Partners
      </motion.h2>
      
      <div className="grid grid-cols-3 gap-12 max-w-6xl w-full">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="aspect-square bg-card/30 backdrop-blur-xl border-2 border-primary/20 rounded-3xl flex items-center justify-center p-8 hover:border-primary/60 transition-all duration-500 hover:shadow-glow"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
              }}
              className="text-center"
            >
              <p className="text-2xl font-bold text-foreground">{partner}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
