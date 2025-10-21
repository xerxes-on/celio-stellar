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
          How We Work
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-8"
        >
          <p className="text-3xl text-foreground/90 leading-relaxed">
            Design, Development and Security
          </p>
          
          <p className="text-2xl text-foreground/70 leading-relaxed">
            Experience in creating websites and mobile applications, as well as providing IT consulting services. 
            Our team helps clients become market leaders.
          </p>
          
          <motion.div 
            className="grid grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="bg-card/20 backdrop-blur-lg border border-primary/20 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <div className="text-3xl font-bold text-primary mb-3">Honesty</div>
              <div className="text-lg text-foreground/60">Detailed audit, transparent goals, realistic deadlines</div>
            </div>
            <div className="bg-card/20 backdrop-blur-lg border border-cosmic-pink/20 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🤝</div>
              <div className="text-3xl font-bold text-cosmic-pink mb-3">Flexibility</div>
              <div className="text-lg text-foreground/60">Personal manager, your rhythm, full transparency</div>
            </div>
            <div className="bg-card/20 backdrop-blur-lg border border-cosmic-blue/20 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">📊</div>
              <div className="text-3xl font-bold text-cosmic-blue mb-3">Reporting</div>
              <div className="text-lg text-foreground/60">Twice weekly updates, monthly comprehensive reports</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
