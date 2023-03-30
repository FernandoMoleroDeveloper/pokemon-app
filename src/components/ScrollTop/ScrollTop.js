import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollTop = () => {
  // Aux functions
  const scrollTop = () => {
    const app = document?.querySelector(".app");
    if (app) {
      setTimeout(() => app.scrollIntoView({ behavior: "smooth" }), 200);
    }
  };

  // Scroll top when route change
  const { pathname } = useLocation();
  useEffect(scrollTop, [pathname]);

  return <></>;
};

export default ScrollTop;
