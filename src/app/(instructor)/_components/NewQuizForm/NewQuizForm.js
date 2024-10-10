"use client"
import React, { useState } from "react";
import RichText3 from "../../_components/RichText3/RichText";

const NewQuizForm = ({ sectionIndex, handleAddItem, setQuizFormVisible }) => {
  const [newQuizTitle, setNewQuizTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddQuiz = () => {
    if (newQuizTitle.length === 0) {
      setErrorMessage("This field may not be blank.");
      return;
    }
    if (newQuizTitle.length < 3) {
      setErrorMessage("Titles must have minimum 3 characters.");
      return;
    }
    handleAddItem(sectionIndex, "quiz");
    setQuizFormVisible(null);
  };

  return (
    <div className="flex p-4 border border-black mr-2 bg-white">
      <p>New Quiz:</p>
      <div className="flex-1 ml-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter title"
            value={newQuizTitle}
            onChange={(e) => setNewQuizTitle(e.target.value)}
            maxLength={80}
            className={`border border-black pl-4 pr-8 py-1 w-full outline-none ${
              errorMessage ? "border-2 border-orange-300" : "border-black"
            }`}
          />
          <span className="text-gray-500 absolute right-3 top-1">
            {80 - newQuizTitle.length}
          </span>
        </div>
        {newQuizTitle.length < 3 && (
          <p className="text-red-900 text-xs mt-2">{errorMessage}</p>
        )}
        <RichText3 />
        <div className="flex justify-end flex-1 mt-10">
          <button
            onClick={() => setQuizFormVisible(null)}
            className="font-medium text-black px-3 py-1"
          >
            Cancel
          </button>
          <button
            onClick={handleAddQuiz}
            className="bg-black font-medium text-white px-3 py-1"
          >
            Add Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewQuizForm;
