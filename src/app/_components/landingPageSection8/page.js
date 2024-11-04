import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

function LandingPageSection8() {
  const t = useTranslations("LandingPage");

  return (
    <>
      <div>
        <div className="bg-gray-100 my-20 p-10 flex">
          <div className="flex flex-col lg:flex-row gap-4 w-full">
            <div className="flex-1">
              <div className={`flex [dir="ltr"]`}>
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Image
                    alt=""
                    src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                    className="h-8 w-auto"
                    width={91}
                    height={34}
                  />
                </Link>
                <h1 className="text-2xl font-bold text-[#a435f0]">Busniss</h1>
              </div>
              <h2 className="text-4xl font-bold mt-6">{t("Businessbaner1")}</h2>
              <ul className="mt-6 space-y-6 list-disc pl-6 ">
                <li className="text-base font-large">{t("Businessbaner2")}</li>
                <li className="text-base font-large">{t("Businessbaner3")}</li>
                <li className="text-base font-large">{t("Businessbaner4")}</li>
              </ul>

              <div>
                <button className="bg-black text-white font-bold p-2 py-2 mt-10 ">
                  {t("BusinessbanerButton1")}
                </button>
                <button className=" border border-black font-bold px-4 py-2 mt-10 ml-2 rounded-md">
                  {t("BusinessbanerButton2")}
                </button>
              </div>
            </div>

            <div className="flex flex-1 justify-center items-center">
              <Image
                alt=""
                src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg"
                width="500"
                height="500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPageSection8;
