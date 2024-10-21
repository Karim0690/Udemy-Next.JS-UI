"use client";
import React, { useState } from "react";
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io"; // No outline icons

const CourseCommentReview = ({ commentCount = 1 }) => {
    // Use array to track the user's reaction (like, dislike, or none)
    // -1 means neither is selected, 0 means dislike is selected, 1 means like is selected
    const [reactions, setReactions] = useState(Array(commentCount).fill(-1));

    // Toggle like for a specific comment by index
    const handleLike = (index) => {
        const updatedReactions = [...reactions];
        // If already liked, reset to no reaction (-1), otherwise set to liked (1)
        updatedReactions[index] = reactions[index] === 1 ? -1 : 1;
        setReactions(updatedReactions);
    };

    // Toggle dislike for a specific comment by index
    const handleDislike = (index) => {
        const updatedReactions = [...reactions];
        // If already disliked, reset to no reaction (-1), otherwise set to disliked (0)
        updatedReactions[index] = reactions[index] === 0 ? -1 : 0;
        setReactions(updatedReactions);
    };

    return (
        <>
            {/* Dynamically render comments with like/dislike functionality */}
            {Array(commentCount)
                .fill(0)
                .map((_, index) => (
                    <div key={index} className="flex items-center space-x-4 mt-2 text-gray-500">
                        <span>Helpful?</span>
                        <button
                            onClick={() => handleLike(index)}
                            className="flex items-center space-x-1"
                        >
                            {/* If liked, show green, else show gray */}
                            <IoMdThumbsUp size={20} className={reactions[index] === 1 ? "text-slate-800" : "text-gray-400"} />
                        </button>
                        <button
                            onClick={() => handleDislike(index)}
                            className="flex items-center space-x-1"
                        >
                            {/* If disliked, show red, else show gray */}
                            <IoMdThumbsDown size={20} className={reactions[index] === 0 ? "text-slate-800" : "text-gray-400"} />
                        </button>
                    </div>
                ))}
        </>
    );
};

export default CourseCommentReview;
