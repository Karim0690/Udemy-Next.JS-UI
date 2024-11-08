import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Com_Logos() {
  const t = useTranslations("LandingPage");

  const logos = [
    {
      src: "https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg",
      alt: "Volkswagen logo gray and white logo",
      width: 48,
      height: 48,
    },
    {
      src: "https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg",
      alt: "Samsung logo gray and white logo",
      width: 101,
      height: 34,
    },
    {
      src: "https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg",
      alt: "Cisco logo gray and white logo",
      width: 87,
      height: 40,
    },
    {
      src: "https://cms-images.udemycdn.com/content/ryaowrcjb2/svg/vimeo_logo_resized-2.svg",
      alt: "Vimeo logo gray and white logo",
      width: 132,
      height: 40,
    },
    {
      src: "https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg",
      alt: "Procter & Gamble logo gray and white logo",
      width: 48,
      height: 48,
    },
    {
      src: "https://cms-images.udemycdn.com/content/luqe0d6mx2/svg/hewlett_packard_enterprise_logo.svg",
      alt: "Hewlett Packard logo gray and white logo",
      width: 94,
      height: 40,
    },
    {
      src: "https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg",
      alt: "Citi logo gray and white logo",
      width: 62,
      height: 40,
    },
    {
      src: "https://cms-images.udemycdn.com/content/swmv0okrlh/svg/ericsson_logo.svg",
      alt: "Ericsson logo gray and white logo",
      width: 55,
      height: 48,
    },
  ];

  return (
    <div className="bg-gray-100 mx-auto mt-10">
      <div className="py-16 px-16">
        <h1 className="text-gray-500 mb-8 max-w-full text-center font-semibold">
          {t("combaner")}
        </h1>
        <div>
          <ul className="grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-4 gap-6 justify-center">
            {logos.map((logo, index) => (
              <li key={index} className="flex justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
