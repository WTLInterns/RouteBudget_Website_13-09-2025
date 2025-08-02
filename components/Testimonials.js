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
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
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

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight blog-hero-title" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
            What Our Users Say About
            <span className="block text-gradient">Route Budget</span>
          </h2>

          <p className="text-2xl text-gray-200 leading-relaxed" style={{ fontFamily: "'SF Pro Text', sans-serif" }}>
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
              <p className="text-gray-200 text-lg leading-relaxed mb-8 italic" style={{ fontFamily: "'SF Pro Text', sans-serif" }}>
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
                  <h4 className="font-bold text-white text-lg" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
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
          <button className="px-8 py-3 bg-white text-blue-900 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;