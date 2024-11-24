import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Search, Briefcase, MessageSquare } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Profile",
      description:
        "Sign up and showcase your creative portfolio, skills, and experience to stand out.",
      color: "bg-blue-500",
    },
    {
      icon: Search,
      title: "Discover Opportunities",
      description:
        "Browse through relevant projects and opportunities that match your expertise.",
      color: "bg-purple-500",
    },
    {
      icon: MessageSquare,
      title: "Connect & Collaborate",
      description:
        "Communicate directly with brands and start working on exciting projects.",
      color: "bg-green-500",
    },
    {
      icon: Briefcase,
      title: "Grow Your Career",
      description:
        "Build your reputation, earn more, and take your creative career to new heights.",
      color: "bg-pink-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Get started in 4 simple steps and launch your creative career
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 right-0 w-full h-0.5 bg-gray-200 transform translate-y-full">
                  <div className="absolute right-0 w-2 h-2 bg-gray-200 rounded-full transform -translate-y-1/2" />
                </div>
              )}

              {/* Step Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-6`}
                >
                  <step.icon size={32} />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
