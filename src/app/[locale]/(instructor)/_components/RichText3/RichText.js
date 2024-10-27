"use client";
import React from "react";
import Tiptap from "./Tiptap";

const RichText3 = ({ content, onChange }) => {
  const handleContentChange = (newContent) => {
    if (onChange) {
      onChange(newContent); // Call onChange only if it's passed as a prop
    }
  };

  return (
    <Tiptap
      content={content}
      onChange={handleContentChange} // Pass handleContentChange to Tiptap
    />
  );
};

export default RichText3;
