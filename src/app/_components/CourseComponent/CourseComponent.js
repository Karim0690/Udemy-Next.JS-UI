function CourseComponent({ title, content, button }) {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold my-4">{title}</h1>
        <p className="text-sm w-[60%]">{content}</p>
        <button className="text-black font-medium text-sm border border-gray-500 p-2 mt-4 hover:cursor-pointer hover:bg-gray-200">
          {button}
        </button>
      </div>
    </>
  );
}

export default CourseComponent;
