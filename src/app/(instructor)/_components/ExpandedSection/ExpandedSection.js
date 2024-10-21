import axios from "axios";
import React, { useState } from "react";

const MAX_TITLE_LENGTH = 80;
const MAX_OBJECTIVE_LENGTH = 200;

const ExpandedSection = ({ courseId, formVisibility, onAddSection }) => {
  const [section, setSection] = useState({
    title: "",
    objective: "",
  });
  const [titleError, setTitleError] = useState(false);

  const addSection = async () => {
    try {
      await axios.post(
        `http://127.0.0.1:3001/course-sections/${courseId}`,
        section
      );
      return true;
    } catch (error) {
      console.error("Failed to add section:", error);
      return false;
    }
  };

  const handleAddSection = async () => {
    if (section.title.trim() === "") {
      setTitleError(true);
      return;
    }

    setTitleError(false);
    const success = await addSection();
    if (success) {
      formVisibility(false);
      onAddSection();
    }
  };

  return (
    <div className="px-2 py-4 bg-white border border-gray-600">
      <div className="mb-1 flex items-center gap-2">
        <div>
          <p className="text-gray-700 font-bold mb-2">New section:</p>
        </div>
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Enter a Title"
            className={`appearance-none block w-full text-gray-700 border ${
              titleError ? "border-2 border-orange-300" : "border-black"
            } p-2 mb-1 leading-tight focus:outline-none focus:bg-white pr-12`}
            value={section.title}
            onChange={(e) => setSection({ ...section, title: e.target.value })}
            maxLength={MAX_TITLE_LENGTH}
          />
          <span className={`absolute right-2 bottom-3 pr-1 text-gray-500`}>
            {MAX_TITLE_LENGTH - section.title.length}
          </span>
        </div>
      </div>
      {titleError && (
        <div className="text-red-900 text-xs mt-1 mb-3 ml-[105px]">
          This field may not be blank.
        </div>
      )}
      <div className="ml-[105px] mb-4">
        <label className="block text-sm text-gray-700 font-bold mb-2">
          What will students be able to do at the end of this section?
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter a Learning Objective"
            className="appearance-none block w-full text-gray-700 border border-black p-2 mb-3 leading-tight focus:outline-none focus:bg-white pr-12"
            value={section.objective}
            onChange={(e) =>
              setSection({ ...section, objective: e.target.value })
            }
            maxLength={MAX_OBJECTIVE_LENGTH}
          />
          <p className="absolute right-2 bottom-2 pr-1 text-gray-500">
            {MAX_OBJECTIVE_LENGTH - section.objective.length}
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button
          className="px-4 py-2 border border-gray-800"
          onClick={() => {
            formVisibility(false);
          }}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-black text-white"
          onClick={handleAddSection}
        >
          Add Section
        </button>
      </div>
    </div>
  );
};

export default ExpandedSection;
