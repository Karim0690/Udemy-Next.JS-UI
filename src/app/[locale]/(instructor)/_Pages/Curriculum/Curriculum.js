"use client";

import AddContentForm from "../../_components/AddContentForm/AddContentForm";
import AddQuestionForm from "../../_components/AddQuestionForm/AddQuestionForm";
import EditItemForm from "../../_components/EditItemForm/EditItemForm";
import ExpandedSection from "../../_components/ExpandedSection/ExpandedSection";
import LectureContentExpanded from "../../_components/LectureContentExpanded/LectureContentExpanded";
import NewLectureForm from "../../_components/NewLectureForm/NewLectureForm";
import NewQuizForm from "../../_components/NewQuizForm/NewQuizForm";
import NewSectionForm from "../../_components/NewSectionForm/NewSectionForm";
import QuizContentExpanded from "../../_components/QuizContentExpanded/QuizContentExpanded";
import useCourseStore from "@/app/store/courseStore";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaPen, FaPlayCircle, FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { GoQuestion } from "react-icons/go";
import { IoIosMenu, IoIosCheckmarkCircle } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import { MdOutlineInsertDriveFile } from "react-icons/md";

const Curriculum = () => {
  const params = useParams();
  const t = useTranslations("Curriculum");
  const [isFormVisible, setFormVisible] = useState(false);
  const [addContent, setAddContent] = useState(null);
  const [addQuestion, setAddQuestion] = useState(null);
  const [visibleSectionIndex, setVisibleSectionIndex] = useState(null);
  const [lectureFormVisible, setLectureFormVisible] = useState(null);
  const [quizFormVisible, setQuizFormVisible] = useState(null);
  const [editSectionIndex, setEditSectionIndex] = useState(null);
  const [editLectureIndex, setEditLectureIndex] = useState(null);
  const [addVideo, setAddVideo] = useState(true);
  const [addQuestions, setAddQuestions] = useState(true);
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lectureContent, setLectureContent] = useState(null);
  const [quizContent, setQuizContent] = useState(null);
  const { fetchCourse } = useCourseStore();
  const [questionId, SetQuestionId] = useState(null);

  const handelSections = async () => {
    try {
      let response = await axios.get(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/course/${params.id}/course_sections`
      );
      setSections(response.data[0].sections);
    } catch (error) {
      console.error("Error fetching sections:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handelSections();
  }, []);

  const handleAddSection = () => {
    handelSections();
  };

  const videoAdded = () => {
    setAddVideo(false);
    setAddContent(null);
    handelSections();
  };

  const handleEditLectureTitle = (sectionIndex, lectureIndex) => {
    setEditLectureIndex(`${sectionIndex}-${lectureIndex}`);
  };

  const toggleFormVisibility = () => {
    setFormVisible((prev) => !prev);
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
  };

  const handleQuizFormVisibility = (index) => {
    setQuizFormVisible((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleAddItem = () => {
    // Reset the form visibility and related states
    setLectureFormVisible(null);
    setQuizFormVisible(null);
    setVisibleSectionIndex(null);
    handelSections();
  };

  const handleDeleteItem = async (type, itemId, sectionId, item) => {
    await axios.delete(
      `${process.env.NEXT_PUBLIC_LOCAL_API}/course-sections/${sectionId}/items/${item}`
    );
    if (type === "Lecture") {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/lectures/${itemId}/course/${params.id}`
      );
    }
    if (type === "Quiz") {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/quizzes/${itemId}`
      );
    }
    handelSections();
    fetchCourse(params.id);
  };

  const handleDeleteSection = async (sectionId) => {
    await axios.delete(
      `${process.env.NEXT_PUBLIC_LOCAL_API}/course-sections/${sectionId}`
    );
    handelSections();
  };

  const onDragEnd = async (result) => {
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
      await axios.patch(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/course/${params.id}`,
        {
          sections: reorderedSections.map((section) => section._id),
        }
      );
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
      updatedSections.map((section) => ({
        _id: section._id,
        items: section.items.map((item) => console.log(item)),
      })),
        setSections(updatedSections);
      const updatePromises = updatedSections.map(async (section) => {
        return axios
          .put(
            `${process.env.NEXT_PUBLIC_LOCAL_API}/course-sections/${section._id}`,
            {
              items: section.items,
            }
          )
          .catch((error) => {
            console.error(`Failed to update section ${section._id}:`, error);
          });
      });

      // Wait for all updates to complete
      await Promise.all(updatePromises);
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
      updatedSections.map((section) => ({
        _id: section._id,
        items: section.items.map((item) => console.log(item)),
      }));

      const updatePromises = updatedSections.map(async (section) => {
        return axios
          .put(
            `${process.env.NEXT_PUBLIC_LOCAL_API}/course-sections/${section._id}`,
            {
              items: section.items,
            }
          )
          .catch((error) => {
            console.error(`Failed to update section ${section._id}:`, error);
          });
      });

      // Wait for all updates to complete
      await Promise.all(updatePromises);
    }
  };

  // Calculate the total number of items
  const getItemNumber = (sectionIndex, itemIndex) => {
    let totalLectures = 0;
    let totalQuizzes = 0;

    for (let i = 0; i < sectionIndex; i++) {
      totalLectures += sections[i].items.filter(
        (item) => item.type === "Lecture"
      ).length;
      totalQuizzes += sections[i].items.filter(
        (item) => item.type === "Quiz"
      ).length;
    }

    // Count the lectures and quizzes in the current section
    const currentSection = sections[sectionIndex];
    totalLectures += currentSection.items
      .slice(0, itemIndex)
      .filter((item) => item.type === "Lecture").length;
    totalQuizzes += currentSection.items
      .slice(0, itemIndex)
      .filter((item) => item.type === "Quiz").length;

    // Determine if the item is a lecture or quiz for the numbering
    if (currentSection.items[itemIndex].type === "Lecture") {
      return totalLectures + 1; // Lecture numbering starts from 1
    } else {
      return totalQuizzes + 1; // Quiz numbering starts from 1
    }
  };
  /****************************************************************** */
  return (
    <div className="py-4 px-7 lg:px-10">
      <div>
        <p className="my-2">{t("start_putting_together_your_course")}</p>
        <p>
          {t("use_your")}
          <span className="text-[#5022c3] underline underline-offset-4 cursor-pointer hover:text-[#3b198f]">
            {t("course_outline")}
          </span>{" "}
          {t("structure_content")}
        </p>
      </div>

      {isLoading ? (
        <div className="flex-1 flex justify-center items-center mt-4">
          <Spinner className="h-16 w-16 text-gray-900/50" />
        </div>
      ) : (
        <>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable" type="SECTION">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="my-8"
                >
                  {sections
                    ? sections.map((section, sectionIndex) => (
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
                                <NewSectionForm
                                  sectionIndex={sectionIndex}
                                  sectionId={section._id}
                                  currentSection={section}
                                  setEditSectionIndex={setEditSectionIndex}
                                />
                              ) : (
                                <div
                                  {...provided.dragHandleProps}
                                  className="py-4 px-2 flex gap-4 group"
                                >
                                  <div className="flex gap-2">
                                    <h2 className="font-bold">
                                      {t("section")} {sectionIndex + 1}:
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
                                        onClick={() => {
                                          setEditSectionIndex(sectionIndex);
                                        }}
                                      />
                                      <FaTrash
                                        className="text-xs cursor-pointer"
                                        onClick={() =>
                                          handleDeleteSection(section._id)
                                        }
                                      />
                                    </div>
                                    <div>
                                      <IoIosMenu className="text-2xl" />
                                    </div>
                                  </div>
                                </div>
                              )}

                              <Droppable
                                droppableId={`${sectionIndex}`}
                                type="ITEM"
                              >
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
                                              <EditItemForm
                                                item={item}
                                                sectionIndex={sectionIndex}
                                                itemIndex={itemIndex}
                                                setEditLectureIndex={
                                                  setEditLectureIndex
                                                }
                                                getItemNumber={getItemNumber}
                                                handelSections={handelSections}
                                              />
                                            ) : (
                                              <>
                                                <div
                                                  ref={provided.innerRef}
                                                  {...provided.draggableProps}
                                                  {...provided.dragHandleProps}
                                                  className={`relative mt-4 ${
                                                    params.locale === "en"
                                                      ? "ml-2 md:ml-20 mr-2"
                                                      : "mr-2 md:mr-20 ml-2"
                                                  } p-3 flex items-center border border-gray-600 bg-white group cursor-move`}
                                                >
                                                  <div className=" flex items-center gap-4 flex-1">
                                                    <IoIosCheckmarkCircle className="text-gray-800" />
                                                    <h3 className="font-medium">
                                                      {item.type === "Lecture"
                                                        ? t("lecture")
                                                        : t("quiz")}{" "}
                                                      {getItemNumber(
                                                        sectionIndex,
                                                        itemIndex
                                                      )}
                                                      :
                                                    </h3>
                                                    <div className="flex items-center gap-2">
                                                      {item.type ===
                                                      "Lecture" ? (
                                                        item.item.resource ? (
                                                          <FaPlayCircle />
                                                        ) : (
                                                          <MdOutlineInsertDriveFile />
                                                        )
                                                      ) : (
                                                        <GoQuestion />
                                                      )}
                                                      <p>{item.item.title}</p>
                                                    </div>
                                                    <div className="flex flex-col md:flex-row items-center mx-1 md:mx-0 gap-4 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                                                            item.type,
                                                            item.item._id,
                                                            section._id,
                                                            item._id
                                                          )
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="flex items-center flex-wrap gap-1 md:gap-4">
                                                    {item.type === "Lecture" &&
                                                      !item.item.resource && (
                                                        <>
                                                          <button
                                                            className={`flex items-center gap-1 border text-sm border-gray-800 py-[3px] px-2 font-medium hover:bg-gray-100 ${
                                                              addContent ===
                                                                `${sectionIndex}-${itemIndex}` &&
                                                              "hidden"
                                                            }`}
                                                            onClick={() =>
                                                              setAddContent(
                                                                `${sectionIndex}-${itemIndex}`
                                                              )
                                                            }
                                                          >
                                                            <FaPlus className="text-sm" />
                                                            <span className="hidden md:block">
                                                              {t("content")}
                                                            </span>
                                                          </button>
                                                        </>
                                                      )}
                                                    {item.type === "Quiz" &&
                                                    item.item.questions
                                                      .length === 0 ? (
                                                      <>
                                                        <button
                                                          className={`flex items-center gap-1 border text-sm border-gray-800 py-[3px] px-2 font-medium hover:bg-gray-100 ${
                                                            addQuestion ===
                                                              `${sectionIndex}-${itemIndex}` &&
                                                            "hidden"
                                                          }`}
                                                          onClick={() => {
                                                            setAddQuestion(
                                                              `${sectionIndex}-${itemIndex}`
                                                            );
                                                          }}
                                                        >
                                                          <FaPlus className="text-sm" />{" "}
                                                          {t("question")}
                                                        </button>
                                                      </>
                                                    ) : (
                                                      item.type === "Quiz" && (
                                                        <div
                                                          className="transition duration-300 cursor-pointer"
                                                          onClick={() =>
                                                            setQuizContent(
                                                              quizContent ===
                                                                `${sectionIndex}-${itemIndex}`
                                                                ? null
                                                                : `${sectionIndex}-${itemIndex}`
                                                            )
                                                          }
                                                        >
                                                          <IoChevronDown
                                                            className={`transform transition-transform duration-900 ${
                                                              quizContent ===
                                                              `${sectionIndex}-${itemIndex}`
                                                                ? "rotate-180"
                                                                : ""
                                                            }`}
                                                          />
                                                        </div>
                                                      )
                                                    )}
                                                    {/* Chevron */}
                                                    {item.type === "Lecture" &&
                                                      !addContent && (
                                                        <div
                                                          className="transition duration-300 cursor-pointer"
                                                          onClick={() =>
                                                            setLectureContent(
                                                              lectureContent ===
                                                                `${sectionIndex}-${itemIndex}`
                                                                ? null
                                                                : `${sectionIndex}-${itemIndex}`
                                                            )
                                                          }
                                                        >
                                                          {}
                                                          <IoChevronDown
                                                            className={`transform transition-transform duration-900 ${
                                                              lectureContent ===
                                                              `${sectionIndex}-${itemIndex}`
                                                                ? "rotate-180"
                                                                : ""
                                                            }`}
                                                          />
                                                        </div>
                                                      )}
                                                    <IoIosMenu className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                  </div>
                                                </div>
                                                {addContent ===
                                                  `${sectionIndex}-${itemIndex}` && (
                                                  <AddContentForm
                                                    addVideo={addVideo}
                                                    setAddVideo={setAddVideo}
                                                    id={item.item._id}
                                                    videoAdded={videoAdded}
                                                    setAddContent={
                                                      setAddContent
                                                    }
                                                    courseId={params.id}
                                                  />
                                                )}

                                                {addQuestion ===
                                                  `${sectionIndex}-${itemIndex}` && (
                                                  <AddQuestionForm
                                                    addQuestions={addQuestions}
                                                    setAddQuestions={
                                                      setAddQuestions
                                                    }
                                                    setAddQuestion={
                                                      setAddQuestion
                                                    }
                                                    id={item.item._id}
                                                    SetQuestionId={
                                                      SetQuestionId
                                                    }
                                                    questionId={questionId}
                                                    sections={sections}
                                                    handelSections={
                                                      handelSections
                                                    }
                                                  />
                                                )}
                                                {/* Expanded Content */}
                                                {lectureContent ===
                                                  `${sectionIndex}-${itemIndex}` && (
                                                  <LectureContentExpanded
                                                    item={item.item}
                                                    setLectureContent={
                                                      setLectureContent
                                                    }
                                                    setAddVideo={setAddVideo}
                                                    sectionIndex={sectionIndex}
                                                    itemIndex={itemIndex}
                                                    setAddContent={
                                                      setAddContent
                                                    }
                                                    addContent={addContent}
                                                  />
                                                )}
                                                {quizContent ===
                                                  `${sectionIndex}-${itemIndex}` && (
                                                  <QuizContentExpanded
                                                    item={item.item}
                                                    sectionIndex={sectionIndex}
                                                    itemIndex={itemIndex}
                                                    setAddQuestion={
                                                      setAddQuestion
                                                    }
                                                    setAddQuestions={
                                                      setAddQuestions
                                                    }
                                                    setQuizContent={
                                                      setQuizContent
                                                    }
                                                    SetQuestionId={
                                                      SetQuestionId
                                                    }
                                                  />
                                                )}
                                              </>
                                            )}
                                          </>
                                        )}
                                      </Draggable>
                                    ))}
                                    {provided.placeholder}

                                    {/* Add new curriculum item button */}
                                    <div
                                      className={`my-4 ${
                                        params.locale === "en"
                                          ? "md:ml-20"
                                          : "md:mr-20"
                                      }`}
                                    >
                                      <button
                                        className={`flex items-center gap-2 border border-gray-800 py-[6px] px-3 font-medium transition-all ${
                                          visibleSectionIndex === sectionIndex
                                            ? "border-transparent bg-transparent h-0"
                                            : "hover:bg-gray-100 bg-white"
                                        }`}
                                        onClick={() =>
                                          toggleCurriculumVisibility(
                                            sectionIndex
                                          )
                                        }
                                      >
                                        <FaPlus
                                          className={`transition-transform duration-900 text-xl ${
                                            visibleSectionIndex ===
                                              sectionIndex &&
                                            `${
                                              params.locale === "en"
                                                ? "rotate-45 -translate-x-11 -translate-y-3"
                                                : "-rotate-45 translate-x-11 -translate-y-3"
                                            }`
                                          }`}
                                        />
                                        <span
                                          className={`transition-opacity ${
                                            visibleSectionIndex === sectionIndex
                                              ? "opacity-0 hidden"
                                              : "opacity-100"
                                          }`}
                                        >
                                          {t("curriculumItem")}
                                        </span>
                                      </button>

                                      {/* Add lecture or quiz only for the visible section */}
                                      {visibleSectionIndex === sectionIndex &&
                                        lectureFormVisible !== sectionIndex &&
                                        quizFormVisible !== sectionIndex && (
                                          <div
                                            className={`flex gap-4 border border-black border-dashed bg-white ${
                                              params.locale === "en"
                                                ? "mr-2"
                                                : "ml-2"
                                            }  p-4`}
                                          >
                                            <button
                                              className="flex items-center text-violet-800 hover:text-violet-950 gap-2"
                                              onClick={() =>
                                                handleLectureFormVisibility(
                                                  sectionIndex
                                                )
                                              }
                                            >
                                              <FaPlus />
                                              <p className="font-bold">
                                                {t("lecture")}
                                              </p>
                                            </button>

                                            <button
                                              className="flex items-center text-violet-800 hover:text-violet-950 gap-2"
                                              onClick={() =>
                                                handleQuizFormVisibility(
                                                  sectionIndex
                                                )
                                              }
                                            >
                                              <FaPlus />
                                              <p className="font-bold">
                                                {t("quiz")}
                                              </p>
                                            </button>
                                          </div>
                                        )}

                                      {lectureFormVisible === sectionIndex && (
                                        <NewLectureForm
                                          sectionIndex={sectionIndex}
                                          sectionId={section._id}
                                          setLectureFormVisible={
                                            setLectureFormVisible
                                          }
                                          handleAddItem={handleAddItem}
                                        />
                                      )}
                                      {quizFormVisible === sectionIndex && (
                                        <NewQuizForm
                                          sectionId={section._id}
                                          sectionIndex={sectionIndex}
                                          setQuizFormVisible={
                                            setQuizFormVisible
                                          }
                                          handleAddItem={handleAddItem}
                                        />
                                      )}
                                    </div>
                                  </div>
                                )}
                              </Droppable>
                            </div>
                          )}
                        </Draggable>
                      ))
                    : ""}
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
                  isFormVisible
                    ? `${
                        params.locale === "en"
                          ? "-rotate-45 -translate-x-4"
                          : "rotate-45 translate-x-4"
                      }`
                    : ""
                }`}
              />
              <span
                className={`transition-opacity ${
                  isFormVisible ? "opacity-0 hidden" : "opacity-100"
                }`}
              >
                {t("section")}
              </span>
            </button>
          </div>
        </>
      )}

      {/* Section Form */}
      {isFormVisible && (
        <ExpandedSection
          courseId={params.id}
          formVisibility={setFormVisible}
          onAddSection={handleAddSection}
        />
      )}
    </div>
  );
};

export default Curriculum;
