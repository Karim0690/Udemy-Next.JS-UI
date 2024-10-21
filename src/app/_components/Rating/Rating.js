"use client"
import { useState } from 'react';

const Rating = ({ totalStars = 5, ratingValue = 4.8, readOnly = false }) => {
  const [rating, setRating] = useState(ratingValue);

  // Handle click only if not read-only
  const handleRating = (rate) => {
    if (!readOnly) {
      setRating(rate);
    }
  };

  return (
    <div className="flex space-x-1 mt-1">
      {Array.from({ length: totalStars }, (_, index) => (
        <Star 
          key={index}
          filled={index + 1 <= Math.floor(rating)} // Full star
          half={index + 1 > Math.floor(rating) && index < rating} // Half star
          onClick={() => handleRating(index + 1)}
          readOnly={readOnly}
        />
      ))}
    </div>
  );
};

// Star Component with filled, half, and read-only props
const Star = ({ filled, half, onClick, readOnly }) => {
  return (
    <svg
      onClick={!readOnly ? onClick : undefined}
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? "#B4690E" : half ? "url(#halfGradient)" : "none"}
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={`w-4 h-4 ${!readOnly ? "cursor-pointer" : ""} text-[#B4690E]`} // Smaller size
    >
      {/* Half star gradient for fractional stars */}
      {half && (
        <defs>
          <linearGradient id="halfGradient">
            <stop offset="50%" stopColor="#B4690E" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
      )}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
  );
};

export default Rating;
