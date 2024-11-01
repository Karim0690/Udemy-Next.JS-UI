import RichText2 from "../../_components/RichText2/RichText2";
import { useTranslations } from "next-intl";
import React from "react";

const CourseMessages = ({ course, setMessages }) => {
  const t = useTranslations("CourseMessages");
  return (
    <>
      <div className="py-9 px-7 lg:px-12 lg:w-[90%]">
        <h2>{t("welcome_message")}</h2>
        <div className="my-4">
          <label className="block text-gray-700 font-bold mb-2">
            {t("welcome")}
          </label>
          <RichText2
            content={course.welcomeMessage || ""}
            onChange={(content) =>
              setMessages((prevData) => ({
                ...prevData,
                welcomeMessage: content,
              }))
            }
          />
        </div>
        <div className="my-4">
          <label className="block text-gray-700 font-bold mb-2">
            {t("congratulations_message")}
          </label>
          <RichText2
            content={course.congratesMessage || ""}
            onChange={(content) =>
              setMessages((prevData) => ({
                ...prevData,
                congratesMessage: content,
              }))
            }
          />
        </div>
      </div>
    </>
  );
};

export default CourseMessages;
