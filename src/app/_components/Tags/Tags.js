import React from "react";

const Tags = ({ tags }) => {
  return (
    <>
      <div className="my-9">
        {tags.map((tag) => (
          <a key={tag._id}>
            <span className="font-bold text-slate-800 border-slate-800 border cursor-pointer rounded-full mr-3 p-3 my-10 hover:bg-gray-100">
              {tag.name}
            </span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Tags;
