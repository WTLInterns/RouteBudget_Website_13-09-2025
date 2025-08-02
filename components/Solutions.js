import { Fuel, Tag, PenTool as Tool, BarChart3, Clock, Shield } from 'lucide-react';

const solutions = [
  {
    icon: <Fuel size={30} />,
    title: 'Fuel Efficiency Tracking',
    description: 'Monitor fuel consumption trends across your fleet to optimize routes and refueling habits.'
  },
  {
    icon: <Tag size={30} />,
    title: 'Dynamic Toll Management',
    description: 'Auto-log toll expenses and analyze route cost efficiency for intercity operations.'
  },
  {
    icon: <Tool size={30} />,
    title: 'Real-Time Maintenance Logs',
    description: 'Schedule maintenance, record servicing, and avoid costly breakdowns with timely alerts.'
  },
  {
    icon: <BarChart3 size={30} />,
    title: 'Expense Analytics Dashboard',
    description: 'Visualize all expenses through interactive graphs and predictive reports.'
  },
  {
    icon: <Clock size={30} />,
    title: 'Instant Image Uploads',
    description: 'Capture and upload receipts, accident reports, and maintenance bills via mobile app.'
  },
  {
    icon: <Shield size={30} />,
    title: 'Secure Cloud Backup',
    description: 'Your data is auto-synced and securely stored on encrypted servers.'
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full top-0 -left-24 blur-3xl animate-float"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full bottom-0 -right-20 blur-3xl animate-float-delayed"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto mb-20 animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-semibold border border-indigo-200">
              🎯 Tailored Solutions
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
            Complete Fleet Management
            <span className="block text-gradient">Solutions for India</span>
          </h2>

          <p className="text-2xl text-gray-600 leading-relaxed mb-4" style={{ fontFamily: "'SF Pro Text', sans-serif" }}>
            Discover how Route Budget provides end-to-end solutions for cab and travel businesses to reduce costs and streamline expense tracking across India.
          </p>

          <p className="text-lg text-gray-700 font-semibold">
            Route Budget: Your Digital Fleet Accountant Optimized for India's Transportation Sector
          </p>
        </div>

        {/* Solutions Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:rotate-1 group overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Shimmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-shimmer" />

              {/* Floating Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-purple-100 to-blue-100 text-purple-600 rounded-2xl mb-6 shadow-md animate-float">
                {solution.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;