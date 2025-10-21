import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroSlide } from "./slides/HeroSlide";
import { ProjectsSlide } from "./slides/ProjectsSlide";
import { AboutSlide } from "./slides/AboutSlide";
import { PartnersSlide } from "./slides/PartnersSlide";

const slides = [HeroSlide, ProjectsSlide, AboutSlide, PartnersSlide];

export const PresentationContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Auto-advance slides every 8 seconds
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4 z-50">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide ? "w-12 bg-primary" : "w-2 bg-primary/30"
            }`}
            animate={{
              scale: index === currentSlide ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              repeat: index === currentSlide ? Infinity : 0,
              repeatDelay: 1,
            }}
          />
        ))}
      </div>
    </div>
  );
};
