"use client";
import React, { useState, useEffect } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const DragnDrop = ({ course, formData, setFormData }) => {
  const [inputs, setInputs] = useState(
    course.learningObjective.length == 0
      ? ["", "", "", ""]
      : course.learningObjective
  );
  const [reqinputs, setReqInputs] = useState(
    course.requirements == 0 ? [""] : course.requirements
  );
  const [forinputs, setForInputs] = useState(
    course.courseFor == 0 ? [""] : course.courseFor
  );

  // Update the formData when inputs change
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      learningObjective: inputs,
      requirements: reqinputs,
      courseFor: forinputs,
    }));
  }, [inputs, reqinputs, forinputs, setFormData]);

  const placeholders1 = [
    "Example: Define the roles and responsibilities of a project manager",
    "Example: Estimate project timelines and budget",
    "Example: Identify and manage project risks",
    "Example: Complete a case study to manage a project from conception to completion",
  ];

  const placeholders2 = [
    "Example: No programming experience needed. You will learn everything you need to know",
  ];

  const placeholders3 = [
    "Example: Beginner Python developers curious about data science",
  ];

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleInputChange2 = (index, value) => {
    const newReqInputs = [...reqinputs];
    newReqInputs[index] = value;
    setReqInputs(newReqInputs);
  };

  const handleInputChange3 = (index, value) => {
    const newForInputs = [...forinputs];
    newForInputs[index] = value;
    setForInputs(newForInputs);
  };

  const handleAddInput = () => {
    if (inputs.every((input) => input.trim() !== "")) {
      setInputs([...inputs, ""]);
    }
  };

  const handleAddInput2 = () => {
    if (reqinputs.every((input) => input.trim() !== "")) {
      setReqInputs([...reqinputs, ""]);
    }
  };

  const handleAddInput3 = () => {
    if (forinputs.every((input) => input.trim() !== "")) {
      setForInputs([...forinputs, ""]);
    }
  };

  const handleRemoveInput = (index) => {
    if (inputs.length > 4) {
      const newInputs = inputs.filter((_, i) => i !== index);
      setInputs(newInputs);
    }
  };

  const handleRemoveInput2 = (index) => {
    if (reqinputs.length > 1) {
      const newReqInputs = reqinputs.filter((_, i) => i !== index);
      setReqInputs(newReqInputs);
    }
  };

  const handleRemoveInput3 = (index) => {
    if (forinputs.length > 1) {
      const newForInputs = forinputs.filter((_, i) => i !== index);
      setForInputs(newForInputs);
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
    }
  };

  return (
    <div>
      {/* Learning Objectives Section */}
      <form>
        <div>
          <div className="font-bold mb-1">
            What will students learn in your course?
          </div>
          <p>
            You must enter at least 4{" "}
            <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
              learning objectives or outcomes
            </span>{" "}
            that learners can expect to achieve after completing your course.
          </p>

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
                              className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white pr-12"
                              type="text"
                              placeholder={`${placeholders1[index % 4]}`}
                              value={input}
                              onChange={(e) =>
                                handleInputChange(index, e.target.value)
                              }
                            />
                            <span className="absolute right-2 bottom-6 pr-1 text-gray-600">
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
            Add more to your response
          </button>
        </div>
      </form>

      {/* Requirements Section */}
      <form>
        <div>
          <div className="font-bold mb-1">
            What are the requirements or prerequisites for taking your course?
          </div>
          <p>
            List the required skills, experience, tools, or equipment learners
            should have prior to taking your course.
          </p>

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
                              className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white pr-12"
                              type="text"
                              placeholder={`${placeholders2[index % 1]}`}
                              value={input}
                              onChange={(e) =>
                                handleInputChange2(index, e.target.value)
                              }
                            />
                            <span className="absolute right-2 bottom-6 pr-1 text-gray-600">
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
            Add more to your response
          </button>
        </div>
      </form>

      {/* Course For Section */}
      <form>
        <div>
          <div className="font-bold mb-1">Who is this course for?</div>
          <p>
            List the specific audience or demographic that this course is
            tailored for.
          </p>

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
                              className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white pr-12"
                              type="text"
                              placeholder={`${placeholders3[index % 1]}`}
                              value={input}
                              onChange={(e) =>
                                handleInputChange3(index, e.target.value)
                              }
                            />
                            <span className="absolute right-2 bottom-6 pr-1 text-gray-600">
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
            Add more to your response
          </button>
        </div>
      </form>
    </div>
  );
};

export default DragnDrop;
