'use client';

const testimonials = [
  {
    quote: `Route Budget helped us reduce fuel and maintenance costs by nearly 20%. The reporting 
dashboard is a game- changer`,
    author: "Ravi",
    position: " Fleet Manager, Mumbai ",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: `Earlier I used notebooks to manage my expenses. Now I just snap a pic, and everything is 
stored in the app. Saved me hours every week.`,
    author: "Priya",
    position: "Solo Cab Driver, Pune",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: `Managing multiple cabs with different drivers used to be chaotic. With Route Budget, it's all in one 
place. I get daily updates and alerts.`,
    author: "Amit",
    position: " Travel Agency Owner, Pune",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials = () => {
  const handleContactSupport = () => {
    // Create WhatsApp message for contact support
    const message = `Hello! I need support with RouteBudget fleet management software.

Please assist me with my queries and provide the necessary support.

Thank you!`;

    // WhatsApp number (WebUtsav)
    const whatsappNumber = '918766922792';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    }
  };
  return (
    <section id="testimonials" className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full top-0 -left-24 blur-3xl animate-float"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full bottom-0 -right-20 blur-3xl animate-float-delayed"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-twinkle"
            style={{
              left: `${10 + (i * 6.67)}%`,
              top: `${15 + (i * 5.33)}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-20 animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm text-indigo-300 rounded-full text-sm font-semibold border border-indigo-500/30">
              ⭐ Customer Stories
            </span>
          </div>

          <h2 className="typography-h1 font-black text-white mb-6 tracking-tight blog-hero-title">
            What Our Users Say About
            <span className="block text-gradient">Route Budget</span>
          </h2>

          <p className="typography-body-lg text-gray-200 leading-relaxed">
            Hear from real users across India who've streamlined their operations and boosted profitability using Route Budget, the leading fleet expense management software.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (       
            <div     
              key={index}
              className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-luxury hover:shadow-luxury-hover transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">"</span>
                </div>
              </div>

              {/* Quote */}
              <p className="typography-body text-gray-200 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="typography-body font-bold text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-300 text-sm font-medium">{testimonial.position}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <span className="text-gray-300 text-sm ml-2 font-semibold">5.0 Rating</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={handleContactSupport}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;