import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";
import { GlowEffect } from '@/components/ui/glow-effect';
import { CircularTestimonials } from '@/components/ui/circular-testimonials';

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 20 + delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return <span>{displayText}</span>;
};

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Team members data formatted for CircularTestimonials
  const teamMembers = [
    {
      quote: "Leading YottaSync with a vision to transform industries through innovative AI solutions. Passionate about empowering organizations with cutting-edge technology.",
      name: "Shasi Rao",
      designation: "Chief Executive Officer",
      src: "/lovable-uploads/profilephoto.jpg"
    },
    {
      quote: "Driving technological innovation and architecting scalable AI systems that solve complex business challenges. Expert in machine learning and system design.",
      name: "Kisheen Rao",
      designation: "Chief Technology Officer",
      src: "/lovable-uploads/profilephoto.jpg"
    },
    {
      quote: "Building strategic partnerships and expanding market presence. Focused on delivering value and fostering long-term client relationships.",
      name: "Muhammad Khairul Aiman",
      designation: "Business Development Manager",
      src: "/lovable-uploads/profilephoto.jpg"
    },
    {
      quote: "Crafting elegant solutions and building robust applications. Passionate about clean code, user experience, and continuous innovation.",
      name: "Muhammad Fadhlul Wafi",
      designation: "Software Engineer",
      src: "/lovable-uploads/profilephoto.jpg"
    }
  ];
  
  return (
    <>
      <style>{`
        .terminal-card {
          padding: 0.75rem;
          overflow: hidden;
          border: 0.25px solid #c5c5c5;
          border-radius: 20px;
          background-color: #1a1a2e;
          position: relative;
          transition: transform 0.3s ease;
        }

        .terminal-card:hover {
          transform: translateY(-4px);
        }

        .terminal-card:hover .glow-effect-wrapper {
          opacity: 1;
        }

        .glow-effect-wrapper {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 20px;
          overflow: hidden;
        }
        
        .terminal-wrap {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
          z-index: 10;
          border: 0.5px solid #525252;
          border-radius: 10px;
          overflow: hidden;
        }
        
        .terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          min-height: 40px;
          padding: 0 12px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          background-color: #202425;
        }
        
        .terminal-title {
          display: flex;
          align-items: center;
          gap: 8px;
          height: 2.5rem;
          user-select: none;
          font-weight: 600;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #8e8e8e;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }
        
        .terminal-title > svg {
          height: 18px;
          width: 18px;
          margin-top: 2px;
          color: #006adc;
        }
        
        .terminal-body {
          display: flex;
          flex-direction: column;
          position: relative;
          border-bottom-right-radius: 15px;
          border-bottom-left-radius: 15px;
          overflow-x: auto;
          padding: 1.5rem;
          line-height: 1.6;
          color: white;
          background-color: black;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 14px;
        }

        .terminal-body h2,
        .terminal-body h3 {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }

        .code-line {
          margin-bottom: 0.5rem;
          color: #00ff00;
        }

        .code-comment {
          color: #6a9955;
        }

        .code-keyword {
          color: #569cd6;
        }

        .code-string {
          color: #ce9178;
        }

        .code-function {
          color: #dcdcaa;
        }
      `}</style>
      
      <PageLayout>
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              
              <motion.h1 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
                className="text-4xl font-bold mb-6"
              >
                About YottaSync
              </motion.h1>
              
              <div className="prose prose-lg max-w-none">
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5, delay: 0.2 }} 
                  className="text-xl text-gray-600 mb-12"
                >
                  We're a team of innovators dedicated to revolutionizing AI powered solution technology for industries worldwide.
                </motion.p>
                
                {/* First Row: Mission and Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.6 }}
                    className="terminal-card"
                  >
                    <div className="glow-effect-wrapper">
                      <GlowEffect
                        colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
                        mode='rotate'
                        blur='medium'
                        duration={8}
                      />
                    </div>
                    <div className="terminal-wrap">
                      <div className="terminal-header">
                        <div className="terminal-title">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="4 17 10 11 4 5"></polyline>
                            <line x1="12" y1="19" x2="20" y2="19"></line>
                          </svg>
                          <span>mission.py</span>
                        </div>
                      </div>
                      <div className="terminal-body">
                        <div className="code-line">
                          <span className="code-comment"># MISSION STATEMENT</span>
                        </div>
                        <div className="code-line">
                          <span className="code-keyword">def</span> <span className="code-function">our_mission</span>():
                        </div>
                        <div className="code-line" style={{ paddingLeft: '1rem' }}>
                          <span className="code-keyword">return</span> <span className="code-string">"</span>
                        </div>
                        <div style={{ paddingLeft: '2rem', color: '#ce9178', marginTop: '0.5rem' }}>
                          <TypewriterText 
                            text="To equip organizations with intelligent, future-proof solutions that transform operational challenges into strategic advantages. We are dedicated to:"
                            delay={0}
                          />
                        </div>
                        <div style={{ paddingLeft: '2rem', marginTop: '0.75rem' }}>
                          <div style={{ color: '#4ec9b0', marginBottom: '0.5rem' }}>
                            <TypewriterText text="• Achieving Unmatched Efficiency:" delay={100} />
                          </div>
                          <div style={{ color: '#d4d4d4', paddingLeft: '1rem', marginBottom: '0.5rem' }}>
                            <TypewriterText text="Automating complex processes to drive significant gains in productivity and resource allocation." delay={150} />
                          </div>
                          <div style={{ color: '#4ec9b0', marginBottom: '0.5rem' }}>
                            <TypewriterText text="• Forging Exceptional Experiences:" delay={200} />
                          </div>
                          <div style={{ color: '#d4d4d4', paddingLeft: '1rem', marginBottom: '0.5rem' }}>
                            <TypewriterText text="Elevating every customer interaction through seamless, intelligent, and responsive systems." delay={250} />
                          </div>
                          <div style={{ color: '#4ec9b0', marginBottom: '0.5rem' }}>
                            <TypewriterText text="• Mastering Market Evolution:" delay={300} />
                          </div>
                          <div style={{ color: '#d4d4d4', paddingLeft: '1rem' }}>
                            <TypewriterText text="Providing the agility to not just adapt to, but lead and capitalize on rapid technological and market change." delay={350} />
                          </div>
                        </div>
                        <div className="code-line" style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
                          <span className="code-string">"</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="terminal-card"
                  >
                    <div className="glow-effect-wrapper">
                      <GlowEffect
                        colors={['#00FF87', '#60EFFF', '#B15EFF', '#FF2E97']}
                        mode='rotate'
                        blur='medium'
                        duration={8}
                      />
                    </div>
                    <div className="terminal-wrap">
                      <div className="terminal-header">
                        <div className="terminal-title">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="4 17 10 11 4 5"></polyline>
                            <line x1="12" y1="19" x2="20" y2="19"></line>
                          </svg>
                          <span>values.js</span>
                        </div>
                      </div>
                      <div className="terminal-body">
                        <div className="code-line">
                          <span className="code-comment">// The "A.I" Principles</span>
                        </div>
                        <div className="code-line">
                          <span className="code-keyword">const</span> <span className="code-function">values</span> = {'{'}
                        </div>
                        <div style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
                          <div style={{ marginBottom: '0.75rem' }}>
                            <div style={{ color: '#9cdcfe' }}>
                              <TypewriterText text="Automation:" delay={0} />
                            </div>
                            <div style={{ color: '#d4d4d4', paddingLeft: '1rem', fontSize: '13px' }}>
                              <TypewriterText text="We eliminate complexity and repetition, creating systems that work intelligently and autonomously." delay={50} />
                            </div>
                          </div>
                          <div style={{ marginBottom: '0.75rem' }}>
                            <div style={{ color: '#9cdcfe' }}>
                              <TypewriterText text="Integration:" delay={100} />
                            </div>
                            <div style={{ color: '#d4d4d4', paddingLeft: '1rem', fontSize: '13px' }}>
                              <TypewriterText text="We build solutions that connect effortlessly, enhancing your existing ecosystem without disruption." delay={150} />
                            </div>
                          </div>
                          <div style={{ marginBottom: '0.75rem' }}>
                            <div style={{ color: '#9cdcfe' }}>
                              <TypewriterText text="Impact:" delay={200} />
                            </div>
                            <div style={{ color: '#d4d4d4', paddingLeft: '1rem', fontSize: '13px' }}>
                              <TypewriterText text="We focus on delivering clear, quantifiable results that drive growth, safety, and efficiency." delay={250} />
                            </div>
                          </div>
                          <div style={{ marginBottom: '0.5rem' }}>
                            <div style={{ color: '#9cdcfe' }}>
                              <TypewriterText text="Ingenuity:" delay={300} />
                            </div>
                            <div style={{ color: '#d4d4d4', paddingLeft: '1rem', fontSize: '13px' }}>
                              <TypewriterText text="We relentlessly pursue innovative ideas, pushing the boundaries of what's possible with technology." delay={350} />
                            </div>
                          </div>
                        </div>
                        <div className="code-line">
                          {'}'}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Second Row: Vision and Story */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="terminal-card"
                  >
                    <div className="glow-effect-wrapper">
                      <GlowEffect
                        colors={['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF']}
                        mode='rotate'
                        blur='medium'
                        duration={8}
                      />
                    </div>
                    <div className="terminal-wrap">
                      <div className="terminal-header">
                        <div className="terminal-title">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="4 17 10 11 4 5"></polyline>
                            <line x1="12" y1="19" x2="20" y2="19"></line>
                          </svg>
                          <span>vision.cpp</span>
                        </div>
                      </div>
                      <div className="terminal-body">
                        <div className="code-line">
                          <span className="code-comment">/* VISION STATEMENT */</span>
                        </div>
                        <div className="code-line">
                          <span className="code-keyword">class</span> <span className="code-function">Vision</span> {'{'}
                        </div>
                        <div style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
                          <div style={{ color: '#4ec9b0', fontWeight: 'bold', marginBottom: '0.75rem' }}>
                            <TypewriterText text="Empowering Tomorrow, Today." delay={0} />
                          </div>
                          <div style={{ color: '#d4d4d4', marginBottom: '0.75rem' }}>
                            <TypewriterText text="We lead the charge in equipping businesses with visionary solutions that not only meet the future but define it. We envision a world where technology is a seamless and intuitive force that:" delay={50} />
                          </div>
                          <div style={{ marginTop: '0.75rem' }}>
                            <div style={{ color: '#569cd6', marginBottom: '0.5rem' }}>
                              <TypewriterText text="→ Transforms Operations:" delay={100} />
                            </div>
                            <div style={{ color: '#d4d4d4', paddingLeft: '1rem', marginBottom: '0.75rem', fontSize: '13px' }}>
                              <TypewriterText text="Creating unparalleled levels of intelligence and efficiency." delay={150} />
                            </div>
                            <div style={{ color: '#569cd6', marginBottom: '0.5rem' }}>
                              <TypewriterText text="→ Elevates Human Experience:" delay={200} />
                            </div>
                            <div style={{ color: '#d4d4d4', paddingLeft: '1rem', marginBottom: '0.75rem', fontSize: '13px' }}>
                              <TypewriterText text="Fostering deeper, more meaningful customer and employee connections." delay={250} />
                            </div>
                            <div style={{ color: '#569cd6', marginBottom: '0.5rem' }}>
                              <TypewriterText text="→ Unlocks Potential:" delay={300} />
                            </div>
                            <div style={{ color: '#d4d4d4', paddingLeft: '1rem', fontSize: '13px' }}>
                              <TypewriterText text="Propelling organizations toward a horizon of limitless growth and innovation." delay={350} />
                            </div>
                          </div>
                        </div>
                        <div className="code-line" style={{ marginTop: '0.5rem' }}>
                          {'};'}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="terminal-card"
                  >
                    <div className="glow-effect-wrapper">
                      <GlowEffect
                        colors={['#F093FB', '#F5576C', '#4FACFE', '#00F2FE']}
                        mode='rotate'
                        blur='medium'
                        duration={8}
                      />
                    </div>
                    <div className="terminal-wrap">
                      <div className="terminal-header">
                        <div className="terminal-title">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="4 17 10 11 4 5"></polyline>
                            <line x1="12" y1="19" x2="20" y2="19"></line>
                          </svg>
                          <span>story.md</span>
                        </div>
                      </div>
                      <div className="terminal-body">
                        <div className="code-line">
                          <span className="code-comment"># Our Story</span>
                        </div>
                        <div style={{ marginTop: '1rem', color: '#d4d4d4' }}>
                          <div style={{ marginBottom: '0.75rem' }}>
                            <TypewriterText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." delay={0} />
                          </div>
                          <div style={{ marginBottom: '0.75rem' }}>
                            <TypewriterText text="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages." delay={100} />
                          </div>
                          <div style={{ color: '#6a9955' }}>
                            <TypewriterText text="> Building the future, one solution at a time." delay={200} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Team Section with Circular Carousel */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-bold mb-6">Our Team</h2>
                  <p className="text-gray-600 mb-8">
                    Our diverse team combines expertise in mechanical engineering, electronics, software development, 
                    artificial intelligence, and industry-specific knowledge to deliver holistic solutions.
                  </p>
                  
                  <div className="flex items-center justify-center w-full">
                    <CircularTestimonials
                      testimonials={teamMembers}
                      autoplay={true}
                      colors={{
                        name: "#0a0a0a",
                        designation: "#454545",
                        testimony: "#171717",
                        arrowBackground: "#141414",
                        arrowForeground: "#f1f1f7",
                        arrowHoverBackground: "#00A6FB",
                      }}
                      fontSizes={{
                        name: "28px",
                        designation: "20px",
                        quote: "18px",
                      }}
                    />
                  </div>
                </motion.div>
              </div>
              
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default About;