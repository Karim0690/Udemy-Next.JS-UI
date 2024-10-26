function CourseComponent({ title, content, button }) {
  return (
    <>
      <div>
        <h1 className="text-3xl my-4">{title}</h1>
        <p className="text-lg">{content}</p>
        <button className="text-black border border-gray-500 p-3 mt-4 hover:cursor-pointer hover:bg-gray-200">
          {button}
        </button>
      </div>
    </>
  );
}

export default CourseComponent;
