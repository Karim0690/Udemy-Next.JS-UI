import { Progress } from "@/components/ui/progress";
import Rating from "../Rating/Rating";

const ratingsData = [
  { value: 60, stars: 5, percentage: '62%' },
  { value: 30, stars: 4, percentage: '30%' },
  { value: 6, stars: 3, percentage: '6%' },
  { value: 2, stars: 2, percentage: '1%' },
  { value: 1, stars: 1, percentage: '1%' },
];

export default function RatingsProgress() {
  return (
    <div className="flex flex-col items-start gap-2">
      {ratingsData.map((rating, index) => (
        <div key={index} className="flex items-center gap-4">
          <Progress value={rating.value} className="h-2 w-[300px] bg-gray-200 " />
          <div className="flex items-center gap-1">
            <Rating ratingValue={rating.stars} readOnly={true} />
            <p className="text-sm text-indigo-600">{rating.percentage}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
