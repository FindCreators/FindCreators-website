import React from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  onClick,
  disabled = false,
  icon,
  fullWidth = false,
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    ghost: "text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
    },
    disabled: {
      opacity: 0.6,
      cursor: "not-allowed",
    },
  };

  return (
    <motion.button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      animate={disabled ? "disabled" : "initial"}
    >
      {icon && (
        <span className={`inline-block ${children ? "mr-2" : ""}`}>{icon}</span>
      )}
      {children}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          border: "2px solid transparent",
          background: "transparent",
        }}
        whileHover={{
          border: `2px solid ${
            variant === "primary"
              ? "rgba(255,255,255,0.2)"
              : "rgba(59,130,246,0.2)"
          }`,
          transition: { duration: 0.2 },
        }}
      />
    </motion.button>
  );
};

export default Button;
