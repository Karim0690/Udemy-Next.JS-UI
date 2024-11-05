"use client";

import Toolbar from "./Toolbar";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Placeholder from "@tiptap/extension-placeholder";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = ({ onChange, content, placeholder }) => {
  // Handle editor content change
  const handleChange = (content) => {
    onChange(content);
  };

  // Initialize the editor with desired extensions and properties
  const editor = useEditor({
    extensions: [
      StarterKit,
      BulletList,
      OrderedList,
      Placeholder.configure({
        placeholder: placeholder,
        defaultNode: "paragraph",
      }),
    ],
    content, // Initial content
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border border-gray-800 w-full focus:outline-none min-h-[70px]",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML()); // Handle content changes
    },
  });

  // Ensure the editor is initialized before rendering EditorContent
  if (!editor) {
    return null; // Prevent rendering until editor is ready
  }

  return (
    <div className="w-full">
      <Toolbar editor={editor} content={content} />
      <EditorContent
        style={{ whiteSpace: "pre-line" }} // Maintain whitespace formatting
        editor={editor}
        className="appearance-none"
      />
    </div>
  );
};

export default Tiptap;
