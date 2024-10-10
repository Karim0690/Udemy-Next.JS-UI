import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme CSS

const LandingPageSection4 = () => {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <>
      <div className="bg-gray-100 my-20 p-10">
        <h1 className="text-2xl my-4 font-bold">
          How learners like you are achieving their goals
        </h1>
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="w-1/4 border border-gray-500 p-5 ml-4 bg-white">
            <div className={styles.mainContent}>
              <Image
                src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                width="18"
                height="16"
                alt="quote"
                className="my-2"
              />
              <span>
                I am proud to say that after a few months of taking this
                course...
                <span className={styles.udTextBold}>
                  I passed my exam and am now an AWS Certified Cloud
                  Practitioner!
                </span>
                This content was exactly what the CCP exam covered.
              </span>
            </div>
            <div className="my-2">
              <div className={`${styles.udAvatar} ${styles.udHeadingSm}`}>
                WA
              </div>
              <span className="mx-2">Will A</span>
            </div>
            <hr className="border-t border-gray-500 my-4" />
            <div className="flex justify-center my-2">
              <div className="bg-[#5022c3] w-10 h-10 rounded-full flex justify-center">
                <FontAwesomeIcon
                  className="w-20 text-white p-2 ml-1"
                  icon={faPlay}
                />
              </div>
              <span className="text-[#5022c3] mx-2 font-bold">
                [NEW] Ultimate AWS Certified Cloud Practitioner - 2022
              </span>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="w-1/4 border border-gray-500 p-5 ml-4 bg-white">
            <div className={styles.mainContent}>
              <Image
                src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                width="18"
                height="16"
                alt="quote"
                className="my-2"
              />
              <span>
                This course helped me{" "}
                <span className={styles.udTextBold}>
                  freshen up on my product manager skills and land a job at
                  Facebook!
                </span>
                Thanks guys :)
              </span>
            </div>
            <div className="my-2">
              <div className={`${styles.udAvatar} ${styles.udHeadingSm}`}>
                RF
              </div>
              <span className="mx-2">Ron F</span>
            </div>
            <hr className="border-t border-gray-500 my-4" />
            <div className="flex justify-center my-2">
              <div className="bg-[#5022c3] w-10 h-10 rounded-full flex justify-center">
                <FontAwesomeIcon
                  className="w-20 text-white p-2 ml-1"
                  icon={faPlay}
                />
              </div>
              <span className="text-[#5022c3] mx-2 font-bold">
                Become a Product Manager | Learn the Skills & Get the Job
              </span>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="w-1/4 border border-gray-500 p-5 ml-4 bg-white">
            <div className={styles.mainContent}>
              <Image
                src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                width="18"
                height="16"
                alt="quote"
                className="my-2"
              />
              <span>
                One of the best courses on management and leadership I have come
                across so far. The advice is practical, and examples highly
                relatable.
                <span className={styles.udTextBold}>
                  {" "}
                  Would help anyone become a better manager.
                </span>
              </span>
            </div>
            <div className="my-2">
              <div className={`${styles.udAvatar} ${styles.udHeadingSm}`}>
                PW
              </div>
              <span className="mx-2">Phillip W</span>
            </div>
            <hr className="border-t border-gray-500 my-4" />
            <div className="flex justify-center my-2">
              <div className="bg-[#5022c3] w-10 h-10 rounded-full flex justify-center">
                <FontAwesomeIcon
                  className="w-20 text-white p-2 ml-1"
                  icon={faPlay}
                />
              </div>
              <span className="text-[#5022c3] mx-2 font-bold">
                Leadership : Practical Leadership Skills
              </span>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="w-1/4 border border-gray-500 p-5 ml-4 bg-white">
            <div className={styles.mainContent}>
              <Image
                src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                width="18"
                height="16"
                alt="quote"
                className="my-2"
              />
              <span>
                I am proud to say that after a few months of taking this
                course...
                <span className={styles.udTextBold}>
                  I passed my exam and am now an AWS Certified Cloud
                  Practitioner!
                </span>
                This content was exactly what the CCP exam covered.
              </span>
            </div>
            <div className="my-2">
              <div className={`${styles.udAvatar} ${styles.udHeadingSm}`}>
                WA
              </div>
              <span className="mx-2">Will A</span>
            </div>
            <hr className="border-t border-gray-500 my-4" />
            <div className="flex justify-center my-2">
              <div className="bg-[#5022c3] w-10 h-10 rounded-full flex justify-center">
                <FontAwesomeIcon
                  className="w-20 text-white p-2 ml-1"
                  icon={faPlay}
                />
              </div>
              <span className="text-[#5022c3] mx-2 font-bold">
                [NEW] Ultimate AWS Certified Cloud Practitioner - 2022
              </span>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default LandingPageSection4;
