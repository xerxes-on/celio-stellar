import { useEffect, useRef, useState } from "react";
// @ts-ignore - vanta types are limited
import WAVES from "vanta/dist/vanta.waves.min.js";
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
      const effect = WAVES({
        el: vantaRef.current,
        THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        color: 0x0a0118,
        shininess: 30.00,
        waveHeight: 15.00,
        waveSpeed: 0.75,
        zoom: 0.65,
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
