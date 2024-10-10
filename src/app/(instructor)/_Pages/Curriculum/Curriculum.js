"use client";
import React, { useState } from "react";
import { MdOutlineInsertDriveFile } from "react-icons/md";
import { FaPen, FaTrash } from "react-icons/fa";
import { IoIosMenu, IoIosCheckmarkCircle } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import ExpandedSection from "../../_components/ExpandedSection/ExpandedSection";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import RichText3 from "../../_components/RichText3/RichText";
import { GoQuestion } from "react-icons/go";

const Curriculum = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [visibleSectionIndex, setVisibleSectionIndex] = useState(null);
  const [lectureFormVisible, setLectureFormVisible] = useState(null);
  const [quizFormVisible, setQuizFormVisible] = useState(null);
  const [newLectureTitle, setNewLectureTitle] = useState("");
  const [newQuizTitle, setNewQuizTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [editSectionIndex, setEditSectionIndex] = useState(null);
  const [editedSectionTitle, setEditedSectionTitle] = useState("");
  const [editLectureIndex, setEditLectureIndex] = useState(null);
  const [editLectureTitle, setEditedLectureTitle] = useState("");
  const [editLectureContent, setEditLectureContent] = useState("");
  const [sections, setSections] = useState([
    {
      title: "Section 1",
      objective: "objective",
      items: [
        {
          type: "lecture",
          title: "Lecture 1",
          content: "Content of Lecture 1",
        },
        { type: "quiz", title: "Quiz 1", content: "Content of Quiz 1" },
        {
          type: "lecture",
          title: "Lecture 2",
          content: "Content of Lecture 2",
        },
      ],
    },
    {
      title: "Section 2",
      objective: "objective",
      items: [
        {
          type: "lecture",
          title: "Lecture 1",
          content: "Content of Lecture 1",
        },
        { type: "quiz", title: "Quiz 1", content: "Content of Quiz 1" },
        {
          type: "lecture",
          title: "Lecture 2",
          content: "Content of Lecture 2",
        },
      ],
    },
  ]);

  const handleEditSectionTitle = (index) => {
    setEditSectionIndex(index);
    setEditedSectionTitle(sections[index].title);
  };

  const handleSaveSectionTitle = (index) => {
    // Save the new title logic here
    sections[index].title = editedSectionTitle; // Update section title
    setEditSectionIndex(null); // Hide the edit form
  };

  const handleEditLectureTitle = (sectionIndex, lectureIndex) => {
    setEditLectureIndex(`${sectionIndex}-${lectureIndex}`);
    setEditedLectureTitle(sections[sectionIndex].items[lectureIndex].title);
    setEditLectureContent(sections[sectionIndex].items[lectureIndex].content);
    console.log(editLectureContent);
  };

  const handleSaveLectureTitle = (sectionIndex, lectureIndex) => {
    // Save the updated title and content
    const updatedSections = [...sections];
    updatedSections[sectionIndex].items[lectureIndex].title = editLectureTitle;
    updatedSections[sectionIndex].items[lectureIndex].content =
      editLectureContent;
    setSections(updatedSections);
    setEditLectureIndex(null);
  };

  const toggleFormVisibility = () => {
    setFormVisible((prev) => !prev);
  };

  const handleCancel = () => {
    setFormVisible(false);
  };

  const handleAddSection = (title, objective) => {
    const newSection = { title, objective, items: [] };
    setSections((prevSections) => [...prevSections, newSection]);
    setFormVisible(false);
  };

  const toggleCurriculumVisibility = (index) => {
    if (visibleSectionIndex === index) {
      setVisibleSectionIndex(null);
      setLectureFormVisible(null); // Hide if already visible
      setQuizFormVisible(null);
    } else {
      setVisibleSectionIndex(index); // Show the clicked section
    }
  };

  const handleLectureFormVisibility = (index) => {
    setLectureFormVisible((prevIndex) => (prevIndex === index ? null : index));
    setNewLectureTitle("");
  };

  const handleQuizFormVisibility = (index) => {
    setQuizFormVisible((prevIndex) => (prevIndex === index ? null : index));
    setNewQuizTitle("");
    setEditLectureContent("");
  };

  const handleAddItem = (sectionIndex, type) => {
    const title = type === "lecture" ? newLectureTitle : newQuizTitle;
    if (title.length === 0) {
      setErrorMessage("This field may not be blank.");
      return;
    }
    if (title.length < 3) {
      setErrorMessage("Titles must have minimum 3 characters.");
      return;
    }
    if (title.trim()) {
      const updatedSections = [...sections];
      updatedSections[sectionIndex].items.push({
        type,
        title,
        content:
          type === "lecture" ? "New lecture content" : editLectureContent,
      });
      setSections(updatedSections);
      setLectureFormVisible(null);
      setQuizFormVisible(null);
      setErrorMessage("");
      setEditLectureContent("");
      setVisibleSectionIndex(null);
    }
  };

  const handleDeleteItem = (sectionIndex, itemIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].items.splice(itemIndex, 1);
    setSections(updatedSections);
  };

  const handleDeleteSection = (index) => {
    const updatedSections = sections.filter(
      (_, sectionIndex) => sectionIndex !== index
    );
    setSections(updatedSections);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // Handle section reordering
    if (
      source.droppableId === "droppable" &&
      destination.droppableId === "droppable"
    ) {
      const reorderedSections = Array.from(sections);
      const [movedSection] = reorderedSections.splice(source.index, 1);
      reorderedSections.splice(destination.index, 0, movedSection);
      setSections(reorderedSections);
    }
    // Handle item moving between sections
    else if (source.droppableId !== destination.droppableId) {
      const sourceSectionIndex = parseInt(source.droppableId);
      const destinationSectionIndex = parseInt(destination.droppableId);

      const sourceSection = sections[sourceSectionIndex];
      const destinationSection = sections[destinationSectionIndex];

      const [movedItem] = sourceSection.items.splice(source.index, 1);
      destinationSection.items.splice(destination.index, 0, movedItem);

      const updatedSections = [...sections];
      updatedSections[sourceSectionIndex] = sourceSection;
      updatedSections[destinationSectionIndex] = destinationSection;

      setSections(updatedSections);
    }
    // Handle item reordering within the same section
    else {
      const sectionIndex = parseInt(source.droppableId);
      const reorderedItems = Array.from(sections[sectionIndex].items);
      const [movedItem] = reorderedItems.splice(source.index, 1);
      reorderedItems.splice(destination.index, 0, movedItem);

      const updatedSections = [...sections];
      updatedSections[sectionIndex] = {
        ...updatedSections[sectionIndex],
        items: reorderedItems,
      };

      setSections(updatedSections);
    }
  };

  // Calculate the total number of items
  const getItemNumber = (sectionIndex, itemIndex) => {
    let totalLectures = 0;
    let totalQuizzes = 0;

    for (let i = 0; i < sectionIndex; i++) {
      totalLectures += sections[i].items.filter(
        (item) => item.type === "lecture"
      ).length;
      totalQuizzes += sections[i].items.filter(
        (item) => item.type === "quiz"
      ).length;
    }

    // Count the lectures and quizzes in the current section
    const currentSection = sections[sectionIndex];
    totalLectures += currentSection.items
      .slice(0, itemIndex)
      .filter((item) => item.type === "lecture").length;
    totalQuizzes += currentSection.items
      .slice(0, itemIndex)
      .filter((item) => item.type === "quiz").length;

    // Determine if the item is a lecture or quiz for the numbering
    if (currentSection.items[itemIndex].type === "lecture") {
      return totalLectures + 1; // Lecture numbering starts from 1
    } else {
      return totalQuizzes + 1; // Quiz numbering starts from 1
    }
  };
  /****************************************************************** */
  return (
    <div className="py-4 px-7 lg:px-10">
      <div>
        <p className="my-2">
          Start putting together your course by creating sections, lectures, and
          practice (quizzes, coding exercises, and assignments).
        </p>
        <p>
          Use your{" "}
          <span className="text-[#5022c3] underline underline-offset-4 cursor-pointer hover:text-[#3b198f]">
            course outline
          </span>{" "}
          to structure your content and label your sections and lectures
          clearly. If you’re intending to offer your course for free, the total
          length of video content must be less than 2 hours.
        </p>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" type="SECTION">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="my-8"
            >
              {sections.map((section, sectionIndex) => (
                <Draggable
                  key={sectionIndex}
                  draggableId={`section-${sectionIndex}`}
                  index={sectionIndex}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="border border-gray-600 bg-gray-100 my-4"
                    >
                      {editSectionIndex === sectionIndex ? (
                        <div className="flex gap-3 border border-black p-4 bg-white m-2 items-start">
                          <div className="bold">
                            Section {sectionIndex + 1}:
                          </div>

                          <div className="flex-1">
                            <input
                              type="text"
                              value={editedSectionTitle}
                              onChange={(e) =>
                                setEditedSectionTitle(e.target.value)
                              }
                              className="border border-black pl-2 px-4 py-1 w-full"
                            />
                            <div className="mt-4">
                              <p className="font-bold text-sm">
                                What will students be able to do at the end of
                                this section?
                              </p>
                              <input
                                type="text"
                                value={sections[sectionIndex].objective}
                                className="border border-black pl-2 px-4 py-1 my-2 w-full"
                              />
                            </div>
                            <div className="flex gap-4 justify-end">
                              <button
                                className="font-bold text-black"
                                onClick={() => {
                                  setEditSectionIndex(null);
                                }}
                              >
                                Cancel
                              </button>
                              <button
                                className="bg-gray-900 font-bold text-white px-4 py-1"
                                onClick={() =>
                                  handleSaveSectionTitle(sectionIndex)
                                }
                              >
                                Save Section
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          {...provided.dragHandleProps}
                          className="py-4 px-2 flex gap-4 group"
                        >
                          <div className="flex gap-2">
                            <h2 className="font-bold">
                              Section {sectionIndex + 1}:
                            </h2>
                            <div className="flex items-center gap-2">
                              <MdOutlineInsertDriveFile />
                              <p>{section.title}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between flex-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-4">
                              <FaPen
                                className="text-xs cursor-pointer"
                                onClick={() =>
                                  handleEditSectionTitle(sectionIndex)
                                }
                              />
                              <FaTrash
                                className="text-xs cursor-pointer"
                                onClick={() =>
                                  handleDeleteSection(sectionIndex)
                                }
                              />
                            </div>
                            <div>
                              <IoIosMenu className="text-2xl" />
                            </div>
                          </div>
                        </div>
                      )}

                      <Droppable droppableId={`${sectionIndex}`} type="ITEM">
                        {(provided) => (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            {section.items.map((item, itemIndex) => (
                              <Draggable
                                key={`${item.type}-${itemIndex}`}
                                draggableId={`item-${sectionIndex}-${itemIndex}`}
                                index={itemIndex}
                              >
                                {(provided) => (
                                  <>
                                    {editLectureIndex ===
                                    `${sectionIndex}-${itemIndex}` ? (
                                      <div className="my-4 ml-20 mr-2 p-3 flex items-center border border-gray-600 bg-white group cursor-move">
                                        <div className="flex items-start flex-1 gap-2">
                                          <div className="flex items-center gap-2">
                                            <IoIosCheckmarkCircle className="text-gray-800" />
                                            <h3 className="font-medium">
                                              {item.type === "lecture"
                                                ? "Lecture"
                                                : "Quiz"}
                                              {getItemNumber(
                                                sectionIndex,
                                                itemIndex
                                              )}
                                              :
                                            </h3>
                                          </div>
                                          <div className="flex-1">
                                            <input
                                              type="text"
                                              value={editLectureTitle}
                                              onChange={(e) =>
                                                setEditedLectureTitle(
                                                  e.target.value
                                                )
                                              }
                                              className="border border-black pl-2 px-4 py-1 w-full"
                                            />
                                            {item.type === "quiz" ? (
                                              <div className="mt-3">
                                                <RichText3
                                                  content={editLectureContent}
                                                  onChange={(newContent) =>
                                                    setEditLectureContent(
                                                      newContent
                                                    )
                                                  }
                                                />
                                              </div>
                                            ) : (
                                              ""
                                            )}
                                            <div className="flex gap-4 mt-4 justify-end">
                                              <button
                                                className="font-bold text-black"
                                                onClick={() => {
                                                  setEditLectureIndex(null);
                                                }}
                                              >
                                                Cancel
                                              </button>
                                              {item.type === "quiz" ? (
                                                <button
                                                  className="bg-gray-900 font-bold text-white px-4 py-1"
                                                  onClick={() =>
                                                    handleSaveLectureTitle(
                                                      sectionIndex,
                                                      itemIndex
                                                    )
                                                  }
                                                >
                                                  Save Quiz
                                                </button>
                                              ) : (
                                                <button
                                                  className="bg-gray-900 font-bold text-white px-4 py-1"
                                                  onClick={() =>
                                                    handleSaveLectureTitle(
                                                      sectionIndex,
                                                      itemIndex
                                                    )
                                                  }
                                                >
                                                  Save Lecture
                                                </button>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ) : (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="my-4 ml-20 mr-2 p-3 flex items-center border border-gray-600 bg-white group cursor-move"
                                      >
                                        <div className="flex items-center gap-4 flex-1">
                                          <IoIosCheckmarkCircle className="text-gray-800" />
                                          <h3 className="font-medium">
                                            {item.type === "lecture"
                                              ? "Lecture"
                                              : "Quiz"}{" "}
                                            {getItemNumber(
                                              sectionIndex,
                                              itemIndex
                                            )}
                                            :
                                          </h3>
                                          <div className="flex items-center gap-2">
                                            {item.type === "lecture" ? (
                                              <MdOutlineInsertDriveFile />
                                            ) : (
                                              <GoQuestion />
                                            )}
                                            <p>{item.title}</p>
                                          </div>
                                          <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <FaPen
                                              className="text-xs cursor-pointer"
                                              onClick={() => {
                                                handleEditLectureTitle(
                                                  sectionIndex,
                                                  itemIndex
                                                );
                                              }}
                                            />
                                            <FaTrash
                                              className="text-xs cursor-pointer"
                                              onClick={() =>
                                                handleDeleteItem(
                                                  sectionIndex,
                                                  itemIndex
                                                )
                                              }
                                            />
                                          </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                          <button className="flex items-center gap-2 border border-gray-800 py-[3px] px-2 font-medium hover:bg-gray-100">
                                            <FaPlus />{" "}
                                            {item.type === "lecture"
                                              ? "Content"
                                              : "Questions"}
                                          </button>
                                          <IoIosMenu className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                      </div>
                                    )}
                                  </>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}

                            {/* Add new curriculum item button */}
                            <div className="my-4 ml-20">
                              <button
                                className={`flex items-center gap-2 border border-gray-800 py-[6px] px-3 font-medium transition-all ${
                                  visibleSectionIndex === sectionIndex
                                    ? "border-transparent bg-transparent h-0"
                                    : "hover:bg-gray-100 bg-white"
                                }`}
                                onClick={() =>
                                  toggleCurriculumVisibility(sectionIndex)
                                }
                              >
                                <FaPlus
                                  className={`transition-transform duration-900 text-xl ${
                                    visibleSectionIndex === sectionIndex
                                      ? "rotate-45 -translate-x-11 -translate-y-3"
                                      : ""
                                  }`}
                                />
                                <span
                                  className={`transition-opacity ${
                                    visibleSectionIndex === sectionIndex
                                      ? "opacity-0 hidden"
                                      : "opacity-100"
                                  }`}
                                >
                                  Curriculum item
                                </span>
                              </button>

                              {/* Add lecture or quiz only for the visible section */}
                              {visibleSectionIndex === sectionIndex &&
                                lectureFormVisible !== sectionIndex &&
                                quizFormVisible !== sectionIndex && (
                                  <div className="flex gap-4 border border-black border-dashed bg-white mr-2 p-4">
                                    <button
                                      className="flex items-center text-violet-800 hover:text-violet-950 gap-2"
                                      onClick={() =>
                                        handleLectureFormVisibility(
                                          sectionIndex
                                        )
                                      }
                                    >
                                      <FaPlus />
                                      <p className="font-bold">Lecture</p>
                                    </button>

                                    <button
                                      className="flex items-center text-violet-800 hover:text-violet-950 gap-2"
                                      onClick={() =>
                                        handleQuizFormVisibility(sectionIndex)
                                      }
                                    >
                                      <FaPlus />
                                      <p className="font-bold">Quiz</p>
                                    </button>
                                  </div>
                                )}

                              {lectureFormVisible === sectionIndex && (
                                <div className="flex p-4 border border-black mr-2 bg-white">
                                  <p>New Lecture:</p>
                                  <div className="flex-1 ml-3">
                                    <div className="relative">
                                      <input
                                        type="text"
                                        placeholder="Enter title"
                                        value={newLectureTitle}
                                        onChange={(e) =>
                                          setNewLectureTitle(e.target.value)
                                        }
                                        maxLength={80}
                                        className={`border border-black pl-4 pr-8 py-1 w-full outline-none ${
                                          errorMessage
                                            ? "border-2 border-orange-300"
                                            : "border-black"
                                        }`}
                                      />
                                      <span className="text-gray-500 absolute right-3 top-1">
                                        {80 - newLectureTitle.length}
                                      </span>
                                    </div>
                                    {newLectureTitle.length < 3 && (
                                      <p className="text-red-900 text-xs mt-2">
                                        {errorMessage}
                                      </p>
                                    )}
                                    <div className="flex justify-end flex-1 mt-10">
                                      <button
                                        onClick={() =>
                                          setLectureFormVisible(null)
                                        }
                                        className="font-medium text-black px-3 py-1"
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        onClick={() =>
                                          handleAddItem(sectionIndex, "lecture")
                                        }
                                        className="bg-black font-medium text-white px-3 py-1"
                                      >
                                        Add Lecture
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {quizFormVisible === sectionIndex && (
                                <div className="flex p-4 border border-black mr-2 bg-white">
                                  <p>New Quiz:</p>
                                  <div className="flex-1 ml-3">
                                    <div className="relative">
                                      <input
                                        type="text"
                                        placeholder="Enter title"
                                        value={newQuizTitle}
                                        onChange={(e) =>
                                          setNewQuizTitle(e.target.value)
                                        }
                                        maxLength={80}
                                        className={`border border-black pl-4 pr-8 py-1 w-full outline-none ${
                                          errorMessage
                                            ? "border-2 border-orange-300"
                                            : "border-black"
                                        }`}
                                      />
                                      <span className="text-gray-500 absolute right-3 top-1">
                                        {80 - newQuizTitle.length}
                                      </span>
                                    </div>
                                    {newQuizTitle.length < 3 && (
                                      <p className="text-red-900 text-xs mt-2">
                                        {errorMessage}
                                      </p>
                                    )}
                                    <div className="mt-3">
                                      <RichText3
                                        content={editLectureContent}
                                        onChange={(newContent) =>
                                          setEditLectureContent(newContent)
                                        }
                                      />
                                    </div>
                                    <div className="flex justify-end flex-1 mt-10">
                                      <button
                                        onClick={() => setQuizFormVisible(null)}
                                        className="font-medium text-black px-3 py-1"
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        onClick={() =>
                                          handleAddItem(sectionIndex, "quiz")
                                        }
                                        className="bg-black font-medium text-white px-3 py-1"
                                      >
                                        Add Quiz
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </Droppable>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* Add Section Button */}
      <div className="my-4">
        <button
          className={`flex items-center gap-2 border border-gray-800 py-[6px] px-3 font-medium bg-white transition-all ${
            isFormVisible ? "border-transparent" : "hover:bg-gray-100"
          }`}
          onClick={toggleFormVisibility}
        >
          <FaPlus
            className={`transition-transform duration-300 ${
              isFormVisible ? "-rotate-45 -translate-x-4" : ""
            }`}
          />
          <span
            className={`transition-opacity ${
              isFormVisible ? "opacity-0 hidden" : "opacity-100"
            }`}
          >
            Section
          </span>
        </button>
      </div>

      {/* Section Form */}
      {isFormVisible && (
        <ExpandedSection
          onCancel={handleCancel}
          onAddSection={handleAddSection}
        />
      )}
    </div>
  );
};

export default Curriculum;
