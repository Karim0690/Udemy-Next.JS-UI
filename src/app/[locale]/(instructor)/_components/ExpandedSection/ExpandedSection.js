import axios from "axios";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const MAX_TITLE_LENGTH = 80;
const MAX_OBJECTIVE_LENGTH = 200;

const ExpandedSection = ({ courseId, formVisibility, onAddSection }) => {
  const [section, setSection] = useState({
    title: "",
    title_Ar: "",
    objective: "",
    objective_Ar: "",
  });
  const [titleError, setTitleError] = useState(false);
  const [titleError_Ar, setTitleError_Ar] = useState(false);

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
    }else if(section.title_Ar.trim() ===""){
      setTitleError_Ar(true)
    }

    setTitleError(false);
    setTitleError_Ar(false);
    const success = await addSection();
    if (success) {
      formVisibility(false);
      onAddSection();
    }
  };

  const t = useTranslations("expanded-section");
  const { locale } = useParams();

  return (
    <div className="px-2 py-4 bg-white border border-gray-600">
      <div className="mb-1 flex items-center gap-2">
        <div>
          <p className="text-gray-700 font-bold mb-2">{t("new-section")}</p>
        </div>
        <div className="relative flex-1">
          <input
            type="text"
            placeholder={t("enter-title")}
            className={`appearance-none block w-full text-gray-700 border ${
              titleError ? "border-2 border-orange-300" : "border-black"
            } p-2 mb-1 leading-tight focus:outline-none focus:bg-white ${
              locale === "en" ? "pr-12" : "pl-12"
            } `}
            value={section.title}
            onChange={(e) => setSection({ ...section, title: e.target.value })}
            maxLength={MAX_TITLE_LENGTH}
          />
          <span
            className={`absolute ${
              locale === "en" ? "right-2" : "left-2"
            }  bottom-3 pr-1 text-gray-500`}
          >
            {MAX_TITLE_LENGTH - section.title.length}
          </span>
        </div>
      </div>
      {titleError && (
        <div className="text-red-900 text-xs mt-1 mb-3 ml-[105px]">
          {t("blank")}
        </div>
      )}
      {/* Ar title */}
      <div className="mb-1 flex items-center gap-2">
        <div>
          <p className="text-gray-700 font-bold mb-2">{t("new-section")}</p>
        </div>
        <div className="relative flex-1">
          <input
            type="text"
            placeholder={t("enter-title_ar")}
            className={`appearance-none block w-full text-gray-700 border ${
              titleError ? "border-2 border-orange-300" : "border-black"
            } p-2 mb-1 leading-tight focus:outline-none focus:bg-white ${
              locale === "en" ? "pr-12" : "pl-12"
            } `}
            value={section.title_Ar}
            onChange={(e) => setSection({ ...section, title_Ar: e.target.value })}
            maxLength={MAX_TITLE_LENGTH}
          />
          <span
            className={`absolute ${
              locale === "en" ? "right-2" : "left-2"
            }  bottom-3 pr-1 text-gray-500`}
          >
            {MAX_TITLE_LENGTH - section.title_Ar.length}
          </span>
        </div>
      </div>
      {titleError_Ar && (
        <div className="text-red-900 text-xs mt-1 mb-3 ml-[105px]">
          {t("blank")}
        </div>
      )}
      {/* en objectibe */}
      <div className="ml-[105px] mb-4">
        <label className="block text-sm text-gray-700 font-bold mb-2">
          {t("students-able")}
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder={t("learning-objectives")}
            className={`appearance-none block w-full text-gray-700 border border-black p-2 mb-3 leading-tight focus:outline-none focus:bg-white ${
              locale === "en" ? "pr-12" : "pl-12"
            }`}
            value={section.objective}
            onChange={(e) =>
              setSection({ ...section, objective: e.target.value })
            }
            maxLength={MAX_OBJECTIVE_LENGTH}
          />
          <p
            className={`absolute ${
              locale === "en" ? "right-2" : "left-2"
            } bottom-2 pr-1 text-gray-500`}
          >
            {MAX_OBJECTIVE_LENGTH - section.objective.length}
          </p>
        </div>
      </div>
      {/* Ar objective */}
      <div className="ml-[105px] mb-4">
        <label className="block text-sm text-gray-700 font-bold mb-2">
          {t("students-able")}
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder={t("learning-objectives_ar")}
            className={`appearance-none block w-full text-gray-700 border border-black p-2 mb-3 leading-tight focus:outline-none focus:bg-white ${
              locale === "en" ? "pr-12" : "pl-12"
            }`}
            value={section.objective_Ar}
            onChange={(e) =>
              setSection({ ...section, objective_Ar: e.target.value })
            }
            maxLength={MAX_OBJECTIVE_LENGTH}
          />
          <p
            className={`absolute ${
              locale === "en" ? "right-2" : "left-2"
            } bottom-2 pr-1 text-gray-500`}
          >
            {MAX_OBJECTIVE_LENGTH - section.objective_Ar.length}
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
          {t("cancle")}
        </button>
        <button
          className="px-4 py-2 bg-black text-white"
          onClick={handleAddSection}
        >
          {t("add-section")}
        </button>
      </div>
    </div>
  );
};

export default ExpandedSection;
