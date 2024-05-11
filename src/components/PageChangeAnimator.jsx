import React from "react";
import { motion } from "framer-motion";

const PageChangeAnimator = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        delayChildren: 1,
        duration: 1,
        ease: "linear",
        staggerChildren: 1,
        type: "tween",
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageChangeAnimator;
