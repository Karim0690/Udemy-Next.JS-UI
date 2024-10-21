"use client";
import useCourseStore from "@/app/store/courseStore";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";
import React, { useEffect } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

const QuizContentExpanded = ({
  item,
  itemIndex,
  sectionIndex,
  setAddQuestion,
  setAddQuestions,
  setQuizContent,
  SetQuestionId,
}) => {
  const { quizContent, fetchQuiz } = useCourseStore();

  useEffect(() => {
    if (item._id) {
      fetchQuiz(item._id);
    }
  }, [item._id, fetchQuiz]);

  const handleRemoveQuestion = async (Qid) => {
    await axios.delete(`${process.env.NEXT_PUBLIC_LOCAL_API}/questions/${Qid}`);
    fetchQuiz(item._id);
  };

  const onDragEnd = async (result) => {
    if (!result.destination) return;

    // Handle reordering logic here
    const updatedQuestions = Array.from(quizContent.questions);
    const [movedQuestion] = updatedQuestions.splice(result.source.index, 1);
    updatedQuestions.splice(result.destination.index, 0, movedQuestion);

    // Update your state here with the new order
    await axios.put(
      `${process.env.NEXT_PUBLIC_LOCAL_API}/quizzes/${item._id}`,
      {
        questions: updatedQuestions.map((q) => q._id),
      }
    );
  };

  return (
    <>
      <div className="bg-white gap-2 border border-black border-t-0 p-2 ml-20 mr-2">
        <div className="flex flex-1 gap-4 items-center my-2">
          <h3 className="font-bold">Questions</h3>
          <button
            className="border border-black py-1 px-4 text-sm font-semibold"
            onClick={() => {
              setAddQuestion(`${sectionIndex}-${itemIndex}`);
              setQuizContent(null);
            }}
          >
            New Question
          </button>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="questions">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {quizContent &&
                  quizContent.questions.map((question, index) => (
                    <Draggable
                      key={question._id}
                      draggableId={question._id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="py-2 flex flex-1 justify-between group text-sm"
                        >
                          <div className="flex gap-1">
                            <span className="font-medium">{index + 1}.</span>
                            <div className="flex gap-1">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: question.question,
                                }}
                              />
                              <span>Multiple Choice</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100">
                            <FaPen
                              className="text-xs cursor-pointer"
                              onClick={() => {
                                setAddQuestion(`${sectionIndex}-${itemIndex}`);
                                setQuizContent(null);
                                setAddQuestions(false);
                                SetQuestionId(question._id);
                              }}
                            />
                            <FaTrash
                              className="text-xs cursor-pointer"
                              onClick={() => {
                                handleRemoveQuestion(question._id);
                              }}
                            />
                            <IoIosMenu className="text-xl cursor-pointer" />
                          </div>
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
    </>
  );
};

export default QuizContentExpanded;
