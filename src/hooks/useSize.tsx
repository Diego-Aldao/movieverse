"use client";
import { useEffect, useState } from "react";

const useSize = () => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    //como window es del lado del cliente, para que next.js no de error, hay que llamar el objeto window dentro de un useEffect
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowDimensions;
};

export default useSize;
