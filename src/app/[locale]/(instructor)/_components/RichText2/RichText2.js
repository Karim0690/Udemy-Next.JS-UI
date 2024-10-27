"use client";
import React, { useState } from "react";
import Tiptap from "./Tiptap";

const RichText2 = ({ content, onChange }) => {
  const maxChars = 1000;

  const handleContentChange = (newContent) => {
    if (onChange) {
      onChange(newContent); // Call onChange only if it's passed as a prop
    }
  };

  return (
    <>
      <Tiptap
        content={content}
        onChange={handleContentChange}
        maxChars={maxChars}
      />
    </>
  );
};

export default RichText2;
