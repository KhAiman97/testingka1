import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import { Eye, Zap, BarChart3, Factory, AlertTriangle, TrendingUp, Shield, Cpu, Battery, Wifi, Navigation } from 'lucide-react';

const AutonomousMultiLevelCleaning = () => {
  return (
    <ProjectPageLayout
      title="Multi-Level CleanBot"
      subtitle="Sensor-Driven Robotic Fleet Management for Corporate Facilities"
      imageUrl="/lovable-uploads/black.jpg"
      brandName="Multinational Facility Management Corporation"
      darkMode={true}
    >
      <SEO 
        title="Autonomous Multi-Level Cleaning - YottaSync" 
        description="Advanced robotic cleaning system with autonomous elevator navigation using sensor networks for facility-wide automation across multi-story campuses."
        type="article"
      />
      
      <div className="bg-green-50 p-4 rounded-lg mb-6 flex items-center">
        <TrendingUp className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
        <p className="text-green-700 font-medium text-sm">Pilot Deployed — Delivering Measurable Results</p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Revolutionizing Facility Management with Sensor-Driven Robotics</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Project Background</h3>
        <p>
          A multinational facility management corporation partnered with YottaSync to transform their cleaning operations 
          across large, multi-story corporate campuses. Their goal was to implement a reliable, cost-effective autonomous 
          system that could operate seamlessly across complex multi-level environments.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">The Operational Challenge</h3>
      <p className="mb-4">
        Traditional cleaning automation faced critical limitations in multi-level facility management:
      </p>
      <div className="space-y-2">
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Cleaning equipment confined to single floors, requiring manual relocation between levels</span>
        </p>
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Inability to achieve true facility-wide automation across corporate campuses</span>
        </p>
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>High labor costs and inconsistent cleaning quality across different zones</span>
        </p>
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Limited coordination between cleaning teams across multiple buildings</span>
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Sensor-Driven Robotic Solution</h3>
      <p className="mb-6">
        YottaSync developed a sophisticated cleaning robot fleet using advanced sensor networks and elevator integration, 
        creating a comprehensive autonomous cleaning system for multi-story facility management.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <Cpu className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Intelligent Cleaning System</h4>
            <p className="text-gray-600">Simultaneous sweeping and mopping with sensor-based adjustment for different surface types and cleaning needs.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-purple-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <Navigation className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Elevator Integration System</h4>
            <p className="text-gray-600">Network-connected robots communicate with building elevator systems for autonomous inter-floor navigation.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <Wifi className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Central Fleet Management</h4>
            <p className="text-gray-600">Network-based dispatch system allocates cleaning tasks based on location, priority, and operational status.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-orange-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <Battery className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Automated Maintenance</h4>
            <p className="text-gray-600">Self-charging and automatic refill systems ensure continuous operational readiness.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Advanced System Features</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Multi-sensor navigation system for obstacle detection and safe movement</li>
        <li>Network-based communication with building infrastructure systems</li>
        <li>Real-time operational monitoring and management dashboard</li>
        <li>Secure wireless communication protocols</li>
        <li>24/7 operational capability with automated maintenance cycles</li>
      </ul>
    
      <h3 className="text-2xl font-semibold mb-4 mt-8">Pilot Deployment Results</h3>
      <p className="mb-6">
        In a comprehensive pilot deployment across a 15-story office building, the sensor-driven robotic system 
        demonstrated significant operational improvements and cleaning consistency.
      </p>
      
      <div className="bg-yellow-50 p-6 rounded-lg mb-6">
        <div className="flex items-center mb-3">
          <Zap className="h-6 w-6 text-yellow-600 mr-2" />
          <h4 className="text-xl font-semibold text-gray-800">40% Reduction in Manual Cleaning Hours</h4>
        </div>
        <p className="text-gray-700">
          The autonomous system achieved substantial labor cost savings while maintaining consistent cleaning standards 
          across all floors, verified through regular quality audits.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <div className="flex items-center">
          <Shield className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
          <p className="text-blue-700 font-medium">98% Success Rate in autonomous elevator navigation and inter-floor operations</p>
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
          <TrendingUp className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Development Roadmap & Future Scaling</h4>
          <p className="text-gray-600 mb-3">
            Building on the successful pilot, YottaSync is expanding the system with enhanced sensor capabilities, 
            predictive maintenance features, and developing a comprehensive "Robot-as-a-Service" (RaaS) model to 
            make the technology accessible to a broader range of facility management clients.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Next Phase:</strong> Enhanced sensor networks for predictive cleaning and expanded RaaS deployment model.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default AutonomousMultiLevelCleaning;