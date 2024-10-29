import React from "react";
import { VscListOrdered } from "react-icons/vsc";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdFormatItalic } from "react-icons/md";
import { BsTypeBold } from "react-icons/bs";
import { IoCodeSharp } from "react-icons/io5";

const Toolbar = ({ editor, charCount, maxChars }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="flex items-center justify-between w-full flex-wrap border border-black border-b-0">
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleBold().run();
            }}
            className={`p-3 ${
              editor.isActive("bold") ? "bg-gray-800 text-white" : "text-black"
            }`}
          >
            <BsTypeBold className="text-xl" />
          </button>
          {/* Bold */}
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleItalic().run();
            }}
            className={`p-3 ${
              editor.isActive("italic")
                ? "bg-gray-800 text-white"
                : "text-black"
            }`}
          >
            <MdFormatItalic className="text-xl" />
          </button>
          {/* Italic */}
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleBulletList().run();
            }}
            className={`p-3`}
          >
            <AiOutlineUnorderedList className="text-xl" />
          </button>
          {/* Unordered */}
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleOrderedList().run();
            }}
            className={`p-3`}
          >
            <VscListOrdered className="text-xl" />
          </button>
          {/* Ordered */}
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleCodeBlock().run();
            }}
            className={`p-3`}
          >
            <IoCodeSharp className="text-xl" />
          </button>
          {/* Code Block */}
        </div>
        <span className="text-gray-500 font-medium px-4">
          {maxChars - charCount}
        </span>
      </div>
    </>
  );
};

export default Toolbar;
