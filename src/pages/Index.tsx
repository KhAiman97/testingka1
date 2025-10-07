
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyYottaSync from '@/components/WhyYottaSync';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="YottaSync" 
        description="WRLDS Technologies: Pioneering smart engineering solutions with textile sensors for sports, safety, and performance monitoring."
        imageUrl="/lovable-uploads/YottaSync-Logo-Dark.png"
        keywords={['Artificial Intelligence', 'AI', 'LLM', 'chatbot', 'machine vision', 'performance analytics', 'HRMS']}
      />
      <Hero />
      <Features />
      <WhyYottaSync />
      <Projects />
    </PageLayout>
  );
};

export default Index;
