import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  BarChart,
  MessageSquare,
  Shield,
  Zap,
  DollarSign,
} from "lucide-react";

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Matching",
      description:
        "Our intelligent algorithm matches you with brands that align perfectly with your creative style and audience demographics.",
      color: "blue",
      details: [
        "Advanced machine learning algorithms",
        "Personality and style analysis",
        "Audience demographic matching",
        "Brand affinity scoring",
      ],
    },
    {
      icon: BarChart,
      title: "Performance Analytics",
      description:
        "Get detailed insights into your campaign performance with real-time analytics and comprehensive reporting tools.",
      color: "purple",
      details: [
        "Real-time engagement tracking",
        "Campaign ROI analysis",
        "Audience growth metrics",
        "Competitor benchmarking",
      ],
    },
    {
      icon: MessageSquare,
      title: "Seamless Collaboration",
      description:
        "Built-in tools for smooth communication, file sharing, and project management with brands.",
      color: "green",
      details: [
        "Integrated messaging system",
        "File sharing & versioning",
        "Project milestone tracking",
        "Contract management",
      ],
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description:
        "Get paid safely and on time with our secure escrow system and automated payment scheduling.",
      color: "red",
      details: [
        "Escrow protection",
        "Multiple payment methods",
        "Automated invoicing",
        "Payment milestone tracking",
      ],
    },
    {
      icon: Zap,
      title: "Quick Launch",
      description:
        "Start working with brands quickly with our streamlined onboarding and verification process.",
      color: "yellow",
      details: [
        "5-minute setup",
        "Automated verification",
        "Template library",
        "Guided onboarding",
      ],
    },
    {
      icon: DollarSign,
      title: "Fair Pricing",
      description:
        "Transparent pricing with no hidden fees. Only pay when you successfully complete a project.",
      color: "teal",
      details: [
        "Success-based fees",
        "Transparent pricing",
        "Volume discounts",
        "Flexible payment terms",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-500",
      purple: "bg-purple-500",
      green: "bg-green-500",
      red: "bg-red-500",
      yellow: "bg-yellow-500",
      teal: "bg-teal-500",
    };
    return colors[color];
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Creators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed in the creator economy, all in one
            place.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setActiveFeature(index)}
              onHoverEnd={() => setActiveFeature(null)}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
            >
              {/* Card Content */}
              <div className="p-8">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${getColorClasses(
                    feature.color
                  )} text-white mb-6`}
                >
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>

                {/* Expandable Details */}
                <AnimatePresence>
                  {activeFeature === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4"
                    >
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center text-gray-600"
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${getColorClasses(
                                feature.color
                              )} mr-2`}
                            />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 ${getColorClasses(
                  feature.color
                )} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
