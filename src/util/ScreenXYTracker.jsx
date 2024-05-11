import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

/* Reference: https://github.com/n8tb1t/use-scroll-position#readme */

const [headerStyle, setHeaderStyle] = useState({
  transition: "all 200ms ease-in",
});

useScrollPosition(
  ({ prevPos, currPos }) => {
    const isVisible = currPos.y > prevPos.y;

    const shouldBeStyle = {
      visibility: isVisible ? "visible" : "hidden",
      transition: `all 200ms ${isVisible ? "ease-in" : "ease-out"}`,
      transform: isVisible ? "none" : "translate(0, -100%)",
    };

    if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return;

    setHeaderStyle(shouldBeStyle);
  },
  [headerStyle]
);

const ScreenXYTracker = <header style={{ ...headerStyle }} />;
export default ScreenXYTracker;
