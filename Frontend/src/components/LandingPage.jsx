import React, { useState } from 'react';

const LandingPage = ({ onGetStarted }) => {
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      icon: "🍔",
      title: "Fast Food",
      description: "Find the best fast food restaurants around you"
    },
    {
      icon: "☕",
      title: "Cafe",
      description: "Discover cozy cafes for your hangout or work"
    },
    {
      icon: "🍽️",
      title: "Fine Dining",
      description: "Experience luxury dining with top recommendations"
    },
    {
      icon: "🌮",
      title: "Street Food",
      description: "Explore delicious and affordable street food"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5dc] flex items-center justify-center p-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-[#8B5C2A] mb-6 animate-fade-in">
              Recommendation{' '}
              <span className="bg-gradient-to-r from-[#d2b48c] to-[#8B5C2A] bg-clip-text text-transparent">
                Restaurant
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#a67c52] mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover, organize, and share your favorite restaurants with our intuitive recommendation platform.
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={onGetStarted}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#8B5C2A] to-[#d2b48c] rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out"
          >
            <span className="relative z-10 flex items-center">
              Get Started
              <svg 
                className={`ml-2 w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#d2b48c] to-[#8B5C2A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#fff8ee] backdrop-blur-sm rounded-2xl p-6 hover:bg-[#f5e6c8] transition-all duration-300 transform hover:scale-105 border border-[#d2b48c]"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#8B5C2A] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#a67c52] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#8B5C2A] mb-2">∞</div>
            <div className="text-[#a67c52]">Unlimited Recommendations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#8B5C2A] mb-2">⭐</div>
            <div className="text-[#a67c52]">Curated Favorites</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#8B5C2A] mb-2">🍽️</div>
            <div className="text-[#a67c52]">All Types of Cuisine</div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-[#a67c52] text-sm">
          <p>Built with ❤️ using React & Tailwind CSS</p>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#d2b48c]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8B5C2A]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#a67c52]/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default LandingPage;