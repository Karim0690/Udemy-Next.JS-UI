import React from "react";
import RichText2 from "../../_components/RichText2/RichText2";

const CourseMessages = ({ course, setMessages }) => {
  return (
    <>
      <div className="py-9 px-7 lg:px-12 lg:w-[90%]">
        <h2>
          Write messages to your students (optional) that will be sent
          automatically when they join or complete your course to encourage
          students to engage with course content. If you do not wish to send a
          welcome or congratulations message, leave the text box blank.
        </h2>
        <div className="my-4">
          <label className="block text-gray-700 font-bold mb-2">
            Welcome message
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
            Congratulations Message
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
