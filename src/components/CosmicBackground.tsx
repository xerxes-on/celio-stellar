import { useEffect, useRef, useState } from "react";
// @ts-ignore - vanta types are limited
import BIRDS from "vanta/dist/vanta.birds.min.js";
// @ts-ignore
import * as THREE from "three";

export const CosmicBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; duration: number }>>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 150 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3,
      duration: 3 + Math.random() * 4,
    }));
    setStars(newStars);
  }, []);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = BIRDS({
        el: vantaRef.current,
        THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0a0118,
        color1: 0x8b5cf6,
        color2: 0xec4899,
        colorMode: "lerp",
        birdSize: 1.2,
        wingSpan: 25.00,
        speedLimit: 4.00,
        separation: 40.00,
        alignment: 40.00,
        cohesion: 20.00,
        quantity: 3.00,
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Vanta.js Birds Background */}
      <div ref={vantaRef} className="absolute inset-0" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-purple opacity-40" />
      
      {/* Animated Cosmic Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cosmic-pink/30 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-cosmic-blue/30 rounded-full blur-[120px] animate-float" style={{ animationDelay: "4s" }} />
      
      {/* Enhanced Stars with Trails */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
          >
            <div
              className="rounded-full bg-foreground animate-glow"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDuration: `${star.duration}s`,
                animationDelay: `${Math.random() * 2}s`,
                boxShadow: `0 0 ${star.size * 4}px ${star.size * 2}px hsl(var(--primary-glow) / 0.5)`,
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Shooting Stars */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-foreground rounded-full animate-shooting-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>
    </div>
  );
};
