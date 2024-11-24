import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Eye, EyeOff } from "lucide-react";

const CtaSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("creator");

  const benefits = [
    "Access to top brands and opportunities",
    "Built-in collaboration tools",
    "Secure payment system",
    "Professional growth resources",
  ];

  return (
    <section className="py-20 overflow-hidden" id="cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background Design */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform -skew-y-2" />

          {/* Content */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-12">
            {/* Left Column */}
            <div className="text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-6"
              >
                Ready to Transform Your Creative Journey?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/80 mb-8"
              >
                Join thousands of successful creators and start collaborating
                with top brands today.
              </motion.p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-4"
              >
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <img
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src={`https://ui-avatars.com/api/?name=User${i}&background=random`}
                      alt={`User ${i + 1}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-white/80">
                  Join 10,000+ creators already on the platform
                </p>
              </motion.div>
            </div>

            {/* Right Column - Sign Up Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Create Your Account
              </h3>

              {/* Account Type Toggle */}
              <div className="flex rounded-lg bg-gray-100 p-1 mb-6">
                {["creator", "brand"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setAccountType(type)}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                      accountType === type
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium flex items-center justify-center space-x-2"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Sign in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
