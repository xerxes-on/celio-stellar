import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const PartnersSlide = () => {
  const { t } = useTranslation();

  const partners = [
    { nameKey: "partners.olcha" },
    { nameKey: "partners.topbrains" },
    { nameKey: "partners.nasp" },
    { nameKey: "partners.uzinfocom" },
    { nameKey: "partners.imkon" },
    { nameKey: "partners.trustbank" },
  ];

  return (
    <div className="h-screen flex flex-col items-center justify-center px-16">
      <motion.h2 
        className="text-7xl font-bold mb-20 text-center bg-gradient-to-r from-primary via-cosmic-blue to-cosmic-pink bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t('partners.title')}
      </motion.h2>
      
      <div className="grid grid-cols-3 gap-12 max-w-6xl w-full">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="aspect-square bg-card/30 backdrop-blur-xl border-2 border-primary/20 rounded-3xl flex items-center justify-center p-8 hover:border-primary/60 transition-all duration-500 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.5, ease: "linear" }}
            />
            
            <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-center relative z-10">
              {t(partner.nameKey)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
