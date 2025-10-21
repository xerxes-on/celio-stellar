import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import securityTech from "@/assets/security-tech.jpg";

export const ContactSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen flex items-center justify-center px-16 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${securityTech})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
      />

      {/* Circuit Lines Animation */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1="0%"
            x2={`${Math.random() * 100}%`}
            y2="100%"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>

      <div className="grid grid-cols-2 gap-12 max-w-7xl w-full relative z-10">
        {/* Contact Info */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-cosmic-pink bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('contact.title')}
          </motion.h2>
          
          <motion.p 
            className="text-2xl text-foreground/70 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t('contact.description')}
          </motion.p>

          {[
            { icon: Mail, label: 'contact.email', value: 'info@celion.io' },
            { icon: Phone, label: 'contact.phone', value: '+998 71 123 45 67' },
            { icon: MapPin, label: 'contact.address', value: 'Tashkent, Uzbekistan' },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="flex items-center gap-4 mb-6 group cursor-pointer"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-cosmic-pink rounded-full flex items-center justify-center group-hover:shadow-glow transition-all">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-foreground/60 text-sm">{t(item.label)}</div>
                  <div className="text-foreground text-xl font-semibold">{item.value}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card className="bg-card/40 backdrop-blur-xl border-primary/30 p-8">
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Input 
                  placeholder={t('contact.form.name')}
                  className="bg-background/50 border-primary/20 text-lg py-6"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Input 
                  type="email"
                  placeholder={t('contact.form.email')}
                  className="bg-background/50 border-primary/20 text-lg py-6"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Textarea 
                  placeholder={t('contact.form.message')}
                  className="bg-background/50 border-primary/20 text-lg min-h-[150px]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
              >
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full text-xl py-6 bg-gradient-to-r from-primary to-cosmic-pink hover:shadow-glow"
                >
                  {t('contact.form.send')}
                </Button>
              </motion.div>
            </form>
          </Card>
        </motion.div>
      </div>

      {/* Pulsing Dots */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 2, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};
