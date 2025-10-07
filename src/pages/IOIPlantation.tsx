import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import { Eye, Zap, BarChart3, Factory, AlertTriangle, TrendingUp } from 'lucide-react';

const PrecisionYieldIntelligence = () => {
  return (
    <ProjectPageLayout
      title="Precision Yield Intelligence"
      subtitle="AI-Powered Production Efficiency for Palm Oil Processing"
      imageUrl="/lovable-uploads/black.jpg"
      brandName="Major Palm Oil Producer"
      darkMode={true}
    >
      <SEO 
        title="Precision Yield Intelligence - YottaSync" 
        description="Computer vision system automating palm oil fruit bunch counting and production efficiency measurement for optimized processing operations."
        type="article"
      />
      
      <div className="bg-green-50 p-4 rounded-lg mb-6 flex items-center">
        <TrendingUp className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
        <p className="text-green-700 font-medium text-sm">Deployed Solution — Delivering Measurable Results</p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Plantation Vision AI: Transforming Palm Oil Production</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Project Background</h3>
        <p>
          A major palm oil producer engaged YottaSync to solve a critical challenge in their production efficiency measurement. 
          They needed an accurate, automated way to track the yield of their processing lines in real-time to optimize operations 
          and reduce revenue loss from manual counting errors.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">The Production Challenge</h3>
      <p className="mb-4">
        The company faced significant operational inefficiencies in their core processing measurement:
      </p>
      <div className="space-y-2">
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Reliance on manual visual inspection and sampling for fruit bunch counting</span>
        </p>
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Labor-intensive processes prone to human error and fatigue</span>
        </p>
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Intermittent data points preventing real-time efficiency monitoring</span>
        </p>
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Inability to accurately gauge processing efficiency or identify bottlenecks</span>
        </p>
        <p className="flex items-start">
          <span className="mr-2">•</span>
          <span>Difficulty reconciling incoming harvest with final output</span>
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">AI-Powered Solution</h3>
      <p className="mb-6">
        YottaSync deployed a state-of-the-art computer vision system, "Plantation Vision AI," specifically engineered 
        for the demanding environment of palm oil processing facilities.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <Eye className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">High-Resolution Line Scanning</h4>
            <p className="text-gray-600">Ruggedized industrial cameras installed above key conveyor points for continuous production monitoring.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-purple-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <BarChart3 className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Real-Time Fruit Classification</h4>
            <p className="text-gray-600">Proprietary ML model that instantly distinguishes between stripped and unstripped palm oil fruit bunches.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <Factory className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Automated Object Counting</h4>
            <p className="text-gray-600">Intelligent counting algorithm providing real-time tally of throughput and processing efficiency.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <div className="bg-orange-100 p-2 rounded-lg mr-4 flex-shrink-0">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Production Analytics Dashboard</h4>
            <p className="text-gray-600">Centralized platform visualizing count data, processing rates, and efficiency reports.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Key System Features</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>All-weather, dust and moisture-resistant camera housings for 24/7 operation</li>
        <li>Real-time visual and auditory alerts for line jams or yield deviations</li>
        <li>Easy-to-use dashboard accessible from any device on corporate network</li>
        <li>Minimal setup requirements integrating with existing conveyor systems</li>
        <li>High-accuracy classification even in challenging visual conditions</li>
      </ul>
    
      <h3 className="text-2xl font-semibold mb-4 mt-8">Measurable Results</h3>
      <p className="mb-6">
        The Plantation Vision AI system has delivered transformative accuracy and operational insight, 
        eliminating manual counting errors and providing the first-ever real-time view of production line efficiency.
      </p>
      
      <div className="bg-yellow-50 p-6 rounded-lg mb-6">
        <div className="flex items-center mb-3">
          <Zap className="h-6 w-6 text-yellow-600 mr-2" />
          <h4 className="text-xl font-semibold text-gray-800">Documented 15% Increase in Processing Throughput</h4>
        </div>
        <p className="text-gray-700">
          The precise data enabled management to pinpoint inefficiencies and optimize line speeds and maintenance schedules, 
          resulting in significant production gains and revenue improvement.
        </p>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
          <TrendingUp className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Development Roadmap & Future Enhancements</h4>
          <p className="text-gray-600 mb-3">
            YottaSync is expanding this proven technology platform with advanced capabilities including predictive maintenance 
            through visual anomaly detection in machinery, and integration with weight data for comprehensive mass-balance 
            calculation across the entire production facility.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Next Phase:</strong> Implementation of predictive maintenance algorithms and expanded facility-wide mass-balance analytics.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default PrecisionYieldIntelligence;