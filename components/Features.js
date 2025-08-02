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
    <section id="features" className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full top-0 -left-24 blur-3xl animate-float"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full bottom-0 -right-20 blur-3xl animate-float-delayed"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto mb-20 animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-semibold border border-indigo-200">
              ⚡ Powerful Features
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
            Modern Fleet Management
            <span className="block text-gradient">Made Simple</span>
          </h2>

          <p className="text-2xl text-gray-600 leading-relaxed" style={{ fontFamily: "'SF Pro Text', sans-serif" }}>
            Discover Route Budget — India's smartest fleet tracker for drivers, managers, and travel agencies.
            <span className="block mt-2">Real-time tracking, full transparency, effortless management.</span>
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white/80 backdrop-blur-xl p-10 rounded-3xl border border-gray-200/50 shadow-luxury hover:shadow-luxury-hover transition-all duration-500 hover:-translate-y-6 hover:scale-105 group overflow-hidden animate-fade-in-up hover-lift"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-shimmer" />

              {/* Professional Icon */}
              <div className="relative mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {feature.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line group-hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: "'SF Pro Text', sans-serif" }}>
                  {feature.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>

              {/* Corner Decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;