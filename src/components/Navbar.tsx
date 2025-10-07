import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", isScrolled ? "bg-white shadow-sm" : "bg-black")} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              {/* Use light logo when scrolled, dark logo when not scrolled */}
              {isScrolled ? (
                <img 
                  src="/lovable-uploads/YottaSync-Logo-Light.png" 
                  alt="YottaSync Logo" 
                  className="h-8 w-auto" 
                />
              ) : (
                <img 
                  src="/lovable-uploads/YottaSync-Logo-Dark.png" 
                  alt="YottaSync Logo" 
                  className="h-8 w-auto" 
                />
              )}
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Customer Cases
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/projects/microscopy" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Medical Microscopy AI</div>
                          <p className="text-sm text-gray-500">Empowering Diagnostic Image Intelligence</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/management-system" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Lab Management System</div>
                          <p className="text-sm text-gray-500">Streamlining Scientific Workflow Operations</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/plantation" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Precision Yield Intelligence</div>
                          <p className="text-sm text-gray-500">Optimizing Agricultural Output Analytics</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/cleaning-robot" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Multi-Level CleanBot</div>
                          <p className="text-sm text-gray-500">Autonomous Multi-Zone Sanitation</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/security-robot" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Intelligent Autonomous Patrol</div>
                          <p className="text-sm text-gray-500">Smart Surveillance and Response System</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                
                {/* Products & Technology Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Products & Technology
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/tech-details" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Technology Overview</div>
                          <p className="text-sm text-gray-500">How our solution helps and what can we offer</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/ys-hrms" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">YS HRMS</div>
                          <p className="text-sm text-gray-500">Human Resource Management System</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/ys-vision" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">YS Vision</div>
                          <p className="text-sm text-gray-500">Computer Vision and AI Analytics</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/ys-trakpoint" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">YS Trakpoint</div>
                          <p className="text-sm text-gray-500">Asset Tracking and Management</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* Learn More - Direct link to Development Process */}
                <NavigationMenuItem>
                  <Link to="/development-process">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Learn More
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button onClick={() => scrollToSection('contact')} className={cn("px-4 py-2 rounded-md transition-colors", isScrolled ? "bg-red-700 text-white hover:bg-gray-300" : "bg-red-700 text-white hover:bg-gray-600")}>
                    Contact Us
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Updated with new structure */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-3 pt-2 pb-3 space-y-1 shadow-sm overflow-y-auto max-h-96", isScrolled ? "bg-white" : "bg-black")}>
          <Link to="/" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Home
          </Link>
          
          <Link to="/about" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            About Us
          </Link>
          
          {/* Customer Cases - simplified */}
          <Link to="/projects/firecat" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Customer Cases
          </Link>
          
          {/* Products & Technology - simplified */}
          <Link to="/tech-details" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Products & Technology
          </Link>
          
          {/* Individual Product Links for Mobile */}
          <Link to="/products/ys-hrms" className={cn("block px-6 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            → YS HRMS
          </Link>
          
          <Link to="/products/ys-vision" className={cn("block px-6 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            → YS Vision
          </Link>
          
          <Link to="/products/ys-trakpoint" className={cn("block px-6 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            → YS Trakpoint
          </Link>
          
          {/* Learn More - direct link */}
          <Link to="/development-process" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Learn More
          </Link>
          
          <button onClick={() => scrollToSection('contact')} className={cn("block w-full text-left px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 bg-gray-200 hover:bg-gray-300" : "text-white bg-gray-700 hover:bg-gray-600")}>
            Contact Us
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;