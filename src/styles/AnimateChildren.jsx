import "./animation.css";
import { useState } from "react";
import { motion } from "framer-motion";

function AnimateChildren(props) {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  // orig:
  // const imageLoaded = () => {
  //   setImageLoading(false);
  //   setTimeout(() => setPulsing(false), 600);
  // };
  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  console.dir(props);
  console.log(props.children);

  return (
    <div className="App">
      <div
        className={`${pulsing ? "pulse" : ""} loadable`}
        // style={{ width: "600px", background: "#ccc" }}
      >
        {/* 
          original example:
        <motion.img
          initial={{ height: "16rem", opacity: 0 }}
          // style={{ height: imageLoading ? "6rem" : "auto" }}
          animate={{
            height: imageLoading ? "16rem" : "auto",
            opacity: imageLoading ? 0 : 1,
          }}
          transition={
            ({ height: { delay: 0, duration: 0.4 } },
            { opacity: { delay: 0.5, duration: 0.4 } })
          }
          onLoad={imageLoaded}
          width="100%"
          src="https://source.unsplash.com/random"
        /> 
        */}
        <motion
          initial={{ height: "16rem", opacity: 0 }}
          style={{ height: imageLoading ? "6rem" : "auto" }}
          animate={{
            height: imageLoading ? "16rem" : "auto",
            // opacity: imageLoading ? 0 : 1,
          }}
          transition={
            ({ height: { delay: 0, duration: 0.4 } },
            { opacity: { delay: 0.5, duration: 0.4 } })
          }
          onLoad={props.imageLoaded}
          width="100%"
        >
          {props.children}
        </motion>
      </div>
    </div>
  );
}
export default AnimateChildren;
