"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Placeholder from "@tiptap/extension-placeholder";
import CodeBlock from "@tiptap/extension-code-block";

const Tiptap = ({ onChange, content }) => {
  const maxChars = 1000;

  const editor = useEditor({
    extensions: [
      StarterKit,
      BulletList,
      ListItem,
      OrderedList,
      CodeBlock.configure({
        HTMLAttributes: {
          class: "code-block",
        },
      }),
      Placeholder.configure({
        placeholder: "Insert your course description.",
        defaultNode: "paragraph",
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border border-gray-800 w-full focus:outline-none min-h-[70px]",
      },
    },
    onUpdate: ({ editor }) => {
      const text = editor.getText();
      if (text.length <= maxChars) {
        onChange(editor.getHTML());
      }
    },
    immediatelyRender: false,
  });

  const charCount = editor ? editor.getText().length : 0;

  return (
    <>
      <div className="w-full">
        <Toolbar editor={editor} charCount={charCount} maxChars={maxChars} />
        <EditorContent
          style={{ whiteSpace: "pre-line" }}
          editor={editor}
          className="appearance-none"
        />
      </div>
    </>
  );
};

export default Tiptap;
