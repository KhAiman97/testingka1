"use client";
import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string; // person photo
  logo?: string; // optional logo
}
interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}
interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}
interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) => {
  const colorName = colors.name ?? "#fff";
  const colorDesignation = colors.designation ?? "rgba(255,255,255,0.7)";
  const colorTestimony = colors.testimony ?? "#e5e5e5";
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#00a6fb";
  const fontSizeName = fontSizes.name ?? "1.25rem";
  const fontSizeDesignation = fontSizes.designation ?? "1rem";
  const fontSizeQuote = fontSizes.quote ?? "1rem";

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;
    if (isActive) {
      return { zIndex: 3, opacity: 1, transform: `translateX(0px) translateY(0px) scale(1)`, transition: "all 0.8s cubic-bezier(.4,2,.3,1)" };
    }
    if (isLeft) {
      return { zIndex: 2, opacity: 0.9, transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.9)`, transition: "all 0.8s cubic-bezier(.4,2,.3,1)" };
    }
    if (isRight) {
      return { zIndex: 2, opacity: 0.9, transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.9)`, transition: "all 0.8s cubic-bezier(.4,2,.3,1)" };
    }
    return { zIndex: 1, opacity: 0, transition: "all 0.8s cubic-bezier(.4,2,.3,1)" };
  }

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-grid">
        {/* Cards */}
        <div className="image-container" ref={imageContainerRef}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.src}
              className="testimonial-wrapper"
              style={getImageStyle(index)}
            >
              <div className="card-client">
                <div className="user-picture">
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  />
                </div>
                <p className="name-client">
                  {testimonial.name}
                  <span>{testimonial.designation}</span>
                </p>
                <div className="social-media">
                  {testimonial.logo && (
                    <img
                      src={testimonial.logo}
                      alt="logo"
                      style={{ width: "60px", margin: "15px auto" }}
                    />
                  )}
                </div>
                {/* Glow effects */}
                <div className="glowing-elements">
                  <div className="glow-1"></div>
                  <div className="glow-2"></div>
                  <div className="glow-3"></div>
                </div>
                <div className="scan-line"></div>
                <div className="corner-elements">
                  <span></span><span></span><span></span><span></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="testimonial-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3
                className="content-name"
                style={{ color: colorName, fontSize: fontSizeName }}
              >
                {activeTestimonial.name}
              </h3>
              <p
                className="designation"
                style={{ color: colorDesignation, fontSize: fontSizeDesignation }}
              >
                {activeTestimonial.designation}
              </p>
              <motion.p
                className="quote"
                style={{ color: colorTestimony, fontSize: fontSizeQuote }}
              >
                {activeTestimonial.quote}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          <div className="arrow-buttons">
            <button
              className="arrow-button prev-button"
              onClick={handlePrev}
              style={{ backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous testimonial"
            >
              <FaArrowLeft size={28} color={colorArrowFg} />
            </button>
            <button
              className="arrow-button next-button"
              onClick={handleNext}
              style={{ backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next testimonial"
            >
              <FaArrowRight size={28} color={colorArrowFg} />
            </button>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .testimonial-container {
          width: 100%;
          max-width: 70rem;
          padding: 2rem;
        }
        .testimonial-grid {
          display: grid;
          gap: 5rem;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 32rem;
        }
        .testimonial-wrapper {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ==== Bigger Cyber Card ==== */
        .card-client {
          position: relative;
          width: 360px;
          height: 420px;
          padding: 30px 25px;
          border: 4px solid #7cdacc;
          border-radius: 20px;
          background: linear-gradient(45deg, #1a1a1a, #262626);
          text-align: center;
          color: #fff;
          font-family: "Poppins", sans-serif;
          transition: all 0.3s ease;
          overflow: hidden;
          box-shadow: 0 0 25px rgba(0,0,0,0.3), inset 0 0 25px rgba(0,0,0,0.2);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .user-picture {
          width: 7rem;
          height: 7rem;
          border: 5px solid #7cdacc;
          border-radius: 999px;
          margin-bottom: 1rem;
          overflow: hidden;
        }
        .name-client {
          margin-top: 10px;
          font-weight: 600;
          font-size: 22px;
        }
        .name-client span {
          display: block;
          font-weight: 200;
          font-size: 16px;
          color: rgba(255,255,255,0.7);
        }
        .social-media:before {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          margin: 20px 0;
          background: #7cdacc;
        }
        .social-media img {
          width: 60px;
          height: auto;
        }

        /* Effects */
        .card-client::before {
          content: "";
          background: radial-gradient(circle at center, rgba(0,255,170,0.1) 0%, rgba(0,162,255,0.05) 50%, transparent 100%);
          filter: blur(20px);
          opacity: 0;
          width: 150%;
          height: 150%;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          transition: opacity 0.3s ease;
          z-index: 0;
        }
        .card-client:hover::before { opacity: 1; }
        .glowing-elements div {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,255,170,0.3) 0%, transparent 70%);
          filter: blur(20px);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }
        .card-client:hover .glowing-elements div { opacity: 1; }
        .glow-1 { top: -20px; left: -20px; }
        .glow-2 { top: 50%; right: -30px; transform: translateY(-50%); }
        .glow-3 { bottom: -20px; left: 30%; }
        .scan-line {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(92,103,255,0.1), transparent);
          transform: translateY(-100%);
          animation: scanMove 2.5s linear infinite;
          pointer-events: none;
          z-index: 1;
          opacity: 0;
        }
        .card-client:hover .scan-line { opacity: 1; }
        @keyframes scanMove {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .corner-elements span {
          position: absolute;
          width: 18px;
          height: 18px;
          border: 2px solid rgba(92,103,255,0.3);
          transition: all 0.3s ease;
        }
        .corner-elements span:nth-child(1){ top:10px; left:10px; border-right:0; border-bottom:0;}
        .corner-elements span:nth-child(2){ top:10px; right:10px; border-left:0; border-bottom:0;}
        .corner-elements span:nth-child(3){ bottom:10px; left:10px; border-right:0; border-top:0;}
        .corner-elements span:nth-child(4){ bottom:10px; right:10px; border-left:0; border-top:0;}
        .card-client:hover .corner-elements span {
          border-color: rgba(92,103,255,0.8);
          box-shadow: 0 0 10px rgba(92,103,255,0.5);
        }
        .card-client { transform-style: preserve-3d; transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .card-client:hover { transform: rotateX(10deg) rotateY(10deg) scale(1.05); box-shadow: 0 10px 30px rgba(0,255,170,0.3), 0 0 40px rgba(92,103,255,0.3); }

        /* Quote Section */
        .testimonial-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .content-name { font-weight: bold; margin-bottom: 0.25rem; }
        .designation { margin-bottom: 2rem; }
        .quote { line-height: 1.75; }
        .arrow-buttons {
          display: flex;
          gap: 1.5rem;
          padding-top: 3rem;
        }
        .arrow-button {
          width: 2.7rem;
          height: 2.7rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s;
          border: none;
        }
        @media (min-width: 768px) {
          .testimonial-grid { grid-template-columns: 1fr 1fr; }
          .arrow-buttons { padding-top: 0; }
        }
      `}</style>
    </div>
  );
};

export default CircularTestimonials;
