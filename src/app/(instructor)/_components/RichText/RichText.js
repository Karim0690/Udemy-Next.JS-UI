"use client";
import React from "react";
import Tiptap from "./Tiptap";

const RichText = ({ content, onChange, placeholder }) => {
  const handleContentChange = (newContent) => {
    if (onChange) {
      onChange(newContent); // Call onChange only if it's passed as a prop
    }
  };

  return (
    <>
      <Tiptap
        placeholder={placeholder} // Add a placeholder text to the RichText editor
        content={content}
        onChange={handleContentChange} // Pass handleContentChange to Tiptap
      />
    </>
  );
};

export default RichText;
