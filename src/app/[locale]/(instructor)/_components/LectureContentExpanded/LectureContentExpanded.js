"use client";

import RichText from "../RichText/RichText";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { FaPen, FaPlus } from "react-icons/fa";

const LectureContentExpanded = ({
  item,
  setLectureContent,
  setAddVideo,
  sectionIndex,
  itemIndex,
  setAddContent,
  addContent,
}) => {
  const [description, setDescription] = useState(false);
  const [descriptionInput, setDescriptionInput] = useState(
    item.description || ""
  );
  const [descriptionInput_ar, setDescriptionInput_ar] = useState(
    item.description_ar || ""
  );
  const minutes = Math.floor(item.duration / 60);
  const remainingSeconds = item.duration % 60;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    Math.round(remainingSeconds)
  ).padStart(2, "0")}`;
  const handelAddDescription = async () => {
    try {
      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/lectures/${item._id}`,
        {
          description: descriptionInput,
          description_ar: descriptionInput_ar,
        }
      );
      data.message === "success" && setDescription(false);
    } catch (e) {
      console.error("Failed to add description:", e);
    }
  };

  const { locale } = useParams();
  const t = useTranslations("Curriculum");

  return (
    <>
      <div
        className={`bg-white gap-2 border border-black border-t-0 p-2 ${
          locale === "en" ? "ml-20 mr-2" : "mr-20 ml-2"
        }`}
      >
        {item.resource && (
          <div className="flex flex-1 border-b pb-6 gap-4">
            <div className="w-32 py-1 h-auto">
              <video>
                <source src={item.resource} type="video/mp4" />
              </video>
            </div>
            <div className=" text-gray-800">
              <h3 className="font-bold">{item.resourceTitle}</h3>
              <h3 className="py-1 text-lg">{formattedTime}</h3>
              <button
                className="text-violet-700 hover:text-violet-800 flex gap-2 items-center"
                onClick={() => {
                  setLectureContent(null);
                  setAddVideo(false);
                  setAddContent(`${sectionIndex}-${itemIndex}`);
                }}
              >
                <FaPen className="text-sm" />
                {t("edit-item")}
              </button>
            </div>
          </div>
        )}
        <button
          className={`flex items-center my-2 gap-1 border text-sm border-gray-800 py-[3px] px-2 font-medium hover:bg-gray-100 ${
            description && "hidden"
          }`}
          onClick={() => {
            setDescription(true);
          }}
        >
          <FaPlus className="text-sm" /> {t("description")}
        </button>

        {description && (
          <>
            {" "}
            <div className="pb-4 my-2 text-gray-800">
              <h3 className="font-bold text-sm my-2">
                {t("lecture-description")}
              </h3>
              <RichText
                placeholder={t("add-description")}
                content={descriptionInput}
                onChange={setDescriptionInput}
              />
            </div>
            {/* Ar Description */}
            <div className="border-b pb-4 my-2 text-gray-800">
              <h3 className="font-bold text-sm my-2">
                {t("lecture-description_ar")}
              </h3>
              <RichText
                placeholder={t("add-description")}
                content={descriptionInput_ar}
                onChange={setDescriptionInput_ar}
              />
              <div className="flex flex-1 my-2  items-center justify-end">
                <button
                  className="py-1 px-6 font-bold"
                  onClick={() => {
                    setDescription(false);
                  }}
                >
                  {t("cancle")}
                </button>
                <button
                  className="py-1 px-6 font-bold bg-black text-white"
                  onClick={() => {
                    handelAddDescription();
                  }}
                >
                  {t("save")}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default LectureContentExpanded;
