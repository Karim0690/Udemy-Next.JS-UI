import StarRating from "../RatingStars/RatingStars";
import Image from "next/image";

function CourseComponentCard({ image, title, instractour, rate, price }) {
  return (
    <>
      <div className="m-3">
        <div className="border border-gray-200">
          <Image
            src={image}
            width={270}
            height={170}
            alt=""
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-sm font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">
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
