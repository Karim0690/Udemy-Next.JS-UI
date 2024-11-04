import axios from "axios";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const NewLectureForm = ({
  sectionIndex,
  sectionId,
  setLectureFormVisible,
  handleAddItem,
}) => {
  const [newLecture, setNewLecture] = useState({
    title: "",
    title_ar: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleLectureChange = (e) => {
    setNewLecture({ ...newLecture, [e.target.name]: e.target.value });
  };

  const addNewLecture = async () => {
    try {
      let response = await axios.post(
        `http://127.0.0.1:3001/course-sections/${sectionId}/lecture`,
        newLecture
      );
      if (response.data.message === "success") {
        handleAddItem();
      }
    } catch (error) {
      setErrorMessage("Failed to add lecture. Please try again.");
    }
  };

  const validateAndAddLecture = async () => {
    if (newLecture.title.trim().length === 0) {
      setErrorMessage("This field may not be blank.");
      return;
    }
    if (newLecture.title.trim().length < 3) {
      setErrorMessage("Title must be at least 3 characters long.");
      return;
    }

    setErrorMessage(""); // Clear error message if valid

    // Attempt to add the lecture and wait for the response
    await addNewLecture();

    // Reset the form fields
    setNewLecture({ title: "" });
    setLectureFormVisible(null); // Close the form after adding
  };
  const t = useTranslations("Curriculum");
  const { locale } = useParams();

  return (
    <div
      className={`flex p-4 border border-black ${
        locale === "en" ? "mr-2" : "ml-2"
      }  bg-white`}
    >
      <p>{t("new-lecture")}</p>
      <div className={`flex-1 ${locale === "en" ? "ml-3" : "mr-3"} `}>
        <div className="relative">
          <input
            type="text"
            placeholder={t("enter-title")}
            name="title"
            value={newLecture.title}
            onChange={handleLectureChange}
            maxLength={80}
            className={`border pl-4 pr-8 py-1 w-full outline-none ${
              errorMessage ? "border-2 border-orange-300" : "border-black"
            }`}
          />
          <span
            className={`text-gray-500 absolute  ${
              locale === "en" ? "right-3" : "left-3"
            } top-1`}
          >
            {80 - newLecture.title.length}
          </span>
        </div>
        {errorMessage && (
          <p className="text-red-900 text-xs mt-2">{errorMessage}</p>
        )}
        <div className="relative my-2">
          <input
            type="text"
            placeholder={t("enter-title")}
            name="title_ar"
            value={newLecture.title_ar}
            onChange={handleLectureChange}
            maxLength={80}
            className={`border pl-4 pr-8 py-1 w-full outline-none ${
              errorMessage ? "border-2 border-orange-300" : "border-black"
            }`}
          />
          <span
            className={`text-gray-500 absolute  ${
              locale === "en" ? "right-3" : "left-3"
            } top-1`}
          >
            {80 - newLecture.title_ar.length}
          </span>
        </div>
        {errorMessage && (
          <p className="text-red-900 text-xs mt-2">{errorMessage}</p>
        )}
        <div className="flex justify-end flex-1 mt-10">
          <button
            onClick={() => setLectureFormVisible(null)}
            className="font-medium text-black px-3 py-1"
          >
            {t("cancle")}
          </button>
          <button
            onClick={validateAndAddLecture}
            className="bg-black font-medium text-white px-3 py-1"
          >
            {t("add-lecture")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewLectureForm;
