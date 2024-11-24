import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Briefcase, DollarSign } from "lucide-react";
import Button from "../shared/Button";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Add stats data
  const stats = [
    {
      icon: Users,
      number: "50K+",
      label: "Active Creators",
      color: "text-blue-600",
    },
    {
      icon: Briefcase,
      number: "10K+",
      label: "Brand Projects",
      color: "text-purple-600",
    },
    {
      icon: DollarSign,
      number: "$10M+",
      label: "Creator Earnings",
      color: "text-green-600",
    },
  ];

  // Add counter animation
  const counterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  const avatars = [
    {
      src: "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff",
      alt: "John D",
    },
    {
      src: "https://ui-avatars.com/api/?name=Sarah+Smith&background=FF4154&color=fff",
      alt: "Sarah S",
    },
    {
      src: "https://ui-avatars.com/api/?name=Mike+Brown&background=27AB83&color=fff",
      alt: "Mike B",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Trust badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gray-900 bg-opacity-5 rounded-full px-4 py-2 mb-8"
          >
            <div className="flex -space-x-1">
              {avatars.map((avatar, i) => (
                <img
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-white"
                  src={avatar.src}
                  alt={avatar.alt}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              Trusted by 10,000+ creators
            </span>
            <div className="flex items-center text-yellow-500">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            <span className="block text-gray-900">Transform Your</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Creative Journey
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Connect with leading brands, showcase your talent, and monetize your
            creativity. Join thousands of successful creators on the platform
            built for the creator economy.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="primary"
              size="large"
              icon={<ArrowRight className="ml-2" />}
            >
              Start Creating
            </Button>
            <Button variant="outline" size="large">
              View Success Stories
            </Button>
          </motion.div>

          {/* Stats section */}
          <motion.div
            variants={containerVariants}
            className="mt-20 relative z-10"
          >
            <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl shadow-lg" />

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto p-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={counterAnimation}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-6 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mb-4`} />
                  <motion.span
                    className={`text-4xl font-bold ${stat.color}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      delay: index * 0.2,
                    }}
                  >
                    {stat.number}
                  </motion.span>
                  <span className="mt-2 text-gray-600 text-center">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
                <div className="w-1 h-2 bg-gray-400 rounded-full mx-auto" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
