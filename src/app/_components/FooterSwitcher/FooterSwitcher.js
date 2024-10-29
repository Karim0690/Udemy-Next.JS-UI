"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { CiGlobe } from "react-icons/ci";

const FooterSwitcher = () => {
  const router = useRouter();
  const { locale } = useParams();
  const t = useTranslations("Footer");

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button className="text-white border-white border-solid border-2  h-12 min-w-40">
            <div className="flex justify-start px-6 gap-4">
              <CiGlobe className="text-2xl " />
              {locale === "en" ? (
                <span> {t("en")} </span>
              ) : (
                <span> {t("ar")} </span>
              )}
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] flex flex-col bg-white items-start justify-start flex-1">
          <DialogHeader>
            <DialogTitle className="m-3">{t("lang")}</DialogTitle>
          </DialogHeader>
          <button
            className={`w-full text-left p-2 ${
              locale === "en" && "border border-black"
            }`}
            onClick={() => {
              router.push("/en");
            }}
          >
            {t("en")}
          </button>
          <button
            className={`w-full text-left p-2 ${
              locale === "ar" && "border border-black"
            }`}
            onClick={() => {
              router.push("/ar");
            }}
          >
            {t("ar")}
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FooterSwitcher;
