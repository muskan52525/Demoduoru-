import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeroBanner1 from "../assets/png/banner_cerejas.png";
import HeroBanner2 from "../assets/png/banner_maçã.png";
import BannerLogo from "../assets/svg/Banner-logo.svg";

const Hero = () => {
  const navigate = useNavigate();
  const { t, ready } = useTranslation();
  if (!ready) return null;

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true, // smooth fade transition
  };

  const banners = [HeroBanner1, HeroBanner2];

  return (
    <>
      {/* HERO SLIDER */}
      <div className="w-full sm:h-[20vh] md:h-[60vh] 2xl:h-[600px] overflow-hidden relative">
        <Slider {...settings} className="h-full">
          {banners.map((banner, index) => (
            <div key={index} className="relative w-full h-[20vh] md:h-[60vh] 2xl:h-[600px]">
              <img
                src={banner}
                alt={`HeroBanner${index + 1}`}
                className="w-full h-full object-cover object-[center_40%]"
              />

              {/* LOGO OVERLAY */}
              <div className="absolute top-1/2 right-4 md:right-[178px] -translate-y-1/2 flex flex-col items-end">
                <img
                  src={BannerLogo}
                  className="h-[80px] sm:h-[120px] w-[120px] md:h-[220px] md:w-[180px] 2xl:h-[362px] 2xl:w-[254px] object-contain"
                  alt="HeroLogo"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* TEXT SECTION */}
      <div className="bg-white text-center px-4 py-10 md:py-[100px] max-w-[1024px] mx-auto">
        <h2 className="text-[#E5376B] font-mono45 font-normal text-xl md:text-2xl mb-3 leading-snug md:leading-[45px]">
          {t("sobre.history_title")}
        </h2>

        <p className="text-[#A4C428] uppercase text-2xl md:text-4xl font-medium leading-[22px]">
          {t("sobre.history_subtitle")}
        </p>

        <p className="text-[#666F77] 2xl:mt-6 md:mt-4 mt-3 text-base sm:text-base leading-[26px] font-normal px-2 whitespace-pre-line">
          {t("sobre.history_paragraph")}
        </p>

        <button
          className="banner-button font-mulish min-w-[180px] md:min-w-[246px] mt-6 p-1 lg:px-6 lg:py-2 cursor-pointer lowercase"
          onClick={() => {
            window.scrollTo({ top: 0 });
            navigate("/sobre");
          }}
        >
          {t("sobre.buttonText")}
        </button>
      </div>
    </>
  );
};

export default Hero;
