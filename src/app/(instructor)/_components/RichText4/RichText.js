"use client";
import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import CodeBlock from "@tiptap/extension-code-block";

const Tiptap = ({ onChange, content }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlock.configure({
        HTMLAttributes: {
          class: "code-block",
        },
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border border-gray-800 w-full focus:outline-none min-h-[50px]",
      },
      immediatelyRender: false,
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML()); // Update content on change
    },
  });

  // Update editor content if the prop changes
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content); // Update editor content when prop changes
    }
  }, [content, editor]);

  return (
    <div className="w-full">
      <Toolbar editor={editor} />
      <EditorContent
        style={{ whiteSpace: "pre-line" }}
        editor={editor}
        className="appearance-none"
      />
    </div>
  );
};

export default Tiptap;
