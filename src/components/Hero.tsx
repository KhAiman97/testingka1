import { ArrowRight, Code, Cpu, Layers, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/ui/spline-scene";
import { Spotlight } from "@/components/ui/spotlight";
import { EvervaultCard } from "@/components/ui/evervault-card";

const Hero = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <motion.div className="relative w-full" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-black relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full">
        <div className="absolute inset-0 bg-black w-full">
          {/* Spline 3D scene */}
          <div className="w-full h-full relative">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full opacity-90"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white"></div>
        </div>
        
   <div className="banner-overlay bg-transparent pt-20 sm:pt-24 md:pt-32 w-full">
  <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
    <motion.div className="w-full max-w-4xl text-center flex flex-col items-center justify-center" variants={itemVariants}>
      <motion.h1 className="banner-title text-white text-center w-full" variants={itemVariants}>
        Intelligent Technologies for a Smarter Life.
      </motion.h1>
      <motion.p className="banner-subtitle text-gray-300 mt-4 sm:mt-6 text-center w-full max-w-2xl mx-auto" variants={itemVariants}>
        The Solution Provider Your Company Need.
      </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center" variants={itemVariants}>
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={e => {
                    e.preventDefault();
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Explore Projects
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-red-700 text-white rounded-md hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={scrollToContact}
                >
                  Contact Us
                  <MessageSquare className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
          {/* Smart Textiles Card with Evervault Effect */}
          <motion.div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-full h-40 mb-4 rounded-2xl overflow-hidden">
              <EvervaultCard 
                text="LLM" 
                className="w-full h-full"
              />
            </div>
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mr-3">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">Large Language Model</h3>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              The power of language, amplified.
            </p>
          </motion.div>
          
          {/* Adaptive AI Card with Evervault Effect */}
          <motion.div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-full h-40 mb-4 rounded-2xl overflow-hidden">
              <EvervaultCard 
                text="AGENTIC" 
                className="w-full h-full"
              />
            </div>
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mr-3">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">Agentic AI</h3>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              Your digital workforce, automated.
            </p>
          </motion.div>
          
          {/* Cross-Industry Card with Evervault Effect */}
          <motion.div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-full h-40 mb-4 rounded-2xl overflow-hidden">
              <EvervaultCard 
                text="VISION" 
                className="w-full h-full"
              />
            </div>
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mr-3">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">Machine Vision</h3>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              Giving sight to your systems.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;