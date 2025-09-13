'use client';

import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Eye, Heart, MessageCircle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const BlogPost = ({ post }) => {
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </a>
        </div>
        <Footer />
      </div>
    );
  }
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-white/70"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-gray-200/30 rounded-full top-0 -left-24 blur-3xl animate-float"></div>
          <div className="absolute w-80 h-80 bg-gray-300/30 rounded-full bottom-0 -right-20 blur-3xl animate-float-delayed"></div>
          <div className="absolute w-64 h-64 bg-gray-400/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse-slow"></div>
        </div>

        {/* Ultra-optimized Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-400/20 rounded-full animate-twinkle gpu-accelerated"
              style={{
                left: `${30 + i * 20}%`,
                top: `${25 + i * 20}%`,
                animationDelay: `${i * 3}s`,
                animationDuration: '8s'
              }}
            />
          ))}
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8 animate-fade-in-up">
              <a
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-all duration-300 hover:translate-x-1 group"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="font-medium">Back to Blog</span>
              </a>
            </nav>

            {/* Post Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8 animate-fade-in-up animation-delay-200">
              <span className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                {post.category}
              </span>
              <div className="flex items-center gap-6 text-gray-300">
                <span className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                  <Calendar size={18} />
                  <span className="font-medium">{post.date}</span>
                </span>
                <span className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                  <Clock size={18} />
                  <span className="font-medium">{post.readTime}</span>
                </span>
                <span className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                  <User size={18} />
                  <span className="font-medium">{post.author}</span>
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tight animate-fade-in-up animation-delay-400" style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}>
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-2xl text-gray-700 leading-relaxed mb-10 max-w-4xl animate-fade-in-up animation-delay-600" style={{ fontFamily: "'Inter', 'SF Pro Text', sans-serif" }}>
              {post.excerpt}
            </p>

            {/* Engagement Stats & Share */}
            <div className="flex items-center justify-between animate-fade-in-up animation-delay-800">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <Eye size={18} />
                  <span className="font-medium">2.4k views</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Heart size={18} />
                  <span className="font-medium">156 likes</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MessageCircle size={18} />
                  <span className="font-medium">23 comments</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold border border-white/20 hover:border-white/30 hover:scale-105">
                  <Share2 size={18} />
                  Share Article
                </button>
                <span className="text-gray-300 text-sm flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <BookOpen size={16} />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                src={post.image}
                alt={post.imageAlt}
                className="w-full h-80 md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Image Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                        <BookOpen size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">Featured Article</p>
                        <p className="text-gray-200 text-sm">Premium Content</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold text-2xl">#{post.category}</p>
                      <p className="text-gray-200 text-sm">Category</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Article Meta Info */}
            <div className="bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-xl rounded-3xl p-10 mb-16 border border-gray-200/50 shadow-xl animate-fade-in-up">
              <div className="flex flex-wrap items-center gap-8 text-gray-600 mb-8">
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Calendar size={18} className="text-indigo-600" />
                  <span className="font-semibold">Published on {post.date}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock size={18} className="text-purple-600" />
                  <span className="font-semibold">{post.readTime}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <User size={18} className="text-blue-600" />
                  <span className="font-semibold">By {post.author}</span>
                </div>
              </div>

              {/* Tags */}
              {post.tags && (
                <div className="border-t border-gray-200/50 pt-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
                    Topics Covered
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-800 rounded-full text-sm font-semibold border border-indigo-100 hover:from-indigo-100 hover:to-purple-100 transition-all duration-200 cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Article Content */}
            <div className="prose prose-xl max-w-none animate-fade-in-up animation-delay-200">
              <div
                className="text-gray-800 leading-relaxed"
                style={{
                  fontFamily: "'Inter', 'SF Pro Text', 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  lineHeight: '1.8',
                  letterSpacing: '-0.01em',
                  fontWeight: '400'
                }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Article Footer */}
            <div className="mt-20 pt-12 border-t border-gradient-to-r from-transparent via-gray-300 to-transparent animate-fade-in-up animation-delay-400">
              <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-xl rounded-3xl p-10 border border-gray-200/50 shadow-2xl">
                <div className="flex items-start gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <User size={28} className="text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
                      {post.author}
                    </h4>
                    <p className="text-indigo-600 font-semibold mb-4">Fleet Management Expert & Technology Specialist</p>
                    <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "'SF Pro Text', sans-serif" }}>
                      Our team of fleet management experts brings years of experience in transportation technology,
                      helping businesses across India optimize their fleet operations with cutting-edge solutions and innovative strategies.
                    </p>
                  </div>
                </div>

                {/* Author Stats */}
                <div className="flex items-center gap-8 pt-6 border-t border-gray-200/50">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">50+</p>
                    <p className="text-sm text-gray-600">Articles Published</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">10k+</p>
                    <p className="text-sm text-gray-600">Readers Reached</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">5+</p>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                  <div className="flex-1"></div>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors duration-200">
                      <span className="text-blue-600 font-bold text-sm">in</span>
                    </button>
                    <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200">
                      <span className="text-gray-600 font-bold text-sm">@</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Call to Action */}
      <section className="py-24 bg-gray-50/80 backdrop-blur-sm relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full top-0 -left-48 blur-3xl animate-float"></div>
          <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full bottom-0 -right-40 blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 md:p-16 border border-white/50 animate-fade-in-up">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg animate-bounce-slow">
                <BookOpen size={32} className="text-white" />
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
                Ready to Transform Your
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Fleet Management?</span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "'SF Pro Text', sans-serif" }}>
                Join thousands of businesses across India who trust RouteBudget for their fleet expense management and operational excellence.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
                <div className="text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">1000+</p>
                  <p className="text-gray-600 font-medium">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">50k+</p>
                  <p className="text-gray-600 font-medium">Vehicles Managed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">99.9%</p>
                  <p className="text-gray-600 font-medium">Uptime</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/#contact"
                  className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg"
                >
                  <span>Get Free Demo</span>
                  <ArrowLeft size={20} className="ml-3 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="/blog"
                  className="group inline-flex items-center justify-center px-10 py-5 border-2 border-gray-300 text-gray-700 font-bold rounded-2xl hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80 text-lg"
                >
                  <span>Read More Articles</span>
                  <ArrowLeft size={20} className="ml-3 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
