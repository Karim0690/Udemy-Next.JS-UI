"use client";
import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import CodeBlock from "@tiptap/extension-code-block";

const Tiptap = ({ onChange, content }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
      // Disable immediate rendering to capture onChange properly
      immediatelyRender: false,
    },
    onUpdate: ({ editor }) => {
      // Update content on change
      onChange(editor.getHTML()); // This captures spaces correctly
    },
  });

  if (!isMounted) {
    return null;
  }

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
