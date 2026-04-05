import React, { useEffect, useRef } from "react";
import { isMobileLikeDevice } from "./utils/device";

const Starfield = ({
  speed = 0.2,
  backgroundColor = "black",
  starColor = [255, 255, 255],
  starCount = 200, // Kept low for clean look
  globalScale = 0.5, 
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let stars = [];

    const getOptimizedStarCount = () => {
      if (typeof window === "undefined") return starCount;

      const isMobile = isMobileLikeDevice();
      const isLowEnd =
        typeof navigator !== "undefined" &&
        navigator.hardwareConcurrency &&
        navigator.hardwareConcurrency <= 2;

      if (isLowEnd) return Math.min(Math.floor(starCount * 0.3), 50);
      if (isMobile) return Math.min(Math.floor(starCount * 0.6), 100);
      return starCount;
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr * globalScale, 0, 0, dpr * globalScale, 0, 0);
      initStars(width / globalScale, height / globalScale);
    };

    const initStars = (virtualWidth, virtualHeight) => {
      stars = [];
      const optimizedStarCount = getOptimizedStarCount();

      for (let i = 0; i < optimizedStarCount; i++) {
        const layer = Math.floor(Math.random() * 3); 
        let z, size;

        // Small, distinct cores
        if (layer === 0) { z = 3.0; size = 1.5; }
        else if (layer === 1) { z = 1.5; size = 2.5; }
        else { z = 0.5; size = 3.5; }

        stars.push({
          x: Math.random() * virtualWidth,
          y: Math.random() * virtualHeight,
          z: z,
          baseSize: size,
          // Randomize the pulse speed for "living" light
          twinkleSpeed: Math.random() * 0.005 + 0.002,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const render = (time) => {
      if (!canvas) return;
      
      const virtualWidth = window.innerWidth / globalScale;
      const virtualHeight = window.innerHeight / globalScale;

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, virtualWidth, virtualHeight);

      stars.forEach((star) => {
        star.x -= speed / star.z;

        if (star.x < 0) {
          star.x = virtualWidth;
          star.y = Math.random() * virtualHeight;
        }

        // Illumination Logic
        const twinkle = Math.sin((time * 0.001) + star.twinklePhase); 
        // Pulse goes from 0.5 (dim) to 1.2 (over-bright)
        const pulse = 0.85 + (twinkle * 0.35); 
        
        const radius = star.baseSize / 2;
        const opacity = Math.min(1, (1.0 / star.z) * pulse);

        // --- ENHANCED ILLUMINATION ---
        // 1. High Blur Radius: Creates the large halo
        ctx.shadowBlur = radius * 6; 
        // 2. Solid Shadow Color: Makes the glow intense
        ctx.shadowColor = `rgba(${starColor[0]}, ${starColor[1]}, ${starColor[2]}, 1.0)`;
        
        ctx.fillStyle = `rgba(${starColor[0]}, ${starColor[1]}, ${starColor[2]}, ${opacity})`;

        ctx.beginPath();
        ctx.arc(star.x, star.y, radius, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame((t) => render(t));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    animationFrameId = requestAnimationFrame((t) => render(t));

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, backgroundColor, starColor, starCount, globalScale]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        transition: "background-color 0.5s ease"
      }}
    />
  );
};

export default Starfield;
