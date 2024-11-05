"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { FaTrash } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";

const DragnDrop = ({ course, setFormData }) => {
  const t = useTranslations("goals");
  const { locale } = useParams();

  const [inputs, setInputs] = useState(
    course.learningObjective.length == 0
      ? ["", "", "", ""]
      : course.learningObjective
  );
  const [inputs_Ar, setInputs_Ar] = useState(
    course.learningObjective_Ar.length == 0
      ? ["", "", "", ""]
      : course.learningObjective_Ar
  );
  const [reqinputs, setReqInputs] = useState(
    course.requirements == 0 ? [""] : course.requirements
  );
  const [reqinputs_Ar, setReqInputs_Ar] = useState(
    course.requirements_Ar == 0 ? [""] : course.requirements_Ar
  );
  const [forinputs, setForInputs] = useState(
    course.courseFor == 0 ? [""] : course.courseFor
  );
  const [forinputs_Ar, setForInputs_Ar] = useState(
    course.courseFor_Ar == 0 ? [""] : course.courseFor_Ar
  );

  // Update the formData when inputs change
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      learningObjective: inputs,
      requirements: reqinputs,
      courseFor: forinputs,
      learningObjective_Ar: inputs_Ar,
      requirements_Ar: reqinputs_Ar,
      courseFor_Ar: forinputs_Ar,
    }));
  }, [
    inputs,
    reqinputs,
    forinputs,
    inputs_Ar,
    reqinputs_Ar,
    forinputs_Ar,
    setFormData,
  ]);

  const placeholders1 = [
    "Example: Define the roles and responsibilities of a project manager",
    "Example: Estimate project timelines and budget",
    "Example: Identify and manage project risks",
    "Example: Complete a case study to manage a project from conception to completion",
  ];
  const placeholders1_Ar = [
    "مثال: تحديد الأدوار والمسؤوليات لمدير المشروع",
    "مثال: تقدير الجداول الزمنية للمشروع والميزانية",
    "مثال: تحديد وإدارة مخاطر المشروع",
    "مثال: إكمال دراسة حالة لإدارة مشروع من التصور إلى الإنجاز",
  ];

  const placeholders2 = [
    "Example: No programming experience needed. You will learn everything you need to know",
  ];
  const placeholders2_Ar = [
    "مثال: لا يلزم وجود خبرة في البرمجة. سوف تتعلم كل ما تحتاج إلى معرفته",
  ];

  const placeholders3 = [
    "Example: Beginner Python developers are very into data science.",
  ];
  const placeholders3_Ar = [
    "مثال: مطورو بايثون المبتدئين المهتمين بعلم البيانات",
  ];

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };
  const handleInputChange_Ar = (index, value) => {
    const newInputs = [...inputs_Ar];
    newInputs[index] = value;
    setInputs_Ar(newInputs);
  };

  const handleInputChange2 = (index, value) => {
    const newReqInputs = [...reqinputs];
    newReqInputs[index] = value;
    setReqInputs(newReqInputs);
  };
  const handleInputChange2_Ar = (index, value) => {
    const newReqInputs = [...reqinputs_Ar];
    newReqInputs[index] = value;
    setReqInputs_Ar(newReqInputs);
  };

  const handleInputChange3 = (index, value) => {
    const newForInputs = [...forinputs];
    newForInputs[index] = value;
    setForInputs(newForInputs);
  };
  const handleInputChange3_Ar = (index, value) => {
    const newForInputs = [...forinputs_Ar];
    newForInputs[index] = value;
    setForInputs_Ar(newForInputs);
  };

  const handleAddInput = () => {
    if (inputs.every((input) => input.trim() !== "")) {
      setInputs([...inputs, ""]);
    }
  };
  const handleAddInput_Ar = () => {
    if (inputs_Ar.every((input) => input.trim() !== "")) {
      setInputs_Ar([...inputs_Ar, ""]);
    }
  };

  const handleAddInput2 = () => {
    if (reqinputs.every((input) => input.trim() !== "")) {
      setReqInputs([...reqinputs, ""]);
    }
  };
  const handleAddInput2_Ar = () => {
    if (reqinputs_Ar.every((input) => input.trim() !== "")) {
      setReqInputs_Ar([...reqinputs_Ar, ""]);
    }
  };

  const handleAddInput3 = () => {
    if (forinputs.every((input) => input.trim() !== "")) {
      setForInputs([...forinputs, ""]);
    }
  };
  const handleAddInput3_Ar = () => {
    if (forinputs_Ar.every((input) => input.trim() !== "")) {
      setForInputs_Ar([...forinputs_Ar, ""]);
    }
  };

  const handleRemoveInput = (index) => {
    if (inputs.length > 4) {
      const newInputs = inputs.filter((_, i) => i !== index);
      setInputs(newInputs);
    }
  };
  const handleRemoveInput_Ar = (index) => {
    if (inputs_Ar.length > 4) {
      const newInputs = inputs_Ar.filter((_, i) => i !== index);
      setInputs_Ar(newInputs);
    }
  };

  const handleRemoveInput2 = (index) => {
    if (reqinputs.length > 1) {
      const newReqInputs = reqinputs.filter((_, i) => i !== index);
      setReqInputs(newReqInputs);
    }
  };

  const handleRemoveInput2_Ar = (index) => {
    if (reqinputs_Ar.length > 1) {
      const newReqInputs = reqinputs_Ar.filter((_, i) => i !== index);
      setReqInputs_Ar(newReqInputs);
    }
  };

  const handleRemoveInput3 = (index) => {
    if (forinputs.length > 1) {
      const newForInputs = forinputs.filter((_, i) => i !== index);
      setForInputs(newForInputs);
    }
  };
  const handleRemoveInput3_Ar = (index) => {
    if (forinputs_Ar.length > 1) {
      const newForInputs = forinputs_Ar.filter((_, i) => i !== index);
      setForInputs_Ar(newForInputs);
    }
  };

  const onDragEnd = (result, type) => {
    const { source, destination } = result;
    if (!destination || source.index === destination.index) return;

    if (type === "inputs") {
      const reorderedInputs = Array.from(inputs);
      const [movedItem] = reorderedInputs.splice(source.index, 1);
      reorderedInputs.splice(destination.index, 0, movedItem);
      setInputs(reorderedInputs);
    } else if (type === "reqinputs") {
      const reorderedReqInputs = Array.from(reqinputs);
      const [movedItem] = reorderedReqInputs.splice(source.index, 1);
      reorderedReqInputs.splice(destination.index, 0, movedItem);
      setReqInputs(reorderedReqInputs);
    } else if (type === "forinputs") {
      const reorderedForInputs = Array.from(forinputs);
      const [movedItem] = reorderedForInputs.splice(source.index, 1);
      reorderedForInputs.splice(destination.index, 0, movedItem);
      setForInputs(reorderedForInputs);
    } else if (type === "inputs_Ar") {
      const reorderedReqInputs = Array.from(reqinputs);
      const [movedItem] = reorderedReqInputs.splice(source.index, 1);
      reorderedReqInputs.splice(destination.index, 0, movedItem);
      setReqInputs(reorderedReqInputs);
    } else if (type === "reqinputs_Ar") {
      const reorderedReqInputs = Array.from(reqinputs);
      const [movedItem] = reorderedReqInputs.splice(source.index, 1);
      reorderedReqInputs.splice(destination.index, 0, movedItem);
      setReqInputs(reorderedReqInputs);
    } else if (type === "forinputs_Ar") {
      const reorderedReqInputs = Array.from(reqinputs);
      const [movedItem] = reorderedReqInputs.splice(source.index, 1);
      reorderedReqInputs.splice(destination.index, 0, movedItem);
      setReqInputs(reorderedReqInputs);
    }
  };

  return (
    <div>
      {/* Learning Objectives Section */}
      <form>
        <div>
          <div className="font-bold mb-1">{t("students-will-learn")}</div>
          <p className="mb-4">
            {t("info1")}{" "}
            <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
              {t("info2")}
            </span>{" "}
            {t("info3")}
          </p>
          <span className="pt-10 font-semibold">{t("add-in-english")}</span>
          <DragDropContext onDragEnd={(result) => onDragEnd(result, "inputs")}>
            <Droppable droppableId="inputsList">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {inputs.map((input, index) => (
                    <Draggable
                      key={`input-${index}`}
                      draggableId={`input-${index}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="flex items-center group"
                        >
                          <div className="relative mt-4 w-[250px] md:w-[600px] lg:w-[680px]">
                            <input
                              className={`appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                                locale === "en" ? "pr-12" : "pl-12"
                              } `}
                              type="text"
                              placeholder={`${placeholders1[index % 4]}`}
                              value={input}
                              onChange={(e) => {
                                const value = e.target.value;
                                if (value.length <= 160) {
                                  handleInputChange(index, value);
                                }
                              }}
                            />
                            <span
                              className={`absolute ${
                                locale === "en" ? "right-2 pr-1" : "left-2 pl-1"
                              }  bottom-6  text-gray-600`}
                            >
                              {`${160 - input.length}`}
                            </span>
                          </div>
                          {input.trim() !== "" && (
                            <>
                              <span
                                className={`hidden group-hover:inline-block py-[14px] mt-1 px-4 border border-black ${
                                  inputs.length > 4
                                    ? "cursor-pointer"
                                    : "cursor-not-allowed"
                                }`}
                                onClick={
                                  inputs.length > 4
                                    ? () => handleRemoveInput(index)
                                    : null
                                }
                              >
                                <FaTrash />
                              </span>
                              <span
                                {...provided.dragHandleProps}
                                className="hidden group-hover:inline-block py-[12px] text-xl mt-1 px-3 border border-black cursor-move"
                              >
                                <IoMdMenu />
                              </span>
                            </>
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>

        <div className="my-6">
          <button
            type="button"
            className={`text-[#5022c3] font-bold hover:text-[#371783] flex items-center`}
            onClick={handleAddInput}
            disabled={!inputs.every((input) => input.trim() !== "")}
          >
            <HiOutlinePlus className="md:text-xl mr-2" />
            {t("add-more-response")}
          </button>
        </div>
      </form>
      {/* Ar Intended Learners Form */}
      <form>
        <div>
          <span className="pt-10 font-semibold">{t("add-in-arabic")}</span>
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, "inputs_Ar")}
          >
            <Droppable droppableId="inputsList_Ar">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {inputs_Ar.map((input, index) => (
                    <Draggable
                      key={`input_Ar-${index}`}
                      draggableId={`input_Ar-${index}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="flex items-center group"
                        >
                          <div className="relative mt-4 w-[250px] md:w-[600px] lg:w-[680px]">
                            <input
                              className={`appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                                locale === "en" ? "pr-12" : "pl-12"
                              } `}
                              type="text"
                              placeholder={`${placeholders1_Ar[index % 4]}`}
                              value={input}
                              onChange={(e) => {
                                const value = e.target.value;
                                if (value.length <= 160) {
                                  handleInputChange_Ar(index, value);
                                }
                              }}
                            />
                            <span
                              className={`absolute ${
                                locale === "en" ? "right-2 pr-1" : "left-2 pl-1"
                              }  bottom-6  text-gray-600`}
                            >
                              {`${160 - input.length}`}
                            </span>
                          </div>
                          {input.trim() !== "" && (
                            <>
                              <span
                                className={`hidden group-hover:inline-block py-[14px] mt-1 px-4 border border-black ${
                                  inputs_Ar.length > 4
                                    ? "cursor-pointer"
                                    : "cursor-not-allowed"
                                }`}
                                onClick={
                                  inputs_Ar.length > 4
                                    ? () => handleRemoveInput_Ar(index)
                                    : null
                                }
                              >
                                <FaTrash />
                              </span>
                              <span
                                {...provided.dragHandleProps}
                                className="hidden group-hover:inline-block py-[12px] text-xl mt-1 px-3 border border-black cursor-move"
                              >
                                <IoMdMenu />
                              </span>
                            </>
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>

        <div className="my-6">
          <button
            type="button"
            className={`text-[#5022c3] font-bold hover:text-[#371783] flex items-center`}
            onClick={handleAddInput_Ar}
            disabled={!inputs_Ar.every((input) => input.trim() !== "")}
          >
            <HiOutlinePlus className="md:text-xl mr-2" />
            {t("add-more-response")}
          </button>
        </div>
      </form>

      {/* Requirements Section */}
      <form>
        <div>
          <div className="font-bold mb-1">{t("requirements")}</div>
          <p className="mb-4">{t("reqinfo")}</p>
          <span className="pt-10 font-semibold">{t("add-in-english")}</span>

          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, "reqinputs")}
          >
            <Droppable droppableId="inputsList2">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {reqinputs.map((input, index) => (
                    <Draggable
                      key={`reqinput-${index}`}
                      draggableId={`reqinput-${index}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="flex items-center group"
                        >
                          <div className="relative mt-4 w-[250px] md:w-[600px] lg:w-[680px]">
                            <input
                              className={`appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                                locale === "en" ? "pr-12" : "pl-12"
                              } `}
                              type="text"
                              placeholder={`${placeholders2[index % 1]}`}
                              value={input}
                              onChange={(e) => {
                                const value = e.target.value;
                                if (value.length <= 160) {
                                  handleInputChange2(index, value);
                                }
                              }}
                            />
                            <span
                              className={`absolute ${
                                locale === "en" ? "right-2 pr-1" : "left-2 pl-1"
                              }  bottom-6  text-gray-600`}
                            >
                              {`${160 - input.length}`}
                            </span>
                          </div>
                          {input.trim() !== "" && (
                            <>
                              <span
                                className={`hidden group-hover:inline-block py-[14px] mt-1 px-4 border border-black ${
                                  reqinputs.length > 1
                                    ? "cursor-pointer"
                                    : "cursor-not-allowed"
                                }`}
                                onClick={
                                  reqinputs.length > 1
                                    ? () => handleRemoveInput2(index)
                                    : null
                                }
                              >
                                <FaTrash />
                              </span>
                              <span
                                {...provided.dragHandleProps}
                                className="hidden group-hover:inline-block py-[12px] text-xl mt-1 px-3 border border-black cursor-move"
                              >
                                <IoMdMenu />
                              </span>
                            </>
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>

        <div className="my-6">
          <button
            type="button"
            className={`text-[#5022c3] font-bold hover:text-[#371783] flex items-center`}
            onClick={handleAddInput2}
            disabled={!reqinputs.every((input) => input.trim() !== "")}
          >
            <HiOutlinePlus className="md:text-xl mr-2" />
            {t("add-more-response")}
          </button>
        </div>
      </form>
      {/* Requerments in Arabic */}
      <form>
        <span className="pt-10 font-semibold">{t("add-in-arabic")}</span>
        <div>
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, "reqinputs_Ar")}
          >
            <Droppable droppableId="inputsList2_Ar">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {reqinputs_Ar.map((input, index) => (
                    <Draggable
                      key={`reqinput_Ar-${index}`}
                      draggableId={`reqinput_Ar-${index}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="flex items-center group"
                        >
                          <div className="relative mt-4 w-[250px] md:w-[600px] lg:w-[680px]">
                            <input
                              className={`appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                                locale === "en" ? "pr-12" : "pl-12"
                              } `}
                              type="text"
                              placeholder={`${placeholders2_Ar[index % 1]}`}
                              value={input}
                              onChange={(e) => {
                                const value = e.target.value;
                                if (value.length <= 160) {
                                  handleInputChange2_Ar(index, value);
                                }
                              }}
                            />
                            <span
                              className={`absolute ${
                                locale === "en" ? "right-2 pr-1" : "left-2 pl-1"
                              }  bottom-6  text-gray-600`}
                            >
                              {`${160 - input.length}`}
                            </span>
                          </div>
                          {input.trim() !== "" && (
                            <>
                              <span
                                className={`hidden group-hover:inline-block py-[14px] mt-1 px-4 border border-black ${
                                  reqinputs_Ar.length > 1
                                    ? "cursor-pointer"
                                    : "cursor-not-allowed"
                                }`}
                                onClick={
                                  reqinputs_Ar.length > 1
                                    ? () => handleRemoveInput2_Ar(index)
                                    : null
                                }
                              >
                                <FaTrash />
                              </span>
                              <span
                                {...provided.dragHandleProps}
                                className="hidden group-hover:inline-block py-[12px] text-xl mt-1 px-3 border border-black cursor-move"
                              >
                                <IoMdMenu />
                              </span>
                            </>
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>

        <div className="my-6">
          <button
            type="button"
            className={`text-[#5022c3] font-bold hover:text-[#371783] flex items-center`}
            onClick={handleAddInput2_Ar}
            disabled={!reqinputs_Ar.every((input) => input.trim() !== "")}
          >
            <HiOutlinePlus className="md:text-xl mr-2" />
            {t("add-more-response")}
          </button>
        </div>
      </form>

      {/* Course For Section */}
      <form>
        <div>
          <div className="font-bold mb-1">{t("course-for")}</div>
          <p className="mb-4">{t("forinfo")}</p>
          {t("add-in-english")}

          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, "forinputs")}
          >
            <Droppable droppableId="inputsList3">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {forinputs.map((input, index) => (
                    <Draggable
                      key={`forinput-${index}`}
                      draggableId={`forinput-${index}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="flex items-center group"
                        >
                          <div className="relative mt-4 w-[250px] md:w-[600px] lg:w-[680px]">
                            <input
                              className={`appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                                locale === "en" ? "pr-12" : "pl-12"
                              } `}
                              type="text"
                              placeholder={`${placeholders3[index % 1]}`}
                              value={input}
                              onChange={(e) => {
                                const value = e.target.value;
                                if (value.length <= 160) {
                                  handleInputChange3(index, value);
                                }
                              }}
                            />
                            <span
                              className={`absolute ${
                                locale === "en" ? "right-2 pr-1" : "left-2 pl-1"
                              }  bottom-6  text-gray-600`}
                            >
                              {`${160 - input.length}`}
                            </span>
                          </div>
                          {input.trim() !== "" && (
                            <>
                              <span
                                className={`hidden group-hover:inline-block py-[14px] mt-1 px-4 border border-black ${
                                  forinputs.length > 1
                                    ? "cursor-pointer"
                                    : "cursor-not-allowed"
                                }`}
                                onClick={
                                  forinputs.length > 1
                                    ? () => handleRemoveInput3(index)
                                    : null
                                }
                              >
                                <FaTrash />
                              </span>
                              <span
                                {...provided.dragHandleProps}
                                className="hidden group-hover:inline-block py-[12px] text-xl mt-1 px-3 border border-black cursor-move"
                              >
                                <IoMdMenu />
                              </span>
                            </>
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>

        <div className="my-6">
          <button
            type="button"
            className={`text-[#5022c3] font-bold hover:text-[#371783] flex items-center`}
            onClick={handleAddInput3}
            disabled={!forinputs.every((input) => input.trim() !== "")}
          >
            <HiOutlinePlus className="md:text-xl mr-2" />
            {t("add-more-response")}
          </button>
        </div>
      </form>
      {/* Course For In Arabic */}
      <form>
        <div>
          {t("add-in-arabic")}

          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, "forinputs_Ar")}
          >
            <Droppable droppableId="inputsList3_Ar">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {forinputs_Ar.map((input, index) => (
                    <Draggable
                      key={`forinput_Ar-${index}`}
                      draggableId={`forinput_Ar-${index}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="flex items-center group"
                        >
                          <div className="relative mt-4 w-[250px] md:w-[600px] lg:w-[680px]">
                            <input
                              className={`appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                                locale === "en" ? "pr-12" : "pl-12"
                              } `}
                              type="text"
                              placeholder={`${placeholders3_Ar[index % 1]}`}
                              value={input}
                              onChange={(e) => {
                                const value = e.target.value;
                                if (value.length <= 160) {
                                  handleInputChange3_Ar(index, value);
                                }
                              }}
                            />
                            <span
                              className={`absolute ${
                                locale === "en" ? "right-2 pr-1" : "left-2 pl-1"
                              }  bottom-6  text-gray-600`}
                            >
                              {`${160 - input.length}`}
                            </span>
                          </div>
                          {input.trim() !== "" && (
                            <>
                              <span
                                className={`hidden group-hover:inline-block py-[14px] mt-1 px-4 border border-black ${
                                  forinputs_Ar.length > 1
                                    ? "cursor-pointer"
                                    : "cursor-not-allowed"
                                }`}
                                onClick={
                                  forinputs_Ar.length > 1
                                    ? () => handleRemoveInput3_Ar(index)
                                    : null
                                }
                              >
                                <FaTrash />
                              </span>
                              <span
                                {...provided.dragHandleProps}
                                className="hidden group-hover:inline-block py-[12px] text-xl mt-1 px-3 border border-black cursor-move"
                              >
                                <IoMdMenu />
                              </span>
                            </>
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>

        <div className="my-6">
          <button
            type="button"
            className={`text-[#5022c3] font-bold hover:text-[#371783] flex items-center`}
            onClick={handleAddInput3_Ar}
            disabled={!forinputs_Ar.every((input) => input.trim() !== "")}
          >
            <HiOutlinePlus className="md:text-xl mr-2" />
            {t("add-more-response")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DragnDrop;
