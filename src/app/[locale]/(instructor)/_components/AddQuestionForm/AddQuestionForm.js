"use client";

import RichText4 from "../RichText4/RichText";
import { Radio } from "@material-tailwind/react";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegQuestionCircle, FaTrash } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoMdClose } from "react-icons/io";

const AddQuestionForm = ({
  addQuestions,
  setAddQuestions,
  setAddQuestion,
  id,
  SetQuestionId,
  questionId,
  sections,
  handelSections,
}) => {
  const [question, setQuestion] = useState({
    question: "",
    answers: Array(4).fill({ answer: "", explanation: "", isCorrect: false }),
    relatedLecture: "0",
  });

  const handelGetQuestion = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/questions/${questionId}`
      );
      if (response.data.message === "success") setQuestion(response.data.data);
    } catch (error) {
      console.error("Error getting question:", error);
    }
  };

  let lectures = sections.flatMap(
    (section) =>
      section.items
        .filter((item) => item.type === "Lecture" && item.item.resource) // Filter for type "Lecture" with resource
        .map((item) => item.item) // Return the item
  );

  useEffect(() => {
    if (questionId) {
      handelGetQuestion();
    }
  }, [questionId]);

  const handelAddQuestion = async () => {
    // Make sure to validate the answers before sending
    const isAnyAnswerCorrect = question.answers.some(
      (answer) => answer.isCorrect
    );

    if (!isAnyAnswerCorrect) {
      alert("Please mark at least one answer as correct.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/questions/${id}`,
        question
      );
      console.log(response.data);
      if (response.data.message === "success") {
        handelSections();
      }
      // Optionally clear the form or give feedback here
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  // Function to handle removing an answer
  const removeAnswer = (indexToRemove) => {
    if (question.answers.length > 1) {
      const updatedAnswers = question.answers.filter(
        (_, index) => index !== indexToRemove
      );
      setQuestion({ ...question, answers: updatedAnswers });
    }
  };

  // Function to handle selecting the correct answer
  const handleSelectCorrectAnswer = (index) => {
    const updatedAnswers = question.answers.map((answer, i) => ({
      ...answer,
      isCorrect: i === index, // Set only the selected answer as correct
    }));
    setQuestion({ ...question, answers: updatedAnswers });
  };

  // Function to handle input changes for answer and explanation
  const handleInputChange = (index, field, value) => {
    const updatedAnswers = question.answers.map((answer, i) =>
      i === index ? { ...answer, [field]: value } : answer
    );
    setQuestion({ ...question, answers: updatedAnswers });
  };

  const handleSave = () => {
    handelAddQuestion();
    setAddQuestion(null);
    SetQuestionId(null);
  };

  const handelUpdata = async () => {
    const isAnyAnswerCorrect = question.answers.some(
      (answer) => answer.isCorrect
    );

    if (!isAnyAnswerCorrect) {
      alert("Please mark at least one answer as correct.");
      return;
    }

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/questions/${questionId}`,
        question
      );
      console.log(response.data);
      // Optionally clear the form or give feedback here
    } catch (error) {
      console.error("Error adding question:", error);
    }
    setAddQuestion(null);
    SetQuestionId(null);
  };

  const handleSelectLecture = (e) => {
    setQuestion({ ...question, relatedLecture: e.target.value });
  };

  const { locale } = useParams();
  const t = useTranslations("Curriculum");
  return (
    <div className="relative">
      <div
        className={`absolute ${
          locale === "en" ? "right-14" : "left-14"
        } -top-[28px] text-sm bg-white flex items-center gap-2 border border-black border-b-0 p-1 cursor-default`}
      >
        <p className="font-bold">
          {addQuestions ? t("select-question-type") : t("add-multiple")}
        </p>
        <IoMdClose
          className="text-lg cursor-pointer"
          onClick={() => {
            {
              setAddQuestion(null);
              setAddQuestions(true);
            }
          }}
        />
      </div>
      {addQuestions ? (
        <div
          className={`bg-white text-center gap-2 border border-black border-t-0 p-2 ${
            locale === "en" ? "ml-20 mr-2" : "mr-20 ml-2"
          }`}
        >
          <p>
            {t("add-quiz-1")}

            <span className="text-[#5022c3] cursor-pointer underline underline-offset-4 hover:text-[#3b198f]">
              {t("add-quiz-2")}
            </span>
          </p>
          <button
            className="relative flex flex-col items-center gap-2 bg-gray-50 border border-gray-300 mx-auto mt-5 w-fit font-medium hover:bg-gray-900 group overflow-hidden"
            onClick={() => setAddQuestions(false)}
          >
            <FaRegQuestionCircle className="text-3xl mt-2 text-gray-200 transition-all duration-300 transform group-hover:translate-y-[-100%] group-hover:opacity-0" />
            <FaRegQuestionCircle className="text-3xl absolute top-full mt-2 text-white transition-all duration-300 transform group-hover:translate-y-[-230%]" />
            <span className="text-gray-800 text-[10px] w-full relative z-10 bg-gray-200 py-1 px-2 group-hover:bg-gray-950 group-hover:text-white">
              {t("multiple")}
            </span>
          </button>
        </div>
      ) : (
        <div
          className={`bg-white border border-black border-t-0 p-2 ${
            locale === "en" ? "ml-20 mr-2" : "mr-20 ml-2"
          } `}
        >
          <div>
            <div>
              <p className="font-bold text-sm pb-3"> {t("question")}</p>
              <RichText4
                content={question?.question}
                onChange={(newContent) =>
                  setQuestion((prev) => ({ ...prev, question: newContent }))
                }
              />
            </div>
            <div className="mt-2">
              <p className="font-bold text-sm pb-3"> {t("answers")}</p>
              <div className="flex flex-col gap-2">
                {question.answers.map((answerObj, index) => (
                  <div key={index} className="flex items-start radio group">
                    <Radio
                      name="type"
                      ripple={false}
                      className="border-2 border-black"
                      icon={<GoDotFill className="text-xl" />}
                      checked={answerObj.isCorrect}
                      onChange={() => handleSelectCorrectAnswer(index)}
                    />
                    <div className="flex-1">
                      <div className="border border-black">
                        <input
                          placeholder={t("add-answer")}
                          className="px-4 pt-2 pb-8 w-full outline-none"
                          value={answerObj.answer}
                          onChange={(e) =>
                            handleInputChange(index, "answer", e.target.value)
                          }
                        />
                      </div>
                      <div className="border border-black ml-10 my-2">
                        <input
                          placeholder={t("add-explain")}
                          className="p-3 w-full outline-none"
                          value={answerObj.explanation}
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "explanation",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="w-14 flex justify-end px-2">
                      <FaTrash
                        className="text-sm hidden group-hover:block cursor-pointer"
                        onClick={() => removeAnswer(index)}
                      />
                    </div>
                  </div>
                ))}
                <p className="text-xs text-gray-500">{t("add-quiz-3")}</p>
              </div>
            </div>
          </div>

          {/* Related Lecture Section */}
          <div className="my-4">
            <p className="font-bold text-sm"> {t("related-lecture")}</p>
            <div className="flex-1">
              <select
                name="lecture"
                className="w-full outline-none border border-black p-3 my-3"
                value={question.relatedLecture}
                onChange={handleSelectLecture}
              >
                <option value="0"> {t("select-one")}</option>
                {lectures &&
                  lectures.map((lecture) => (
                    <option key={lecture._id} value={lecture._id}>
                      {locale === "en" ? lecture.title : lecture.title_ar}
                    </option>
                  ))}
              </select>
            </div>
            <p className="text-xs text-gray-500">{t("select-related")}</p>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              className="bg-gray-800 font-bold text-white px-6 py-2"
              onClick={questionId ? handelUpdata : handleSave}
            >
              {t("save")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddQuestionForm;
