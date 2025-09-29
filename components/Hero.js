'use client';

 

const Hero = () => {
  

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full top-0 -left-24 blur-3xl animate-float"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full bottom-0 -right-20 blur-3xl animate-float-delayed"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse-slow"></div>
        
        {/* Additional gradient orbs */}
        <div className="absolute w-48 h-48 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full top-1/4 right-1/4 blur-2xl animate-float opacity-70"></div>
        <div className="absolute w-32 h-32 bg-gradient-to-r from-emerald-500/25 to-teal-500/25 rounded-full bottom-1/4 left-1/4 blur-2xl animate-float-delayed opacity-60"></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-twinkle"
            style={{
              left: `${15 + i * 12}%`,
              top: `${10 + i * 10}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center min-h-screen py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="mb-8">
              <span className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 backdrop-blur-lg text-indigo-200 rounded-full mt-10 text-base font-bold border border-indigo-400/40 shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 hover:scale-105 group">
                <span className="mr-3 text-xl animate-bounce">🚀</span>
                <span className="bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">Next-Gen Fleet Management</span>
                <div className="ml-3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </span>
            </div>

            <h1 className="typography-h1 font-black tracking-tight mb-10 animate-fade-in-up animation-delay-200">
              <span className="block text-white hover:text-gray-100 transition-colors duration-500">Simplify Your</span>
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">Fleet Expense</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl text-gray-300 font-light">Management</span>
            </h1>

            <p className="typography-body-lg mb-8 text-gray-300 leading-relaxed animate-fade-in-up animation-delay-400 max-w-3xl">
              <span className="font-semibold text-white">A complete solution</span> to manage and track all your Route Budget including 
              <span className="text-indigo-300 font-medium"> fuel payments, FastTag recharges, servicing costs</span>, and more.
            </p>

            {/* Enhanced CTA Buttons (commented out as requested) */}
            {/**
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-600">
              <button 
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 hover:-translate-y-2 text-base overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%]"></div>
                <span className="relative z-10 mr-3">Start Free Trial</span>
                <svg className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>   

              <button 
                className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-bold rounded-xl hover:bg白/10 backdrop-blur-lg transition-all duration-500 text-base hover:border-white/60 hover:shadow-2xl hover:shadow-white/20 transform hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from白/5 to白/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <svg className="relative z-10 mr-4 w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="relative z-10">Watch Demo</span>
              </button>
            </div>
            **/}

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-gray-300 animate-fade-in-up animation-delay-800">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-base animate-pulse" style={{ animationDelay: `${i * 200}ms` }}>★</span>
                  ))}
                </div>
                <span className="font-semibold text-white">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                <div className="relative">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse block"></span>
                  <span className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
                </div>
                <span className="font-semibold text-white">1000+ Happy Clients</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-70 group-hover:opacity-100"></div>
              <div className="relative bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 hover:scale-105">
                <img
                  src="https://images.klipfolio.com/website/public/43d1163c-613a-4709-b29f-c9e48a2dd27e/supply-chain-dashboard-example.png"
                  alt="Dashboard Example"
                  className="w-full h-auto object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
                
                {/* Floating UI elements */}
                <div className="absolute top-8 right-8 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
                  Live Data
                </div>
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                  Real-time Analytics
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;