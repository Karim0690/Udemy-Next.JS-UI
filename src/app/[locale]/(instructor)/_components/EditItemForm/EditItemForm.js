import RichText3 from "../RichText3/RichText";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const EditItemForm = ({
  item,
  sectionIndex,
  itemIndex,
  setEditLectureIndex,
  getItemNumber,
  handelSections,
}) => {
  const [title, setTitle] = useState(item.item.title);
  const [title_ar, setTitle_ar] = useState(item.item.title_ar);
  const [description, setDescription] = useState(item.item.description);
  const [description_ar, setDescription_ar] = useState(
    item.item.description_ar
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDescriptionChange = (newContent) => {
    setDescription(newContent);
  };
  const handleDescriptionChange_ar = (newContent) => {
    setDescription_ar(newContent);
  };

  const handleUpdateItem = async () => {
    setLoading(true);
    setError(null);

    try {
      if (item.type === "Lecture") {
        await axios.put(
          `${process.env.NEXT_PUBLIC_LOCAL_API}/lectures/update/${item.item._id}`,
          { title: title, title_ar: title_ar }
        );
      } else if (item.type === "Quiz") {
        await axios.put(
          `${process.env.NEXT_PUBLIC_LOCAL_API}/quizzes/${item.item._id}`,
          {
            title: title,
            title_ar: title_ar,
            description: description,
            description_ar: description_ar,
          }
        );
      }

      handelSections();
      setEditLectureIndex(null);
    } catch (err) {
      setError("Failed to update the item. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const { locale } = useParams();
  const t = useTranslations("Curriculum");

  return (
    <div
      className={`my-4 ${
        locale === "en" ? "ml-20 mr-2" : "mr-20 ml-2"
      } p-3 flex items-center border border-gray-600 bg-white group cursor-move`}
    >
      <div className="flex items-start flex-1 gap-2">
        <div className="flex items-center gap-2">
          <IoIosCheckmarkCircle className="text-gray-800" />
          <h3 className="font-medium">
            {item.type === "Lecture" ? t("lecture") : t("quiz")}
            {getItemNumber(sectionIndex, itemIndex)}:
          </h3>
        </div>
        <div className="flex-1">
          {/* Input for editing title */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-black pl-2 px-4 py-1 w-full"
            aria-label="Item Title"
          />
          <input
            type="text"
            value={title_ar}
            onChange={(e) => setTitle_ar(e.target.value)}
            className="border border-black pl-2 px-4 py-1 w-full my-2"
            aria-label="Item Title"
          />

          {/* Conditional rendering for quiz content */}
          {item.type === "Quiz" && (
            <>
              <div className="mt-3">
                <RichText3
                  content={description}
                  onChange={handleDescriptionChange}
                  aria-label="Quiz Description"
                />
              </div>
              <div className="mt-3">
                <RichText3
                  content={description_ar}
                  onChange={handleDescriptionChange_ar}
                  aria-label="Quiz Description"
                />
              </div>
            </>
          )}

          {/* Error Message */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Save and Cancel buttons */}
          <div className="flex gap-4 mt-4 justify-end">
            <button
              className="font-bold text-black"
              onClick={() => {
                setEditLectureIndex(null); // Cancel editing
              }}
              aria-label="Cancel Editing"
            >
              {t("cancle")}
            </button>

            {/* Save button for either lecture or quiz */}
            <button
              className={`font-bold text-white px-4 py-1 ${
                loading ? "bg-gray-600" : "bg-gray-900"
              }`}
              onClick={handleUpdateItem}
              disabled={loading}
              aria-label={`Save ${item.type === "Quiz" ? "Quiz" : "Lecture"}`}
            >
              {loading
                ? "Saving..."
                : item.type === "Quiz"
                ? t("save-quiz")
                : t("save-lecture")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItemForm;
