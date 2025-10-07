
import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import { Footprints, Zap, LineChart, Award, Sparkles, FlaskConical } from 'lucide-react';

const AiMicroscopy = () => {
  return (
    <ProjectPageLayout
      title="Medical Microscopy AI"
      subtitle="Revolutionary R&D for next-generation medical application"
      imageUrl="/lovable-uploads/black.jpg"
      brandName="Sunway Medical Centre" //brand name
      darkMode={true}
    >
      <SEO 
        title="Microscopy AI - YottaSync" 
        description="Revolutionary R&D for next-generation for faster and precise medical solution."
        type="article"
      />
      
      <div className="bg-yellow-50 p-4 rounded-lg mb-6 flex items-center">
        <FlaskConical className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
        <p className="text-yellow-700 font-medium text-sm">Ongoing R&D Project — Currently in Prototyping Phase</p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Advanced AI-Powered Microscopy Diagnostic </h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          A leading biomedical research institute partnered with YottaSync to transform the way microscopic diagnostics are performed. Their vision was to create an intelligent 
          microscopy platform that could assist pathologists and researchers in identifying cellular anomalies with unprecedented accuracy and speed. The goal: reduce diagnostic errors, 
          accelerate research workflows, and democratize access to expert-level microscopy analysis.
        </p>
      </div>
      
  
      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p className="mb-4">
        Traditional microscopy relies heavily on manual interpretation, which is time-consuming and prone to variability. The client needed a scalable solution that could:
      </p>
      <div className="space-y-2">
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Machine washable sensor technology for extended testing periods</span>
        </p>
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Low-profile design that doesn't interfere with natural movement</span>
        </p>
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Cross-platform mobile app for real-time coaching and feedback</span>
        </p>
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Materials testing module to evaluate durability and performance longevity</span>
        </p>
      </div>

            <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p className="mb-6">
        YottaSync developed a groundbreaking Medical Microscopy AI platform that 
        integrates advanced machine vision with cognitive AI capabilities. 
        The solution includes:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Intelligent Machine Vision</h4>
            <p className="text-gray-600">A high-accuracy deep learning model trained to identify and classify cellular structures, 
              anomalies, and pathogens across various tissue samples and stains.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Embedded LLM</h4>
            <p className="text-gray-600">A specialized language model that interprets visual data and generates descriptive, narrative-style reports summarizing key findings in natural language.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-purple-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Agentic AI Analysis</h4>
            <p className="text-gray-600">An autonomous AI agent that cross-references patterns with medical databases to suggest differential diagnoses and flag critical findings for immediate review.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-orange-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Unified Diagnostic Workspace</h4>
            <p className="text-gray-600">A cloud-based platform that integrates visual data, AI-generated reports, and agentic insights into a single, intuitive interface for pathologists.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Key Features</h4>
    <ul className="list-disc pl-6 space-y-2 mb-8">
      <li>Real-time analysis of live microscope feeds or high-resolution digital slides</li>
      <li>Customizable report templates to suit specific diagnostic protocols and research needs</li>
      <li>Secure, HIPAA-compliant data handling and storage for sensitive patient information</li>
      <li>Continuous learning system that improves its models based on anonymized expert feedback</li>
    </ul>
    
          <h3 className="text-2xl font-semibold mb-4 mt-8">Preliminary Results</h3>
    <p className="mb-6">
      The Medical Microscopy AI platform has demonstrated a transformative impact in its initial deployment. It has significantly reduced preliminary screening time, provided invaluable second-opinion insights that confirmed rare diagnoses, and improved report consistency. The platform's ability to explain its findings through the embedded LLM has built strong trust with medical professionals. Patents are pending for the core AI architecture and agentic reasoning process.
    </p>
      
    <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
      <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2 text-gray-700">Development Roadmap</h4>
        <p className="text-gray-600">
          YottaSync is continuing its collaboration with the research institute to achieve regulatory approvals for clinical use. The roadmap includes expanding the AI's capabilities to new disease domains and developing a lightweight version for educational and training purposes in medical schools.
        </p>
      </div>
    </div>
    </ProjectPageLayout>
  );
};

export default AiMicroscopy;
