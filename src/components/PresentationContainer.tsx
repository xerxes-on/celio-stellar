import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroSlide } from "./slides/HeroSlide";
import { StatsSlide } from "./slides/StatsSlide";
import { ServicesSlide } from "./slides/ServicesSlide";
import { ProjectsCarouselSlide } from "./slides/ProjectsCarouselSlide";
import { OlchaSlide } from "./slides/projects/OlchaSlide";
import { TopBrainsSlide } from "./slides/projects/TopBrainsSlide";
import { IhmaSlide } from "./slides/projects/IhmaSlide";
import { ElmakonSlide } from "./slides/projects/ElmakonSlide";
import { EmuSlide } from "./slides/projects/EmuSlide";
import { Express24Slide } from "./slides/projects/Express24Slide";
import { TezTaxiSlide } from "./slides/projects/TezTaxiSlide";
import { MediaParkSlide } from "./slides/projects/MediaParkSlide";
import { MyTaxiSlide } from "./slides/projects/MyTaxiSlide";
import { WorklySlide } from "./slides/projects/WorklySlide";
import { UFarmerSlide } from "./slides/projects/UFarmerSlide";
import { MaveraSlide } from "./slides/projects/MaveraSlide";
import { YordamdaSlide } from "./slides/projects/YordamdaSlide";
import { PixleToysSlide } from "./slides/projects/PixleToysSlide";
import { AstraBuildingSlide } from "./slides/projects/AstraBuildingSlide";
import { VafraGroupSlide } from "./slides/projects/VafraGroupSlide";
import { ContactSlide } from "./slides/ContactSlide";

const slides = [HeroSlide, StatsSlide, ServicesSlide, ProjectsCarouselSlide, OlchaSlide, TopBrainsSlide, IhmaSlide, ElmakonSlide, EmuSlide, Express24Slide, TezTaxiSlide, MediaParkSlide, MyTaxiSlide, WorklySlide, UFarmerSlide, MaveraSlide, YordamdaSlide, PixleToysSlide, AstraBuildingSlide, VafraGroupSlide, ContactSlide];

export const PresentationContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [picture, setPicture] = useState(false);

  const togglePicture = () => {
    setPicture((prev) => !prev);
  };

  useEffect(() => {
    // Don't auto-advance if picture mode is active
    if (picture) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [picture]);

  // Show HeroSlide when picture is true, otherwise show current slide
  const CurrentSlideComponent = picture ? HeroSlide : slides[currentSlide];

  const slideTransitions = [
    { initial: { opacity: 0, x: -100 }, exit: { opacity: 0, x: 100 } },
    { initial: { opacity: 0, scale: 0.8 }, exit: { opacity: 0, scale: 1.2 } },
    { initial: { opacity: 0, y: 100 }, exit: { opacity: 0, y: -100 } },
    { initial: { opacity: 0, x: 100 }, exit: { opacity: 0, x: -100 } },
    { initial: { opacity: 0, scale: 1.2 }, exit: { opacity: 0, scale: 0.8 } },
    { initial: { opacity: 0, y: -100 }, exit: { opacity: 0, y: 100 } },
  ];

  const currentTransition = slideTransitions[currentSlide % slideTransitions.length];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={currentTransition.initial}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          exit={currentTransition.exit}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <CurrentSlideComponent togglePicture={togglePicture} />
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
