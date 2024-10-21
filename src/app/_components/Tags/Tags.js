import React from "react";

const Tags = ({ tags }) => {
  return (
    <>
      <div className="my-9">
        {tags.reverse().map((tag) => (
          <a key={tag}>
            <span className="text-xl font-bold text-slate-800 border-slate-800 border-2 cursor-pointer rounded-3xl mr-3 p-3 my-10 opacity-100 hover:opacity-50 transition-opacity duration-200">
              {tag}
            </span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Tags;
