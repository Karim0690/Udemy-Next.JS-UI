"use client";

import Tiptap from "./Tiptap";
import React from "react";

const RichText3 = ({ content, onChange, placeholder }) => {
  const handleContentChange = (newContent) => {
    if (onChange) {
      onChange(newContent); // Call onChange only if it's passed as a prop
    }
  };

  return (
    <Tiptap
      content={content}
      onChange={handleContentChange} // Pass handleContentChange to Tiptap
      placeholder={placeholder}
    />
  );
};

export default RichText3;
