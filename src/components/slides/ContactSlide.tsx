import { motion } from "framer-motion";
import { Globe, Phone, Mail, Send, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ContactSlideProps {
  togglePicture?: () => void;
}

export const ContactSlide = ({ togglePicture }: ContactSlideProps) => {
  const { t } = useTranslation();

  const contacts = [
    {
      labelKey: "contact.website",
      value: "celion.io",
      link: "https://celion.io",
      gradient: "from-blue-500 to-cyan-500",
      shape: "hexagon",
      icon: Globe,
    },
    {
      labelKey: "contact.phone",
      value: "+998 90 993 42 28",
      link: "tel:+998909934228",
      gradient: "from-green-500 to-emerald-500",
      shape: "circle",
      icon: Phone,
    },
    {
      labelKey: "contact.email",
      value: "ceo@celion.io",
      link: "mailto:ceo@celion.io",
      gradient: "from-purple-500 to-pink-500",
      shape: "square",
      icon: Mail,
    },
    {
      labelKey: "contact.telegram",
      value: "@narzikk",
      link: "https://t.me/narzikk",
      gradient: "from-sky-500 to-blue-500",
      shape: "triangle",
      icon: Send,
    },
    {
      labelKey: "contact.linkedin",
      value: "linkedin.com/in/celion-io-0a4395379",
      link: "https://linkedin.com/in/celion-io-0a4395379",
      gradient: "from-indigo-500 to-blue-600",
      shape: "square",
      icon: Linkedin,
    },
  ];

  return (
    <div className="h-screen flex flex-col items-center justify-center px-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--cosmic-pink)) 100%)`,
              opacity: 0.15,
            }}
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.h2
        className="text-7xl font-bold mb-20 text-center bg-gradient-to-r from-primary via-cosmic-pink to-cosmic-blue bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("contact.title")}
      </motion.h2>

      <div className="grid grid-cols-3 gap-6 max-w-6xl w-full relative z-10">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5 + index * 0.15,
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="relative group cursor-pointer"
          >
            <div className="bg-card/40 backdrop-blur-xl border border-primary/20 rounded-3xl p-10 h-full overflow-hidden transition-all duration-500 group-hover:border-primary/60 flex flex-col items-center justify-center min-h-[280px]">
              {/* Gradient background overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Contact Info */}
              <div className="text-center relative z-10 flex flex-col items-center">
                {/* Icon */}
                <motion.div
                  className={`mb-6 p-5 rounded-2xl bg-gradient-to-br ${contact.gradient} shadow-lg`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.15,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    boxShadow: `0 8px 32px rgba(var(--primary-rgb), 0.3)`
                  }}
                >
                  <contact.icon
                    className="w-14 h-14 text-white"
                    strokeWidth={1.5}
                  />
                </motion.div>

                <motion.p
                  className="text-3xl font-light text-foreground/50 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {t(contact.labelKey)}
                </motion.p>
                <motion.p
                  className="text-2xl font-semibold bg-gradient-to-r from-primary to-cosmic-pink bg-clip-text text-transparent"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {contact.value}
                </motion.p>
              </div>

              {/* Animated border accent */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.4,
                }}
              />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Celion Branding */}
      <motion.div
        onClick={togglePicture}
        className="absolute bottom-8 right-8 text-5xl font-bold bg-gradient-to-r from-primary via-cosmic-pink to-cosmic-blue bg-clip-text text-transparent cursor-pointer hover:scale-110 transition-transform z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.7, 1, 0.7],
          scale: [0.98, 1, 0.98]
        }}
        transition={{
          opacity: { duration: 3, repeat: Infinity },
          scale: { duration: 3, repeat: Infinity },
          delay: 1.5
        }}
        style={{
          textShadow: "0 0 40px hsl(var(--primary-glow) / 0.3)",
        }}
      >
        celion.io
      </motion.div>
    </div>
  );
};
