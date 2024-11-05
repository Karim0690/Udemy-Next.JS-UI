"use client";

import useCourseStore from "@/app/store/courseStore";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useEffect, useState, useMemo, useTransition } from "react";
import { IoMdInformationCircle } from "react-icons/io";

const AutoSuggest = ({ courseTopics, relatedTopic, setFormData }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isProposeMode, setIsProposeMode] = useState(false);
  const { topics, fetchTopics } = useCourseStore();
  const { locale } = useParams();
  const t = useTranslations("SelectTopics");

  useEffect(() => {
    const loadTopicsData = async () => {
      await fetchTopics();
    };
    loadTopicsData();
  }, [fetchTopics]);

  useEffect(() => {
    setIsProposeMode(courseTopics.length === 0);

    if (courseTopics.length === 1) {
      setFormData((prevData) => ({
        ...prevData,
        relatedTopic: courseTopics[0]._id,
      }));
    }
  }, [courseTopics, setFormData]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value && topics) {
      const filteredSuggestions = topics.filter((topic) =>
        locale === "en"
          ? topic.name.toLowerCase().includes(value.toLowerCase())
          : topic.nameAr.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setIsExpanded(true);
    } else {
      setSuggestions([]);
      setIsExpanded(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (!courseTopics.some((topic) => topic._id === suggestion._id)) {
      setFormData((prevData) => ({
        ...prevData,
        topics: [...prevData.topics, suggestion],
      }));
    }
    setInputValue("");
    setSuggestions([]);
    setIsExpanded(false);
  };

  const handleRemoveTopic = (topicId) => {
    setFormData((prevData) => ({
      ...prevData,
      topics: prevData.topics.filter((topic) => topic._id !== topicId),
    }));
  };

  const handleProposeAnotherTopic = () => {
    setIsProposeMode(true);
    setInputValue("");
  };

  useEffect(() => {
    setIsProposeMode(courseTopics.length === 0);
  }, [courseTopics]);

  const [tooltipVisible, setTooltipVisible] = useState(false);

  const filteredSuggestions = useMemo(() => {
    return suggestions.map((suggestion) => (
      <div
        key={suggestion._id}
        className="p-2 my-2 cursor-pointer text-sm font-medium border border-black rounded-3xl hover:bg-gray-200"
        onClick={() => handleSuggestionClick(suggestion)}
      >
        {locale === "en" ? suggestion.name : suggestion.nameAr}
      </div>
    ));
  }, [suggestions]);

  const handleSelectRelatedTopic = (e) => {
    const selectedTopicId = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      relatedTopic: selectedTopicId,
    }));
  };

  return (
    <div className="relative w-full">
      <div className="flex flex-wrap gap-2 mb-2 w-full md:w-[50%]">
        {courseTopics.map((topic) => (
          <div
            key={topic._id}
            className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-white bg-gray-800 rounded-full"
          >
            {locale === "en" ? topic.name : topic.nameAr}
            <button
              onClick={() => handleRemoveTopic(topic._id)}
              className="ml-2 text-white"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      {isProposeMode ? (
        <input
          aria-invalid="false"
          placeholder={t("placeholder")}
          autoComplete="off"
          aria-expanded={isExpanded}
          aria-haspopup="listbox"
          role="combobox"
          id="autosuggest-input"
          type="text"
          className="block p-3 border border-black rounded-md text-gray-800 outline-none w-full md:w-[50%]"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsExpanded(inputValue.length > 0)}
        />
      ) : (
        <div className="cursor-pointer" onClick={handleProposeAnotherTopic}>
          <span className="text-gray-600 text-xs underline">
            {t("another")}
          </span>
        </div>
      )}

      {isExpanded && filteredSuggestions.length > 0 && (
        <div
          role="listbox"
          className="absolute w-full md:w-[50%] left-0 right-0 z-10 mt-1 px-4 bg-white border border-gray-300 rounded-md shadow-lg max-h-56 overflow-auto"
        >
          {filteredSuggestions}
        </div>
      )}

      {courseTopics.length > 1 && (
        <>
          <div className="flex items-center gap-2 my-4">
            <h2 className="font-bold text-base">{t("representative")}</h2>
            <button
              type="button"
              onMouseEnter={() => setTooltipVisible(true)}
              onMouseLeave={() => setTooltipVisible(false)}
              className="focus:outline-none"
            >
              <IoMdInformationCircle className="text-xl" />
            </button>

            {tooltipVisible && (
              <div
                role="tooltip"
                className="absolute z-10 left-[600px] w-[300px] inline-block p-6 text-sm text-gray-600 bg-white border border-gray-200"
              >
                {t("popper")}
                <a
                  href="#"
                  className="text-violet-700 underline underline-offset-2"
                >
                  {t("learn-more")}
                </a>
              </div>
            )}
          </div>
          <div className="border border-black p-3 w-full md:w-[50%]">
            <select
              id="topic-options"
              name="topic"
              required
              value={relatedTopic ? relatedTopic._id : ""}
              className="block w-full text-base focus:outline-none bg-transparent text-gray-800"
              onChange={handleSelectRelatedTopic}
            >
              <option value="">{t("primary")}</option>
              {courseTopics.map((topic) => (
                <option key={topic._id} value={topic._id}>
                  {locale === "en" ? topic.name : topic.nameAr}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
    </div>
  );
};

export default AutoSuggest;
