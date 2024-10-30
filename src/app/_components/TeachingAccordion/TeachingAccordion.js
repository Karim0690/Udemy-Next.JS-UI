import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function TeachingAccordion() {
  const t = useTranslations("Teaching");

  return (
    <Accordion type="single" collapsible className="w-full font-sans	">
      <AccordionItem value="item-1">
        <AccordionTrigger> {t("curriculum")}</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col justify-center items-center text-left">
            <div className="order-2">
              <p className="text-base ml-10">{t("ct1")}</p>
              <p className="text-base mt-2 ml-10">{t("ct2")}</p>
              <h3 className="text-xl font-bold my-6 text-gray-800">
                {t("ct3")}
              </h3>
              <p className="text-base mt-2 ml-10">{t("ct4")}</p>
            </div>
            <div>
              <Image
                src="https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg"
                width={480}
                height={480}
                alt=""
                className="order-1"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger> {t("video")}</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col justify-center items-center text-left">
            <div className="order-2">
              <p className="text-base ml-10">{t("v1")}</p>
              <p className="text-base mt-2 ml-10">{t("v2")}</p>
              <h3 className="text-xl font-bold my-6 text-gray-800">
                {t("v3")}
              </h3>
              <p className="text-base mt-2 ml-10">{t("v4")}</p>
            </div>
            <div>
              <Image
                src="https://s.udemycdn.com/teaching/record-your-video-v3.jpg"
                width={480}
                height={480}
                alt=""
                className="order-1"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger> {t("course")}</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col justify-center items-center text-left">
            <div className="order-2">
              <p className="text-base ml-10">{t("c1")}</p>
              <p className="text-base mt-2 ml-10">{t("c2")}</p>
              <h3 className="text-xl font-bold my-6 text-gray-800">
                {t("c3")}
              </h3>
              <p className="text-base mt-2 ml-10">{t("c4")}</p>
            </div>
            <div>
              <Image
                src="https://s.udemycdn.com/teaching/launch-your-course-v3.jpg"
                width={480}
                height={480}
                alt=""
                className="order-1"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
