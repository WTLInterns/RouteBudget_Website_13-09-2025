'use client';

import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const blogPosts = [
  {
    id: 'fleet-management-software-india',
    title: 'Fleet Management Software India: Introducing RouteBudget for Smarter Transport Operations',
    excerpt: 'Running a fleet in India is no easy task. Whether you\'re managing cabs in Delhi, transporting goods across Maharashtra, or handling school buses in Bengaluru, you face daily challenges—rising fuel costs, route delays, tolls, fines, and unorganized paperwork.',
    author: 'RouteBudget Team',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'Fleet Management',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&crop=center',
    imageAlt: 'Fleet of vehicles on Indian highway with GPS tracking overlay',
    featured: true,
    tags: ['Fleet Management', 'India', 'GPS Tracking', 'Fuel Management']
  },
  {
    id: 'types-of-fleet-management-software',
    title: 'Types of Fleet Management Software: A Comprehensive Guide to RouteBudget and More',
    excerpt: 'Fleet management software is revolutionizing the way businesses operate, especially in India, where transportation plays a vital role in the economy. Discover the different types and how RouteBudget stands out.',
    author: 'RouteBudget Team',
    date: 'January 10, 2025',
    readTime: '12 min read',
    category: 'Software Guide',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=500&fit=crop&crop=center',
    imageAlt: 'Dashboard showing different types of fleet management software interfaces',
    featured: false,
    tags: ['Software Types', 'Comparison', 'Features', 'Technology']
  },
  {
    id: 'online-fleet-management-software-india-2025',
    title: 'Online Fleet Management Software in India – The Complete Guide (2025)',
    excerpt: 'In today\'s fast-paced transport industry, managing a fleet efficiently is no longer a task to be handled manually. Explore the complete guide to online fleet management solutions.',
    author: 'RouteBudget Team',
    date: 'January 5, 2025',
    readTime: '10 min read',
    category: 'Industry Guide',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop&crop=center',
    imageAlt: 'Modern truck fleet with digital connectivity and cloud technology',
    featured: false,
    tags: ['Online Software', '2025 Trends', 'Cloud Technology', 'Digital Transformation']
  },
  {
    id: 'best-vehicle-fleet-management-software-india',
    title: 'Best Vehicle Fleet Management Software in India – RouteBudget',
    excerpt: 'Managing a fleet of vehicles is no small task, especially in a fast-paced and competitive market like India. Discover why RouteBudget is the best choice for your fleet management needs.',
    author: 'RouteBudget Team',
    date: 'January 1, 2025',
    readTime: '9 min read',
    category: 'Product Review',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=500&fit=crop&crop=center',
    imageAlt: 'Professional fleet management dashboard showing vehicle tracking and analytics',
    featured: false,
    tags: ['Product Review', 'Best Software', 'Vehicle Management', 'Analytics']
  }
];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-gray-400 opacity-10 rounded-full top-0 -left-24 blur-3xl animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-gray-500 opacity-10 rounded-full bottom-0 -right-24 blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight blog-hero-title animate-fade-in-up" style={{ fontFamily: "'SF Pro Display', 'Inter', sans-serif" }}>
            Fleet Management
            <span className="block text-gray-200 text-5xl md:text-7xl">Insights & Guides</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Stay updated with the latest trends, tips, and insights in fleet management.
            Learn how RouteBudget is transforming transportation businesses across India.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-200">
            <span className="flex items-center gap-2">
              <User size={16} />
              Expert Insights
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              Regular Updates
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              Quick Reads
            </span>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
                ⭐ Featured Article
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Industry Insights</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dive deep into the latest trends and expert insights in fleet management technology
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3">
                <div className="lg:flex">
                  <div className="lg:w-1/2 relative">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.imageAlt}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full text-sm font-semibold">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-gray-500 text-sm flex items-center gap-2">
                        <Calendar size={16} />
                        {featuredPost.date}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-2">
                        <Clock size={16} />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      {featuredPost.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                          <User size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-lg">{featuredPost.author}</p>
                          <p className="text-gray-500 text-sm">Fleet Management Expert</p>
                        </div>
                      </div>
                      <a
                        href={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl hover:from-gray-800 hover:to-gray-900 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Read Full Article
                        <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Expert Articles & Guides</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive collection of fleet management guides, industry insights, and expert tips to help you optimize your transportation business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-white text-xs flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                        <User size={14} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">Expert Author</p>
                      </div>
                    </div>

                    <a
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 font-semibold text-sm transition-all duration-200 transform hover:scale-105"
                    >
                      Read Article
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-20 bg-gradient-to-r from-gray-700 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Fleet Management Insights</h3>
            <p className="text-xl mb-8 opacity-90">
              Get the latest articles, tips, and industry news delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
