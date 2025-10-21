import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroSlide } from "./slides/HeroSlide";
import { ServicesSlide } from "./slides/ServicesSlide";
import { ProjectsSlide } from "./slides/ProjectsSlide";
import { TechnologiesSlide } from "./slides/TechnologiesSlide";
import { AboutSlide } from "./slides/AboutSlide";
import { TeamSlide } from "./slides/TeamSlide";
import { PartnersSlide } from "./slides/PartnersSlide";
import { ContactSlide } from "./slides/ContactSlide";
import { LanguageSwitcher } from "./LanguageSwitcher";

const slides = [HeroSlide, ServicesSlide, ProjectsSlide, TechnologiesSlide, AboutSlide, TeamSlide, PartnersSlide, ContactSlide];

export const PresentationContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  const slideTransitions = [
    { initial: { opacity: 0, x: -1000, rotateY: -90 }, exit: { opacity: 0, x: 1000, rotateY: 90 } },
    { initial: { opacity: 0, scale: 0, rotate: -180 }, exit: { opacity: 0, scale: 2, rotate: 180 } },
    { initial: { opacity: 0, y: 1000 }, exit: { opacity: 0, y: -1000 } },
    { initial: { opacity: 0, clipPath: "circle(0% at 50% 50%)" }, exit: { opacity: 0, clipPath: "circle(0% at 50% 50%)" } },
    { initial: { opacity: 0, x: 1000, scale: 0.5 }, exit: { opacity: 0, x: -1000, scale: 0.5 } },
    { initial: { opacity: 0, rotateX: 90 }, exit: { opacity: 0, rotateX: -90 } },
    { initial: { opacity: 0, scale: 2 }, exit: { opacity: 0, scale: 0 } },
    { initial: { opacity: 0, y: -1000, rotateZ: 180 }, exit: { opacity: 0, y: 1000, rotateZ: -180 } },
  ];

  const currentTransition = slideTransitions[currentSlide % slideTransitions.length];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <LanguageSwitcher />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={currentTransition.initial}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0, rotateY: 0, rotateX: 0, rotateZ: 0, clipPath: "circle(150% at 50% 50%)" }}
          exit={currentTransition.exit}
          transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute inset-0"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4 z-50">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${index === currentSlide ? "w-12 bg-primary" : "w-2 bg-primary/30"}`}
            onClick={() => setCurrentSlide(index)}
            animate={{ scale: index === currentSlide ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.5, repeat: index === currentSlide ? Infinity : 0 }}
          />
        ))}
      </div>
    </div>
  );
};
