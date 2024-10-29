import axios from "axios";
import React, { useState } from "react";

const NewSectionForm = ({
  sectionIndex,
  sectionId,
  currentSection,
  setEditSectionIndex,
}) => {
  const [section, setSection] = useState({
    title: currentSection.title,
    objective: currentSection.objective,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSection((prevSection) => ({
      ...prevSection,
      [name]: value,
    }));
  };

  const handleUpdateSection = () => {
    axios
      .put(`http://127.0.0.1:3001/course-sections/${sectionId}`, section)
      .then((response) => {
        console.log("Section updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating section:", error);
      });
  };

  return (
    <div className="flex gap-3 border border-black p-4 bg-white m-2 items-start">
      <div className="bold">Section {sectionIndex + 1}:</div>

      <div className="flex-1">
        <input
          type="text"
          name="title"
          value={section.title}
          onChange={handleInputChange}
          className="border border-black pl-2 px-4 py-1 w-full"
        />
        <div className="mt-4">
          <p className="font-bold text-sm">
            What will students be able to do at the end of this section?
          </p>
          <input
            type="text"
            name="objective"
            value={section.objective}
            onChange={handleInputChange}
            className="border border-black pl-2 px-4 py-1 my-2 w-full"
          />
        </div>
        <div className="flex gap-4 justify-end">
          <button
            className="font-bold text-black"
            onClick={() => setEditSectionIndex(null)} // Close the form without saving
          >
            Cancel
          </button>
          <button
            className="bg-gray-900 font-bold text-white px-4 py-1"
            onClick={() => {
              handleUpdateSection(); // Call the API to update the section
              setEditSectionIndex(null); // Close the form after saving
            }}
          >
            Save Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewSectionForm;
