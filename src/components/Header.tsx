import { motion } from "framer-motion";
import { Globe, Mail, Send, Linkedin } from "lucide-react";

export const Header = () => {
  const links = [
    {
      icon: Mail,
      href: "mailto:ceo@celion.io",
      label: "Email",
    },
    {
      icon: Send,
      href: "https://t.me/narzikk",
      label: "Telegram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/celion-io-0a4395379",
      label: "LinkedIn",
    },
    {
      icon: Globe,
      href: "https://celion.io",
      label: "Website",
    },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        {/* Logo */}
        <motion.a
          href="https://celion.io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src="/logo-transparent.png"
            alt="Celion Logo"
            className="w-12 h-12 rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-primary/50"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary via-cosmic-pink to-cosmic-blue bg-clip-text text-transparent">
            celion.io
          </span>
        </motion.a>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="relative p-3 rounded-xl bg-card/40 backdrop-blur-xl border border-primary/20 transition-all duration-300 group-hover:border-primary/60 group-hover:bg-primary/10">
                <link.icon className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
              </div>

              {/* Tooltip */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-card border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm">
                {link.label}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.header>
  );
};
