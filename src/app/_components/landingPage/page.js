import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

function LandingPage() {
  const t = useTranslations("LandingPage");
  return (
    <>
      <div className="relative">
        <div className="container mx-auto">
          <Image
            src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/dc2e45a0-867c-45bf-badb-ca6637f41ed6.jpg"
            width={1340}
            height={400}
            alt="Description"
            className="md:w-full  m-auto"
          />
        </div>
        <div className="bg-white md:absolute p-5 top-10 left-10 lg:p-6 w-[300px] lg:w-1/3 lg:top-20 lg:left-28 ">
          <h1 className="text-xl lg:text-4xl font-bold pb-4 text-gray-700">
            {t("baner")}
          </h1>
          <p className="text-[12px] lg:text-lg text-gray-600">
            {t("banerDescription")}
          </p>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
