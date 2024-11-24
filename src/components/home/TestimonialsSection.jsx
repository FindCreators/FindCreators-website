import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Fashion Influencer",
      image: "https://ui-avatars.com/api/?name=Alex+Thompson",
      content:
        "Finding brand collaborations used to be a struggle. Now, I get quality opportunities delivered right to my inbox. The platform has truly transformed my career as a creator.",
      rating: 5,
      stats: {
        followers: "250K+",
        projects: "85+",
        earnings: "$150K+",
      },
    },
    {
      name: "Maria Rodriguez",
      role: "Content Creator",
      image: "https://ui-avatars.com/api/?name=Maria+Rodriguez",
      content:
        "The platform's tools and analytics help me understand my performance and improve my content strategy. It's like having a business manager in my pocket.",
      rating: 5,
      stats: {
        followers: "180K+",
        projects: "62+",
        earnings: "$120K+",
      },
    },
    {
      name: "James Chen",
      role: "Video Producer",
      image: "https://ui-avatars.com/api/?name=James+Chen",
      content:
        "As a video creator, finding the right brands to work with was challenging. This platform made it seamless and helped me grow my business significantly.",
      rating: 5,
      stats: {
        followers: "320K+",
        projects: "95+",
        earnings: "$200K+",
      },
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-white overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Creator Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Hear from creators who have transformed their careers using our
            platform
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Testimonial Content */}
                <div className="flex flex-col justify-center">
                  <Quote className="w-12 h-12 text-blue-500 mb-6" />
                  <p className="text-xl text-gray-600 mb-8">
                    {testimonials[currentIndex].content}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-8">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-500 fill-current"
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-gray-50 rounded-xl p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">
                    Creator Stats
                  </h4>
                  <div className="grid grid-cols-1 gap-6">
                    {Object.entries(testimonials[currentIndex].stats).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="bg-white rounded-lg p-4 shadow-sm"
                        >
                          <p className="text-sm text-gray-600 mb-1 capitalize">
                            {key}
                          </p>
                          <p className="text-2xl font-bold text-blue-600">
                            {value}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between px-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
