"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Toolbar from "./Toolbar";
import { useEffect } from "react";

const Tiptap = ({ onChange, content,placeholder }) => {
  // Initialize the editor with content
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: placeholder,
        defaultNode: "paragraph",
      }),
    ],
    content, // Set the initial content
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border border-gray-800 w-full focus:outline-none min-h-[70px]",
      },
    },
    onUpdate: ({ editor }) => {
      // Update content on change
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  return (
    <>
      <div className="w-full">
        <Toolbar editor={editor} />
        <EditorContent
          editor={editor}
          className="appearance-none"
          style={{ whiteSpace: "pre-line" }}
        />
      </div>
    </>
  );
};

export default Tiptap;
