import React from "react";
import { motion } from "framer-motion";

const FadeScaleXWrapper = ({ children }, props) => {
  return (
    <motion.div
      animate={{
        opacity: 1,
        scaleX: 1,
      }}
      exit={{
        opacity: 0,
        scaleX: 0,
      }}
      // key={key}
      initial={{
        opacity: 0,
        scaleX: 0,
      }}
      transition={{
        duration: props.duration,
        ease: "easeInOut",
        opacity: 1,
        scaleX: 1,
        // type: "tween",
        type: "inertia",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeScaleXWrapper;
