"use client";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const HeartButton = ({ className }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  const heartStyle = {
    fontSize: "2rem",
    color: isLiked ? "#000000" : "#ccc",
    transition: "transform 0.2s ease, color 0.2s ease",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const scaleStyle = {
    transform: isLiked ? "scale(.7)" : "scale(.7)",
  };

  return (
    <button
      className={`${className} border border-black p-1`}
      style={{
        background: "none",
        outline: "none",
        ...heartStyle,
      }}
      onClick={handleClick}
    >
      {isLiked ? (
        <FaHeart style={{ ...scaleStyle, ...heartStyle }} />
      ) : (
        <FaRegHeart style={{ ...scaleStyle, ...heartStyle }} />
      )}
    </button>
  );
};

export default HeartButton;
