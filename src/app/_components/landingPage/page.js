import Image from "next/image";
import cover from "@/app/assest/cover.jpg";
function LandingPage() {
  return (
    <>
      <div className="relative">
          <div className="bg-white absolute p-5 top-10 left-10 lg:p-6 w-[300px] lg:w-1/3 lg:top-20 lg:left-28 ">
            <h1 className="text-xl lg:text-4xl font-bold pb-4 text-gray-700">
              Keep moving up
            </h1>
            <p className="text-[12px] lg:text-lg text-gray-600">
              Learn the skills you need to take the next step — and every step
              after. Courses from E£249.99 through Sept 24.
            </p>
          </div>
        <div>
          <Image
            src={cover}
            width={1340}
            height={400}
            alt="Description"
            className="md:w-full lg:w-[95%] m-auto"
          />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
