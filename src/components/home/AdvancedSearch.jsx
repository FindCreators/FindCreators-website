import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sliders, ChevronDown } from "lucide-react";

const AdvancedSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [filters, setFilters] = useState({
    verified: false,
    available: false,
    topRated: false,
  });

  const categories = [
    "All Categories",
    "Content Creation",
    "Social Media",
    "Video Production",
    "Photography",
    "Writing & Translation",
    "Voice Over",
    "Music & Audio",
    "Animation",
  ];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Search Bar */}
      <div className="flex items-center p-2 bg-white rounded-2xl shadow-lg">
        <div className="flex-1 flex items-center space-x-4 px-4">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for creators..."
            className="w-full py-2 focus:outline-none"
          />
        </div>

        <div className="flex items-center space-x-2 px-4">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-xl flex items-center space-x-2 ${
              isOpen ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sliders className="w-5 h-5" />
            <span className="text-sm font-medium">Filters</span>
          </motion.button>

          <button className="px-6 py-2 bg-blue-600 text-white rounded-xl font-medium">
            Search
          </button>
        </div>
      </div>

      {/* Advanced Filters Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="grid grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Category Selector */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full p-3 bg-gray-50 rounded-xl appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        value={priceRange[0]}
                        onChange={(e) =>
                          setPriceRange([
                            parseInt(e.target.value),
                            priceRange[1],
                          ])
                        }
                        className="w-full"
                      />
                      <span className="text-sm text-gray-500">
                        ${priceRange[0]}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([
                            priceRange[0],
                            parseInt(e.target.value),
                          ])
                        }
                        className="w-full"
                      />
                      <span className="text-sm text-gray-500">
                        ${priceRange[1]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Additional Filters
                </label>
                <div className="space-y-3">
                  {Object.entries(filters).map(([key, value]) => (
                    <label key={key} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={() =>
                          setFilters({ ...filters, [key]: !value })
                        }
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        {key.split(/(?=[A-Z])/).join(" ")}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 mt-8">
              <motion.button
                onClick={() => {
                  setSelectedCategory("All Categories");
                  setPriceRange([0, 1000]);
                  setFilters({
                    verified: false,
                    available: false,
                    topRated: false,
                  });
                }}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Reset Filters
              </motion.button>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-blue-600 text-white rounded-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply Filters
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdvancedSearch;
