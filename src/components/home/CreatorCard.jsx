import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Heart, Users, Play } from "lucide-react";

const CreatorCard = ({ creator }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = (rect.left + rect.right) / 2;
    const centerY = (rect.top + rect.bottom) / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className="relative perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setIsHovered(true)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-72 bg-white rounded-2xl shadow-xl overflow-hidden transform-gpu">
        {/* Creator Cover Image */}
        <div className="relative h-40 bg-gradient-to-r from-purple-500 to-blue-500">
          <img
            src={creator.coverImage || "/api/placeholder/400/320"}
            alt={creator.name}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black opacity-20" />

          {/* Stats Overlay */}
          <div className="absolute top-4 right-4 flex space-x-3">
            <div className="flex items-center px-2 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm">
              <Heart size={14} className="mr-1" />
              <span>{creator.likes}k</span>
            </div>
            <div className="flex items-center px-2 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm">
              <Users size={14} className="mr-1" />
              <span>{creator.followers}k</span>
            </div>
          </div>
        </div>

        {/* Creator Info */}
        <div className="relative px-6 pb-6">
          <div className="flex justify-between items-end -mt-8">
            <div className="relative">
              <img
                src={
                  creator.avatar ||
                  "https://ui-avatars.com/api/?name=" + creator.name
                }
                alt={creator.name}
                className="w-16 h-16 rounded-xl border-4 border-white shadow-lg"
              />
              {creator.verified && (
                <div className="absolute -right-1 -bottom-1 w-6 h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </div>
            <motion.button
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Follow
            </motion.button>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg">{creator.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{creator.category}</p>
          </div>

          {/* Stats Grid */}
          <div className="mt-4 grid grid-cols-3 gap-4">
            {[
              { label: "Projects", value: creator.projects },
              { label: "Success Rate", value: `${creator.successRate}%` },
              { label: "Reviews", value: creator.reviews },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-semibold">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Hover Content */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/90 to-white flex items-center justify-center"
              >
                <motion.button
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={16} />
                  <span>View Profile</span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default CreatorCard;
