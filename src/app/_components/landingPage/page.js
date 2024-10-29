import cover from "@/app/assest/cover.jpg";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

function LandingPage() {
  const t = useTranslations("LandingPage");
  return (
    <>
      <div className="relative">
        <div className="bg-white absolute p-5 top-10 left-10 lg:p-6 w-[300px] lg:w-1/3 lg:top-20 lg:left-28 ">
          <h1 className="text-xl lg:text-4xl font-bold pb-4 text-gray-700">
            {t("baner")}
          </h1>
          <p className="text-[12px] lg:text-lg text-gray-600">
            {t("banerDescription")}
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
