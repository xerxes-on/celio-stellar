import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Code, Smartphone, Shield, Brain, Cloud, Cpu } from "lucide-react";

const services = [
  { key: "webDev", icon: Code, color: "from-purple-500 to-pink-500" },
  { key: "mobileDev", icon: Smartphone, color: "from-cyan-500 to-blue-500" },
  { key: "security", icon: Shield, color: "from-green-500 to-emerald-500" },
  { key: "consulting", icon: Brain, color: "from-orange-500 to-red-500" },
  { key: "cloud", icon: Cloud, color: "from-blue-500 to-indigo-500" },
  { key: "ai", icon: Cpu, color: "from-pink-500 to-purple-500" },
];

export const ServicesSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen flex flex-col items-center justify-center px-16 relative overflow-hidden">
      {/* Floating 3D Cards Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 bg-gradient-to-br from-primary/20 to-cosmic-pink/20 rounded-lg backdrop-blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotateX: [0, 180, 360],
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.h2 
        className="text-7xl font-bold mb-20 text-center bg-gradient-to-r from-primary via-cosmic-pink to-cosmic-blue bg-clip-text text-transparent"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {t('services.title')}
      </motion.h2>
      
      <div className="grid grid-cols-3 gap-8 max-w-7xl w-full relative z-10">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.8,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50 
              }}
            >
              <Card className="bg-card/40 backdrop-blur-xl border-primary/20 p-6 h-full hover:shadow-glow transition-all duration-500 group relative overflow-hidden">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-4 flex items-center justify-center`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {t(`services.${service.key}.description`)}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
