import { useEffect, useState } from "react";

const useBreakpoint = () => {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState<number>();
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });
  useEffect(() => {
    if (window.innerWidth > 1240) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
    return () => {
      setIsMobile(true);
    };
  }, [windowWidth]);

  return [isMobile];
};

export default useBreakpoint;
