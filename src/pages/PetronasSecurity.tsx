import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import { Eye, Zap, BarChart3, Factory, AlertTriangle, TrendingUp, Shield, Cpu, Battery, Wifi, Navigation } from 'lucide-react';

const IntelligentAutonomousPatrol = () => {
  return (
    <ProjectPageLayout
      title="Intelligent Autonomous Patrol"
      subtitle="AI-Driven Security Robotics for Enhanced Airport Security Operations"
      imageUrl="/lovable-uploads/black.jpg"
      brandName="International Airport Authority"
      darkMode={true}
    >
      <SEO 
        title="Intelligent Autonomous Patrol - YottaSync" 
        description="AI-driven security robot fleet with machine vision analytics for real-time threat detection and automated alerting in airport terminal environments."
        type="article"
      />
      
      <div className="bg-green-50 p-4 rounded-lg mb-6 flex items-center">
        <TrendingUp className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
        <p className="text-green-700 font-medium text-sm">Deployed — Delivering Measurable Security Enhancements</p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Transforming Airport Security with AI-Driven Autonomous Patrols</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Project Background</h3>
        <p>
          A major international airport authority engaged YottaSync to augment its physical security operations. 
          Facing the challenge of monitoring vast, dynamic terminal areas 24/7, they sought a scalable solution 
          to enhance situational awareness and accelerate response times to potential security incidents.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">The Security Challenge</h3>
      <p className="mb-4">
        Traditional security patrols faced significant limitations in comprehensive airport monitoring:
      </p>
      <div className="space-y-2">
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Labor-intensive patrols with inconsistent coverage across vast terminal areas</span>
        </p>
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Difficulty detecting subtle threats like unattended luggage and suspicious loitering</span>
        </p>
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Delayed response times from detection to security team notification</span>
        </p>
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Challenges maintaining 24/7 monitoring consistency in high-traffic environments</span>
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">AI-Driven Security Solution</h3>
      <p className="mb-6">
        YottaSync designed and deployed a fleet of AI-driven security robots capable of continuous, intelligent 
        patrol and real-time threat detection, creating a comprehensive autonomous security system for airport operations.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <Eye className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Machine Vision Analytics</h4>
            <p className="text-gray-600">Onboard cameras and processing units running advanced algorithms to detect unattended baggage, suspicious activity, and perimeter breaches.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-red-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Automated Alert System</h4>
            <p className="text-gray-600">Instant, prioritized notification triggers sent to security operations center with photo/video evidence and precise location data.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-purple-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <Navigation className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Autonomous Patrol Routes</h4>
            <p className="text-gray-600">Pre-programmed and dynamic patrol paths ensuring comprehensive coverage, with remote manual control capability.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <Wifi className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Real-Time Situational Awareness</h4>
            <p className="text-gray-600">Live video streaming and two-way intercom system for remote assessment and direct on-site communication.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Advanced Security Features</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>All-weather, ruggedized design for continuous indoor/outdoor operation</li>
        <li>Long-lasting battery with autonomous docking and charging capabilities</li>
        <li>Non-invasive design serving as visible deterrent while collecting data</li>
        <li>Secure, encrypted data transmission protecting passenger privacy</li>
        <li>24/7 operational readiness with automated maintenance cycles</li>
      </ul>
    
      <h3 className="text-2xl font-semibold mb-4 mt-8">Initial Deployment Results</h3>
      <p className="mb-6">
        The initial deployment has significantly boosted the security team's efficiency, providing a constant 
        and reliable patrol presence across terminal areas with measurable improvements in threat response times.
      </p>
      
      <div className="bg-yellow-50 p-6 rounded-lg mb-6">
        <div className="flex items-center mb-3">
          <Zap className="h-6 w-6 text-yellow-600 mr-2" />
          <h4 className="text-xl font-semibold text-gray-800">Radical Reduction in Detection-to-Notification Time</h4>
        </div>
        <p className="text-gray-700">
          The system has proven highly effective, reducing the average detection-to-notification time for 
          unattended items from several minutes to under 30 seconds, enabling faster human response to verified threats.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <div className="flex items-center">
          <Shield className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
          <p className="text-blue-700 font-medium">Enhanced situational awareness with continuous patrol coverage and real-time threat assessment</p>
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
          <TrendingUp className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Development Roadmap & Future Enhancements</h4>
          <p className="text-gray-600 mb-3">
            YottaSync is working with the client on the next phase, which includes integrating thermal imaging 
            for elevated body temperature screening, developing predictive analytics to identify potential 
            congestion or altercation hotspots, and creating fleet coordination software for complex, 
            multi-robot operations across larger areas.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Next Phase:</strong> Thermal imaging integration, predictive analytics, and advanced fleet coordination systems.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default IntelligentAutonomousPatrol;