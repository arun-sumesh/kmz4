import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = ({ finishLoading }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (finishLoading) finishLoading();
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <div className={`preloader ${visible ? "show" : "hide"}`}>
      <svg width="300" height="200" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00a2ff">
              <animate 
                attributeName="stop-color" 
                values="#00a2ff;#2cd7b3;#1098ab;#00a2ff" 
                dur="3s" 
                repeatCount="indefinite" 
              />
            </stop>
            <stop offset="50%" stopColor="#ffffff">
              <animate 
                attributeName="stop-color" 
                values="#ffffff;#cfd3d8;#00a2ff;#ffffff" 
                dur="3s" 
                repeatCount="indefinite" 
              />
            </stop>
            <stop offset="100%" stopColor="#121212">
              <animate 
                attributeName="stop-color" 
                values="#121212;#00a2ff;#2cd7b3;#121212" 
                dur="3s" 
                repeatCount="indefinite" 
              />
            </stop>
          </linearGradient>
        </defs>
        <text 
          x="50%" 
          y="50%" 
          textAnchor="middle" 
          dominantBaseline="middle" 
          fontSize="60" 
          fontWeight="bold" 
          fill="url(#gradient)"
        >
          KMZ
        </text>
      </svg>
      <div className="loader-circle"></div>
    </div>
  );
};

export default Preloader;
