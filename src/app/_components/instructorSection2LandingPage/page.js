import ReuseableInstructorCard from "@/app/[locale]/(instructor)/instructor/reuseableInstructorCard/page";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaChalkboardTeacher } from "react-icons/fa";
import {
  MdOutlineOndemandVideo,
  MdQuestionAnswer,
  MdHelpCenter,
  MdInsights,
} from "react-icons/md";

function InstructorSection2LandingPage({ locale }) {
  const t = useTranslations("CoursesPage");

  return (
    <>
      <h1
        className={`text-center text-gray-700 my-20 ${
          locale === "en" ? "md:ml-20 ml-10 mr-10" : "md:mr-20 mr-10 ml-10"
        } `}
      >
        {t("t1")}
      </h1>
      <div
        className={`${
          locale === "en" ? "md:ml-20 md:mr-10" : "md:mr-20 md:ml-10"
        }`}
      >
        <ReuseableInstructorCard
          image="https://s.udemycdn.com/instructor/dashboard/engaging-course.jpg"
          name={t("cardt1")}
          des={t("cardd1")}
        />
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <ReuseableInstructorCard
              image="https://s.udemycdn.com/instructor/dashboard/video-creation.jpg"
              name={t("cardt2")}
              des={t("cardd2")}
            />
          </div>
          <div className="flex-1">
            <ReuseableInstructorCard
              image="https://s.udemycdn.com/instructor/dashboard/build-audience.jpg"
              name={t("cardt3")}
              des={t("cardd3")}
            />
          </div>
        </div>
        <ReuseableInstructorCard
          image="https://s.udemycdn.com/instructor/dashboard/newcomer-challenge.jpg"
          name={t("cardt4")}
          des={t("cardd4")}
        />
      </div>
      <h1
        className={`text-center text-gray-700 my-20 ${
          locale === "en" ? "md:ml-20 ml-10 mr-10" : "md:mr-20 mr-10 ml-10"
        } `}
      >
        {t("t2")}
      </h1>

      <div
        className={`${
          locale === "en" ? "md:ml-20 ml-10 mr-10" : "md:mr-20 mr-10 ml-10"
        } lg:mx-auto pb-20 my-20 flex flex-wrap gap-5 justify-center items-baseline`}
      >
        <div className="flex justify-center items-center flex-col ">
          <Link
            href="test-video/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center max-w-[230px]"
          >
            <MdOutlineOndemandVideo size={50} />
            <span className="underline text-[#5022c3] font-bold mt-2">
              {t("help")}
            </span>
            <div className="mt-2">{t("helpd")}</div>
          </Link>
        </div>
        <div className="flex justify-center items-center flex-col">
          <Link
            href="test-video/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center max-w-[230px]"
          >
            <MdQuestionAnswer size={50} />
            <span className="underline text-[#5022c3] font-bold mt-2">
              {t("insights")}
            </span>
            <div className=" mt-2">{t("insightsd")}</div>
          </Link>
        </div>
        <div className="flex justify-center items-center flex-col">
          <Link
            href="test-video/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center max-w-[230px]"
          >
            <FaChalkboardTeacher size={50} />
            <span className="underline text-[#5022c3] font-bold mt-2">
              {t("teaching")}
            </span>
            <div className=" mt-2">{t("teachingd")}</div>
          </Link>
        </div>
        <div className="flex justify-center items-center flex-col">
          <Link
            href="test-video/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center max-w-[230px]"
          >
            <MdInsights size={50} />
            <span className="underline text-[#5022c3] font-bold mt-2">
              {t("community")}
            </span>
            <div className=" mt-2">{t("communityd")}</div>
          </Link>
        </div>
        <div className="flex justify-center items-center flex-col">
          <Link
            href="test-video/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center max-w-[230px]"
          >
            <MdHelpCenter size={50} />
            <span className="underline text-[#5022c3] font-bold mt-2">
              {t("test")}
            </span>
            <div className=" mt-2">{t("testd")}</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default InstructorSection2LandingPage;
