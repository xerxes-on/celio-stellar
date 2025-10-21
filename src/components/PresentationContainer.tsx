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

  const slideTransitions = [
    { initial: { opacity: 0, x: -1000, rotateY: -90 }, exit: { opacity: 0, x: 1000, rotateY: 90 } },
    { initial: { opacity: 0, scale: 0, rotate: -180 }, exit: { opacity: 0, scale: 2, rotate: 180 } },
    { initial: { opacity: 0, y: 1000 }, exit: { opacity: 0, y: -1000 } },
    { initial: { opacity: 0, clipPath: "circle(0% at 50% 50%)" }, exit: { opacity: 0, clipPath: "circle(0% at 50% 50%)" } },
  ];

  const currentTransition = slideTransitions[currentSlide % slideTransitions.length];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={currentTransition.initial}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            x: 0, 
            y: 0, 
            rotate: 0, 
            rotateY: 0,
            clipPath: "circle(150% at 50% 50%)"
          }}
          exit={currentTransition.exit}
          transition={{ 
            duration: 1.2, 
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="absolute inset-0"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators with Enhanced Animation */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4 z-50">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className="relative"
          >
            <motion.div
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentSlide ? "w-12 bg-primary" : "w-2 bg-primary/30"
              }`}
              animate={{
                scale: index === currentSlide ? [1, 1.2, 1] : 1,
                boxShadow: index === currentSlide 
                  ? ["0 0 10px hsl(var(--primary))", "0 0 20px hsl(var(--primary-glow))", "0 0 10px hsl(var(--primary))"]
                  : "0 0 0px transparent",
              }}
              transition={{
                duration: 0.5,
                repeat: index === currentSlide ? Infinity : 0,
                repeatDelay: 1,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
