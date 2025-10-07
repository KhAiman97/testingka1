import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import { ClipboardCheck, Zap, BarChart3, Users, Mail, Workflow, FlaskConical } from 'lucide-react';

const LabManagementPlatform = () => {
  return (
    <ProjectPageLayout
      title="Lab Management System"
      subtitle="Automating Workflow Efficiency for Research & Diagnostics"
      imageUrl="/lovable-uploads/black.jpg"
      brandName="Biotech Research & Diagnostics Lab"
      darkMode={true}
    >
      <SEO 
        title="Lab Management System - YottaSync" 
        description="AI-powered laboratory management system automating workflows, sample tracking, and result distribution for research and diagnostics labs."
        type="article"
      />
      
      <div className="bg-yellow-50 p-4 rounded-lg mb-6 flex items-center">
        <FlaskConical className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
        <p className="text-yellow-700 font-medium text-sm">Active R&D Project — Currently in Development Phase</p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Intelligent Laboratory Operations Platform</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
        <p>
          A leading biotech research and diagnostics laboratory has partnered with YottaSync to develop 
          a next-generation laboratory management platform. The project aims to replace fragmented manual processes 
          with an intelligent, unified digital ecosystem that streamlines operations and enhances research productivity.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Current Laboratory Challenges</h3>
      <p className="mb-4">
        Research labs face significant operational inefficiencies that impact both research velocity and diagnostic turnaround:
      </p>
      <div className="space-y-2">
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Researchers spending 30-40% of time on administrative coordination rather than core scientific work</span>
        </p>
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Manual sample tracking leading to chain-of-custody gaps and compliance risks</span>
        </p>
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Delayed result communications due to multi-step manual approval and distribution processes</span>
        </p>
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Lack of real-time visibility into project status and resource utilization</span>
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">R&D Solution Approach</h3>
      <p className="mb-6">
        Our development team is engineering a cloud-native Laboratory Intelligence Platform with modular architecture 
        designed to scale with research operations. The core system under development includes:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-purple-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <BarChart3 className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Unified Research Dashboard</h4>
            <p className="text-gray-600">Real-time visualization of all active projects, sample processing status, instrument utilization, and team capacity in a single interface.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <Mail className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Smart Result Distribution Engine</h4>
            <p className="text-gray-600">AI-driven notification system that automatically formats and delivers results based on client-specific templates and approval workflows.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-orange-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <Workflow className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Adaptive Workflow Automation</h4>
            <p className="text-gray-600">Configurable automation rules that dynamically assign tasks, update project status, and trigger compliance documentation based on real-time lab activities.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <ClipboardCheck className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Compliance Intelligence Module</h4>
            <p className="text-gray-600">Automated audit trail generation, sample chain-of-custody tracking, and regulatory reporting designed for GLP/GMP environments.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Platform Capabilities Under Development</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Intelligent resource scheduling with conflict detection and resolution</li>
        <li>Customizable result communication templates with brand consistency</li>
        <li>Granular role-based access controls with audit logging</li>
        <li>RESTful API ecosystem for laboratory instrument integration</li>
        <li>Mobile-responsive design for on-the-go lab management</li>
      </ul>
    
      <h3 className="text-2xl font-semibold mb-4 mt-8">Anticipated Impact</h3>
      <p className="mb-6">
        Based on our development milestones and pilot testing, the platform is projected to reduce administrative overhead by 60-70%, 
        decrease result delivery times from days to hours, and provide research leadership with unprecedented operational visibility. 
        Early simulations show significant improvements in resource utilization and compliance adherence.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
          <Zap className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Development Roadmap & Future Enhancements</h4>
          <p className="text-gray-600 mb-3">
            Current R&D focus includes core platform stability and initial pilot deployment. Future phases will integrate 
            predictive analytics for project timeline forecasting, client self-service portals, and AI-assisted quality control 
            with anomaly detection algorithms.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Next Milestone:</strong> Limited pilot deployment with select research teams for real-world validation and feedback collection.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default LabManagementPlatform;