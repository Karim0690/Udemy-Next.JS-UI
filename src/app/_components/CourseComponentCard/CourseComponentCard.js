import StarRating from "../RatingStars/RatingStars";
import Image from "next/image";

function CourseComponentCard({ image, title, instractour, rate, price }) {
  return (
    <>
      <div className="m-3 hover:cursor-pointer group">
        <div className="border relative">
          <Image
            src={image || ""}
            width={220}
            height={130}
            alt="Descriptive text about the image"
            className="w-full h-[130px]"
          />
          <div className="hidden group-hover:block absolute inset-0 p-2 w-full h-full text-white bg-gray-800 opacity-20 transition-opacity duration-300"></div>{" "}
        </div>
        <h1 className="text-base font-bold overflow-hidden line-clamp-2">
          {title}
        </h1>
        <p className="text-xs text-gray-500">{instractour}</p>
        <div className="flex items-center">
          <h2 className="text-sm font-semibold">{rate}</h2>
          <span className="ml-2">
            <StarRating rating={rate} />
          </span>
          <span className="text-xs text-gray-600 ml-2">(316)</span>
        </div>
        <h1 className="text-base font-bold">{price}</h1>
      </div>
    </>
  );
}

export default CourseComponentCard;
