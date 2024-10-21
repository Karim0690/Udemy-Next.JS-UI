"use client"
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const HeartButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  const heartStyle = {
    fontSize: '2rem',
    color: isLiked ? '#ff6b6b' : '#ccc',
    transition: 'transform 0.2s ease, color 0.2s ease',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const scaleStyle = {
    transform: isLiked ? 'scale(.9)' : 'scale(.7)',
  };

  return (
    <button
      className="border-2	 border-black  py-2 px-6"
      style={{
        background: 'none',
        outline: 'none',
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
