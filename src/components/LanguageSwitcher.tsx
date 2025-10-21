import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const languages = ['en', 'ru', 'uz'];

  return (
    <motion.div 
      className="fixed top-8 right-8 z-50 flex gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {languages.map((lang) => (
        <Button
          key={lang}
          variant={i18n.language === lang ? 'default' : 'outline'}
          size="sm"
          onClick={() => i18n.changeLanguage(lang)}
          className="uppercase font-semibold transition-all duration-300 hover:scale-110"
        >
          {lang}
        </Button>
      ))}
    </motion.div>
  );
};
