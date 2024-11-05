import React from "react";
import { CiTrophy } from "react-icons/ci"; // Ensure you have react-icons installed

const RadialProgress = ({ percentage }) => {
  const radius = 17.5; // Adjusted radius to maintain a 35px diameter
  const normalizedRadius = radius - 5; // Adjusting for stroke width
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg
        width={radius * 2}
        height={radius * 2}
        className="transform rotate-90"
      >
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth={5}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#4f46e5" // Customize the progress color
          fill="transparent"
          strokeWidth={5}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
        />
      </svg>

      {percentage === 100 ? (
        <CiTrophy className="absolute text-voilet-500" size={18} />
      ) : (
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          fill="#000"
          fontSize="8px"
          dy=".3em"
        >
          {" "}
          {/* Adjusted font size for better fit */}
          {percentage}%
        </text>
      )}
    </div>
  );
};

export default RadialProgress;
