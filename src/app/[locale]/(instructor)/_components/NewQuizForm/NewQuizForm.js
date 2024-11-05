import RichText3 from "../RichText3/RichText";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const NewQuizForm = ({
  sectionId,
  sectionIndex,
  setQuizFormVisible,
  handleAddItem,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [newQuiz, setNewQuiz] = useState({
    title: "",
    title_ar: "",
    description: "",
    description_ar: "",
  });

  const handleQuizChange = (e) => {
    const { name, value } = e.target;
    setNewQuiz((prevQuiz) => ({ ...prevQuiz, [name]: value }));
  };

  const handleAddQuiz = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:3001/course-sections/${sectionId}/quiz`,
        newQuiz
      );
      if(response.data.message==="success") {
        handleAddItem();
      }
    } catch (error) {
      console.error("Error adding quiz:", error);
      setErrorMessage("Failed to add the quiz. Please try again.");
    }
  };
  const validateAndAddQuiz = () => {
    // Input validation
    if (newQuiz.title.trim().length === 0) {
      setErrorMessage("This field may not be blank.");
      return;
    }
    if (newQuiz.title.trim().length < 3) {
      setErrorMessage("Title must be at least 3 characters long.");
      return;
    }
    setErrorMessage(""); // Clear error message if valid

    // Add the quiz

    // Reset fields and close the form
    setNewQuiz({ title: "", description: "" });
    setQuizFormVisible(null);
    handleAddQuiz();
  };

  const { locale } = useParams();
  const t = useTranslations("Curriculum");

  return (
    <div
      className={`flex p-4 border border-black ${
        locale === "en" ? "mr-2" : "ml-2"
      } bg-white`}
    >
      <label htmlFor="quiz-title" className="font-medium">
        {t("new-quiz")}
      </label>
      <div className={`flex-1 ${locale === "en" ? "ml-3" : "mr-3"}`}>
        <div className="relative">
          <input
            id="quiz-title"
            name="title"
            type="text"
            placeholder={t("enter-title")}
            value={newQuiz.title}
            onChange={handleQuizChange}
            maxLength={80}
            className={`border border-black ${
              locale === "en" ? "pl-4 pr-8" : "pr-4 pl-8"
            }  py-1 w-full outline-none ${
              errorMessage ? "border-2 border-orange-300" : "border-black"
            }`}
          />
          <span
            className={`text-gray-500 absolute ${
              locale === "en" ? "right-3" : "left-3"
            } top-1`}
          >
            {80 - newQuiz.title.length}
          </span>
        </div>
        {errorMessage && (
          <p className="text-red-900 text-xs mt-2">{errorMessage}</p>
        )}
        <div className="relative">
          <input
            id="quiz-title"
            name="title_ar"
            type="text"
            placeholder={t("enter-title_ar")}
            value={newQuiz.title_ar}
            onChange={handleQuizChange}
            maxLength={80}
            className={`border border-black my-2 ${
              locale === "en" ? "pl-4 pr-8" : "pr-4 pl-8"
            }  py-1 w-full outline-none ${
              errorMessage ? "border-2 border-orange-300" : "border-black"
            }`}
          />
          <span
            className={`text-gray-500 absolute ${
              locale === "en" ? "right-3" : "left-3"
            } top-3`}
          >
            {80 - newQuiz.title.length}
          </span>
        </div>
        {errorMessage && (
          <p className="text-red-900 text-xs mt-2">{errorMessage}</p>
        )}
        <div className="mt-3">
          <RichText3
            content={newQuiz.description}
            onChange={(newContent) =>
              setNewQuiz((prev) => ({ ...prev, description: newContent }))
            }
            placeholder={t("quiz-description")}
          />
        </div>
        <div className="mt-3">
          <RichText3
            content={newQuiz.description_ar}
            onChange={(newContent) =>
              setNewQuiz((prev) => ({ ...prev, description_ar: newContent }))
            }
            placeholder={t("quiz-description_ar")}
          />
        </div>
        <div className="flex justify-end flex-1 mt-10">
          <button
            onClick={() => setQuizFormVisible(null)}
            className="font-medium text-black px-3 py-1"
          >
            {t("cancle")}
          </button>
          <button
            onClick={validateAndAddQuiz}
            className="bg-black font-medium text-white px-3 py-1"
          >
            {t("add-quiz")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewQuizForm;
