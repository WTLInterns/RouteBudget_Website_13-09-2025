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

          <h2 className="typography-h1 font-black text-gray-900 mb-6 tracking-tight">
            Complete Fleet Management
            <span className="block text-gradient">Solutions for India</span>
          </h2>

          <p className="typography-body-lg text-gray-600 leading-relaxed mb-4">
            Discover how Route Budget provides end-to-end solutions for cab and travel businesses to reduce costs and streamline expense tracking across India.
          </p>

          <p className="text-lg text-gray-700 font-semibold">
            Route Budget: Your Digital Fleet Accountant Optimized for India's Transportation Sector
          </p>
        </div>

        {/* Enhanced Solutions Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative bg-white/95 backdrop-blur-sm p-10 rounded-3xl border border-gray-200/50 shadow-2xl hover:shadow-indigo-500/25 transition-all duration-700 hover:-translate-y-6 hover:scale-105 group overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Enhanced background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 via-purple-50/40 to-blue-50/60 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl" />

              {/* Multi-layer shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%]" />
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Enhanced Floating Icon */}
              <div className="relative mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-600 text-white rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </span>
                </div>
                {/* Icon glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/40 to-purple-500/40 rounded-2xl blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              </div>

              {/* Enhanced Content */}
              <div className="relative z-10">
                <h3 className="typography-h3 font-black text-gray-900 mb-6 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                  {solution.title}
                </h3>
                <p className="typography-body text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {solution.description}
                </p>
              </div>

              {/* Enhanced bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl"></div>

              {/* Floating particles */}
              <div className="absolute top-6 right-6 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
              <div className="absolute top-12 right-12 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '300ms' }}></div>
              
              {/* Corner decoration */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-indigo-100/60 to-purple-100/60 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-45 group-hover:rotate-90"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;