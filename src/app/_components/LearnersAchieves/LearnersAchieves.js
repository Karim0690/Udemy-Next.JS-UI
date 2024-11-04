"use client";

import styles from "./page.module.css";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslations } from "next-intl";
import { Grid, Navigation } from "swiper/modules";

const SampleNextArrow = ({ onClick, isHidden }) => (
  <div
    className={`custom-next-arrow ${isHidden ? "hidden" : ""}`}
    style={{
      display: isHidden ? "none" : "flex",
      justifyContent: "center",
      alignItems: "center",
      right: "-30px",
      backgroundColor: "#252525",
      position: "absolute",
      zIndex: 10,
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      top: "125px",
    }}
    onClick={onClick}
  >
    <FaChevronRight style={{ color: "white", fontSize: "16px" }} />
  </div>
);

// Custom Previous Arrow
const SamplePrevArrow = ({ onClick, isHidden }) => (
  <div
    className={`custom-prev-arrow ${isHidden ? "hidden" : ""}`}
    style={{
      display: isHidden ? "none" : "flex",
      justifyContent: "center",
      alignItems: "center",
      left: "-30px",
      backgroundColor: "#252525",
      position: "absolute",
      zIndex: 10,
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      top: "125px",
    }}
    onClick={onClick}
  >
    <FaChevronLeft style={{ color: "white", fontSize: "16px" }} />
  </div>
);

const LearnersAchieves = () => {
  const { locale } = useParams();
  const t = useTranslations("LandingPage");
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div className={`bg-gray-100 my-20 p-10`}>
      <h1 className={`text-2xl my-4 font-bold mx-12 `}>{t("sliderH")}</h1>
      <div className="relative">
        <SamplePrevArrow
          onClick={() => {
            if (locale === "ar") {
              if (swiperRef.current) swiperRef.current.slideNext();
            } else {
              if (swiperRef.current) swiperRef.current.slidePrev();
            }
          }}
          isHidden={locale === "ar" ? isEnd : isBeginning} // Update isHidden based on locale
        />
        <SampleNextArrow
          onClick={() => {
            if (locale === "ar") {
              if (swiperRef.current) swiperRef.current.slidePrev();
            } else {
              if (swiperRef.current) swiperRef.current.slideNext();
            }
          }}
          isHidden={locale === "ar" ? isBeginning : isEnd} // Update isHidden based on locale
        />
        <Swiper
          ref={swiperRef}
          className="h-[350px] mx-auto"
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={({ isBeginning, isEnd }) => {
            setIsBeginning(isBeginning);
            setIsEnd(isEnd);
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: -50,
            },
          }}
        >
          <SwiperSlide>
            <div
              className={`${styles.achieves} border border-gray-500 p-5 bg-white`}
            >
              <div className={styles.mainContent}>
                <Image
                  src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                  width="18"
                  height="16"
                  alt="quote"
                  className="my-2"
                />
                <span>
                  {t("slider1")}
                  <span className={styles.udTextBold}>{t("slider12")}</span>
                  {t("slider13")}
                </span>
              </div>
              <div className="my-2">
                <div className={`${styles.udAvatar} ${styles.udHeadingSm}`}>
                  WA
                </div>
                <span className="mx-2">Will A</span>
              </div>
              <hr className="border-t border-gray-500 my-4" />
              <div className="flex justify-center items-center my-2">
                <div className="bg-[#5022c3] w-10 h-10 rounded-full flex justify-center items-center">
                  <FontAwesomeIcon
                    className="w-20 text-white p-2 ml-1"
                    icon={faPlay}
                  />
                </div>
                <span className="text-[#5022c3] mx-2 font-bold">
                  {t("slider14")}
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${styles.achieves} border border-gray-500 p-5 bg-white`}
            >
              <div className={styles.mainContent}>
                <Image
                  src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                  width="18"
                  height="16"
                  alt="quote"
                  className="my-2"
                />
                <span>
                  {t("slider2")}
                  <span className={styles.udTextBold}>{t("slider22")}</span>
                  {t("slider23")}
                </span>
              </div>
              <div className="my-2">
                <div className={`${styles.udAvatar} ${styles.udHeadingSm}`}>
                  RF
                </div>
                <span className="mx-2">Ron F</span>
              </div>
              <hr className="border-t border-gray-500 my-4" />
              <div className="flex justify-center items-center my-2">
                <div className="bg-[#5022c3] w-10 h-10 rounded-full flex justify-center items-center">
                  <FontAwesomeIcon
                    className="w-20 text-white p-2 ml-1"
                    icon={faPlay}
                  />
                </div>
                <span className="text-[#5022c3] mx-2 font-bold">
                  {t("slider24")}
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${styles.achieves} border border-gray-500 p-5 bg-white`}
            >
              <div className={styles.mainContent}>
                <Image
                  src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                  width="18"
                  height="16"
                  alt="quote"
                  className="my-2"
                />
                <span>
                  {t("slider3")}

                  <span className={styles.udTextBold}> {t("slider32")}</span>
                </span>
              </div>
              <div className="my-2">
                <div className={`${styles.udAvatar} ${styles.udHeadingSm}`}>
                  PW
                </div>
                <span className="mx-2">Phillip W</span>
              </div>
              <hr className="border-t border-gray-500 my-4" />
              <div className="flex  items-center my-2">
                <div className="bg-[#5022c3] w-10 h-10 rounded-full flex justify-center items-center">
                  <FontAwesomeIcon
                    className="w-20 text-white p-2 ml-1"
                    icon={faPlay}
                  />
                </div>
                <span className="text-[#5022c3] mx-2 font-bold">
                  {t("slider33")}
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${styles.achieves} border border-gray-500 p-5 bg-white`}
            >
              <div className={styles.mainContent}>
                <Image
                  src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                  width="18"
                  height="16"
                  alt="quote"
                  className="my-2"
                />
                <span>
                  {t("slider4")}

                  <span className={styles.udTextBold}>{t("slider42")}</span>
                  {t("slider43")}
                </span>
              </div>
              <div className="my-2">
                <div className={`${styles.udAvatar} ${styles.udHeadingSm}`}>
                  WA
                </div>
                <span className="mx-2">Will A</span>
              </div>
              <hr className="border-t border-gray-500 my-4" />
              <div className="flex justify-center items-center my-2">
                <div className="bg-[#5022c3] w-10 h-10 rounded-full flex justify-center items-center">
                  <FontAwesomeIcon
                    className="w-20 text-white p-2 ml-1"
                    icon={faPlay}
                  />
                </div>
                <span className="text-[#5022c3] mx-2 font-bold">
                  {t("slider44")}
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default LearnersAchieves;
