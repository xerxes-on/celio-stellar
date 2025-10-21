import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const AboutSlide = () => {
  const { t } = useTranslation();

  const workProcess = [
    { titleKey: "about.honesty.title", descKey: "about.honesty.description", icon: "🎯" },
    { titleKey: "about.flexibility.title", descKey: "about.flexibility.description", icon: "🤝" },
    { titleKey: "about.reporting.title", descKey: "about.reporting.description", icon: "📊" },
  ];

  return (
    <div className="h-screen flex flex-col items-center justify-center px-16">
      <motion.h2 
        className="text-7xl font-bold mb-20 text-center bg-gradient-to-r from-cosmic-blue via-primary to-cosmic-pink bg-clip-text text-transparent"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {t('about.title')}
      </motion.h2>
      
      <div className="grid grid-cols-3 gap-8 max-w-7xl w-full">
        {workProcess.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <Card className="bg-card/40 backdrop-blur-xl border-primary/30 p-8 h-full hover:shadow-glow transition-all duration-500 group">
              <motion.div
                className="text-6xl mb-6 text-center"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {item.icon}
              </motion.div>
              
              <h3 className="text-3xl font-bold mb-4 text-foreground relative z-10">
                {t(item.titleKey)}
              </h3>
              <p className="text-xl text-foreground/70 leading-relaxed relative z-10">
                {t(item.descKey)}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
