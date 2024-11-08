import { useTranslations } from "next-intl";
import React from "react";

const ReqAndDesc = ({ requirments, courseFor, description }) => {
  const t = useTranslations("CoursePage");
  return (
    <>
      <div className="my-4">
        <h2 className="text-2xl font-bold text-slate-800">
          {t("requirements")}
        </h2>
        <ul className="max-w-4xl mx-auto px-8 py-2 list-disc">
          {requirments?.map((req, idx) => (
            <li key={idx} className="leading-relaxed text-gray-700">
              {req}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          {t("description")}
        </h2>
        <div
          className="m-4 text-gray-800"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-800">{t("courseFor")}</h2>
        <ul className="max-w-4xl mx-auto px-8 py-2 list-disc">
          {courseFor.map((req, idx) => (
            <li key={idx} className="leading-relaxed text-gray-700">
              {req}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ReqAndDesc;
