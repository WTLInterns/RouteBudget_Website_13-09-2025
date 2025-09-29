import { Fuel, Tag, PenTool as Tool, BarChart3, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: <Fuel size={30} />,
    title: 'ERP-Based Multi-Admin System',
    description: `Route Budget is built on a powerful ERP foundation, offering:
- Master Admin Panel to oversee company-wide data
- Sub-Admin Access for team members or franchise locations
- Access Control & Permissions to maintain data security
- Record and monitor all fuel expenses with details on quantity, cost, and mileage for complete transparency`
  },
  {
    icon: <Tag size={30} />,
    title: 'Intelligent Expense Logging',
    description: `Track and categorize daily vehicle expenses in seconds:
- Fuel Costs: Record price per litre, quantity, and vendor location
- Toll & Parking Fees: Auto-log route-based tolls and stops
- Vehicle Maintenance: From minor repairs to major servicing`
  },
  {
    icon: <Tool size={30} />,
    title: 'Real-Time Image Upload',
    description: `Say goodbye to paper receipts. Upload images directly:
- Fuel bills
- Puncture/tire repair receipts
- Damage reports
- Parking slips`
  },
  {
    icon: <BarChart3 size={30} />,
    title: 'Cloud-Based Access with Real-Time Sync',
    description: `Route Budget uses secure cloud storage:
- Auto-syncs data across devices (mobile, desktop)
- Access your data anytime, anywhere`
  },
  {
    icon: <Clock size={30} />,
    title: 'Visual Dashboard for Smart Insights',
    description: `No more complex spreadsheets:
- Graphical expense reports
- Vehicle-wise breakdown
- Monthly and custom reporting filters`
  },
  {
    icon: <Shield size={30} />,
    title: 'Alerts & Notifications',
    description: `Stay informed:
- Low fuel efficiency warnings
- Over-budget alerts
- Insurance renewal reminders`
  },
  {
    icon: <Clock size={30} />,
    title: 'Mobile-Friendly Interface',
    description: `Use Route Budget on the go:
- Log entries via mobile camera
- Get instant insights in your hand
- No tech skills needed`
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full top-0 -left-24 blur-3xl animate-float"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full bottom-0 -right-20 blur-3xl animate-float-delayed"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto mb-16 animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-semibold border border-indigo-200">
              ⚡ Powerful Features
            </span>
          </div>

          <h2 className="typography-h2 font-black text-gray-900 mb-6 tracking-tight">
            Modern Fleet Management
            <span className="block text-gradient">Made Simple</span>
          </h2>

          <p className="typography-body-lg text-gray-600 leading-relaxed">
            Discover Route Budget — India's smartest fleet tracker for drivers, managers, and travel agencies.
            <span className="block mt-2">Real-time tracking, full transparency, effortless management.</span>
          </p>
        </div>

        {/* Enhanced Feature Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white/90 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-gray-200/60 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-700 hover:-translate-y-8 hover:scale-105 group overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Enhanced Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-purple-50/60 to-pink-50/40 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl" />

              {/* Multi-layer Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%]" />
              
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Enhanced Professional Icon */}
              <div className="relative mb-8">
                <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 text-white rounded-3xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </span>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                {/* Icon glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              </div>

              {/* Enhanced Content */}
              <div className="relative z-10">
                <h3 className="typography-h3 font-black text-gray-900 mb-6 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                  {feature.title}
                </h3>
                <p className="typography-body text-gray-600 leading-relaxed whitespace-pre-line group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Enhanced Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl"></div>

              {/* Floating particles */}
              <div className="absolute top-6 right-6 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
              <div className="absolute top-12 right-12 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '200ms' }}></div>
              
              {/* Corner Decoration Enhanced */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-12 group-hover:rotate-45"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;