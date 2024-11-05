"use client";

import Tiptap from "./Tiptap";
import React, { useState } from "react";

const RichText2 = ({ content, onChange, placeholder }) => {
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
        placeholder={placeholder}
      />
    </>
  );
};

export default RichText2;
