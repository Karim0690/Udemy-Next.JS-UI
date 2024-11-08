import { useTranslations } from "next-intl";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const AboutLearning = ({ learningObjective }) => {
  const t = useTranslations("CoursePage")
  return (
    <div className="border border-zinc-400 max-w-97 m-auto">
      <div className="m-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-9">
          {t("willLearn")}
        </h2>
        <div>
          <ul className=" grid md:grid-cols-2 gap-3">
            {learningObjective.map((obj, index) => (
              <li key={index} className="flex items-center mb-2">
                <AiOutlineCheck className=" mr-3" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutLearning;
