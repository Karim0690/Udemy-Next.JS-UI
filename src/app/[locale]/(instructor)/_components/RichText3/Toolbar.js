import React from "react";
import { VscListOrdered } from "react-icons/vsc";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdFormatItalic } from "react-icons/md";
import { BsTypeBold } from "react-icons/bs";

const Toolbar = ({ editor, content }) => {
  if (!editor) {
    return null;
  }
  return (
    <>
      <div className="flex items-center w-full flex-wrap border border-black border-b-0">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={`p-3
            ${
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
          className={`p-3
            ${
              editor.isActive("italic")
                ? "bg-gray-800 text-white"
                : "text-black"
            }`}
        >
          <MdFormatItalic className="text-xl" />
        </button>
        {/* Italic */}
      </div>
    </>
  );
};

export default Toolbar;
