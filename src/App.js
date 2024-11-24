import React, { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/home/HeroSection";
import FeaturesSection from "./components/home/FeaturesSection";
import AdvancedSearch from "./components/home/AdvancedSearch";
import CreatorCard from "./components/home/CreatorCard";
import HowItWorks from "./components/home/HowItWorks";
import TestimonialsSection from "./components/home/TestimonialsSection";
import CtaSection from "./components/home/CtaSection";
import Footer from "./components/layout/Footer";
import "./styles/globals.css";
import sarah from "./assets/sarah.jpeg";
import michael from "./assets/michel.jpeg";
import emma from "./assets/Emma.jpeg";

// Import animations helper
const smoothScroll = (e, target) => {
  e.preventDefault();
  const element = document.querySelector(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Account for navbar height
      behavior: "smooth",
    });
  }
};

const App = () => {
  // Sample creator data
  const featuredCreators = [
    {
      name: "Sarah Johnson",
      category: "Content Creator",
      coverImage: sarah,
      likes: 45.2,
      followers: 120,
      verified: true,
      projects: 156,
      successRate: 98,
      reviews: 142,
    },
    {
      name: "Michael Chen",
      category: "Video Producer",
      coverImage: michael,
      likes: 32.8,
      followers: 85,
      verified: true,
      projects: 98,
      successRate: 95,
      reviews: 89,
    },
    {
      name: "Emma Davis",
      category: "Social Media Expert",
      coverImage: emma,
      likes: 28.5,
      followers: 75,
      verified: true,
      projects: 124,
      successRate: 96,
      reviews: 115,
    },
  ];

  useEffect(() => {
    // Add smooth scroll behavior
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) =>
        smoothScroll(e, link.getAttribute("href"))
      );
    });

    // Cleanup
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", (e) =>
          smoothScroll(e, link.getAttribute("href"))
        );
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none" />

        {/* Content sections */}
        <div className="relative">
          {/* Hero Section */}
          <HeroSection />

          {/* Search Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8" id="search">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                  Find Your Perfect Creator
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Search through thousands of talented creators and find the
                  perfect match for your brand
                </p>
              </div>
              <AdvancedSearch />
            </div>
          </section>

          {/* Features Section */}
          <FeaturesSection />

          {/* Featured Creators */}
          <section className="py-16 bg-white" id="creators">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                  Featured Creators
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Discover our top-rated creators who consistently deliver
                  exceptional results
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredCreators.map((creator, index) => (
                  <CreatorCard key={index} creator={creator} />
                ))}
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <HowItWorks />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* CTA Section */}
          <CtaSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
