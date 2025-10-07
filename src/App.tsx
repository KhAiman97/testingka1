
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CleaningRobot from "./pages/CleaningRobot";
import AiMicroscopy from "./pages/AiMicsroscopy";
import LabManagementSystem from "./pages/LabManagementSystem";
import SecurityRobot from "./pages/PetronasSecurity";
import Plantation from "./pages/IOIPlantation";
import TechDetails from "./pages/TechDetails";
import DevelopmentProcess from "./pages/DevelopmentProcess";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import YSHRMS from "./pages/products/YSHRMS";
import YSVision from "./pages/products/YSVision";
import YSTrakpoint from "./pages/products/YSTrakpoint";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects/cleaning-robot" element={<CleaningRobot />} />
            <Route path="/projects/microscopy" element={<AiMicroscopy />} />
            <Route path="/projects/management-system" element={<LabManagementSystem />} />
            <Route path="/projects/security-robot" element={<SecurityRobot />} />
            <Route path="/projects/plantation" element={<Plantation />} />
            <Route path="/tech-details" element={<TechDetails />} />
            <Route path="/development-process" element={<DevelopmentProcess />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/products/ys-hrms" element={<YSHRMS />} />
            <Route path="/products/ys-vision" element={<YSVision />} />
            <Route path="/products/ys-trakpoint" element={<YSTrakpoint />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
