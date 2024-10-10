"use client"
import React, { useState } from "react";
import { FaPlus, FaPen, FaTrash } from "react-icons/fa";

const AddLectureForm = ({ sectionIndex, handleAddItem, setLectureFormVisible }) => {
  const [newLectureTitle, setNewLectureTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddLecture = () => {
    if (newLectureTitle.length === 0) {
      setErrorMessage("This field may not be blank.");
      return;
    }
    if (newLectureTitle.length < 3) {
      setErrorMessage("Titles must have minimum 3 characters.");
      return;
    }
    handleAddItem(sectionIndex, "lecture");
    setLectureFormVisible(null);
  };

  return (
    <div className="flex p-4 border border-black mr-2 bg-white">
      <p>New Lecture:</p>
      <div className="flex-1 ml-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter title"
            value={newLectureTitle}
            onChange={(e) => setNewLectureTitle(e.target.value)}
            maxLength={80}
            className={`border border-black pl-4 pr-8 py-1 w-full outline-none ${
              errorMessage ? "border-2 border-orange-300" : "border-black"
            }`}
          />
          <span className="text-gray-500 absolute right-3 top-1">
            {80 - newLectureTitle.length}
          </span>
        </div>
        {newLectureTitle.length < 3 && (
          <p className="text-red-900 text-xs mt-2">{errorMessage}</p>
        )}
        <div className="flex justify-end flex-1 mt-10">
          <button
            onClick={() => setLectureFormVisible(null)}
            className="font-medium text-black px-3 py-1"
          >
            Cancel
          </button>
          <button
            onClick={handleAddLecture}
            className="bg-black font-medium text-white px-3 py-1"
          >
            Add Lecture
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLectureForm;
