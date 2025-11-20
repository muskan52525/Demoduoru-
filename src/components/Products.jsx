import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AppleImg from "../assets/jpg/HomePageProducts/maça_fuji_homepage.jpg";
import CherryImg from "../assets/jpg/HomePageProducts/cereja_homepage.jpg";
import ChestnutImg from "../assets/jpg/HomePageProducts/castanha_homepage.jpg";
import Strawberries from "../assets/jpg/HomePageProducts/morango_homepage.jpg";
import kiwi from "../assets/jpg/HomePageProducts/kiwi_homepage.jpg";
import mirtilo from "../assets/jpg/HomePageProducts/mirtilo_homepage.jpg";
import lemon from "../assets/jpg/HomePageProducts/limão_homepage.jpg";
import laranja from "../assets/jpg/HomePageProducts/laranja_homepage.jpg";
import uva from "../assets/jpg/HomePageProducts/uva_homepage.jpg";
import berries from "../assets/jpg/HomePageProducts/framboesa_homepage.jpg";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Products = () => {
  const { t } = useTranslation();
  const sliderRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(4);

  const mainProductsData = t("products.mainProducts", { returnObjects: true });
  const smallProductsNames = t("products.smallProducts", {
    returnObjects: true,
  });

  const smallProducts = [
    { name: smallProductsNames[0], img: ChestnutImg },
    { name: smallProductsNames[1], img: Strawberries },
    { name: smallProductsNames[2], img: mirtilo },
    { name: smallProductsNames[3], img: kiwi },
    { name: smallProductsNames[4], img: berries },
    { name: smallProductsNames[5], img: uva },
    { name: smallProductsNames[6], img: laranja },
    { name: smallProductsNames[7], img: lemon },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) setSlidesToShow(1);
      else if (window.innerWidth < 768) setSlidesToShow(2);
      else if (window.innerWidth < 1024) setSlidesToShow(3);
      else setSlidesToShow(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: slidesToShow <= 2,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const handleImagesLoaded = () => setImagesLoaded(true);

  useLayoutEffect(() => {
    if (imagesLoaded && sliderRef.current) {
      sliderRef.current.slickGoTo(0);
      sliderRef.current.innerSlider.onWindowResized();
    }
  }, [imagesLoaded]);

  return (
    <section className="bg-[#A1C128] w-full relative">
      <div className="md:py-[100px] py-[60px]  px-5">
        {/* Section Header */}
        <div className="max-w-[853px] mx-auto text-center">
          <p className="text-white uppercase tracking-wide md:text-2xl text-base font-medium leading-[22px] font-poppins">
            {t("products.sectionTitle")}
          </p>
          <h2 className="text-outline-pink font-normal text-[20px] md:text-[40px] mt-1 md:leading-[70px] font-mono45">
            {t("products.sectionHeading")}
          </h2>
          <p className="text-white mt-1 md:text-base text-sm font-medium leading-6 mx-auto font-poppins md:max-w-[690px] max-w-full w-full">
            {t("products.sectionDescription")}
          </p>
        </div>

        {/* Main Products */}
        <div className="max-w-full sm:max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30] lg:gap-[70px] justify-between mt-[30px] sm:mt-[60px] md:mt-[100px] px-5 2xl:px-0 gap-y-4">
            {mainProductsData.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-[40px] shadow-md p-4 md:p-[46px] flex md:flex-row flex-col items-center justify-between gap-3 md:gap-10 md:max-w-[650px] max-w-full w-full mx-auto"
              >
                {/* --- DESKTOP VIEW --- */}
                <div className="hidden md:flex flex-col items-center h-full justify-between">
                  <div className="flex-1 p-0 md:p-4 flex items-center">
                    <img
                      src={index === 0 ? AppleImg : CherryImg}
                      alt={product.name}
                      className="object-contain h-[150px] w-[150px] md:h-[250px] md:w-[250px]"
                    />
                  </div>
                  <p className="text-sm font-medium text-[#2B2D30] mt-4 text-center">
                    {product.season}
                  </p>
                </div>

                <div className="hidden md:flex flex-col justify-between gap-1 h-full">
                  <h3 className="text-[#9AC433] text-2xl md:text-[32px] font-normal text-start uppercase leading-tight font-mono45">
                    {product.name}
                  </h3>
                  <div className="text-gray-600 text-sm mt-2 flex flex-col text-start">
                    <span className="font-medium text-sm text-[#2B2D30] font-poppins leading-7">
                      {t("products.varietiesLabel")}
                    </span>
                    <ul className="text-[#666F77] font-medium text-sm font-poppins leading-7">
                      {product.varieties.map((variety, i) => (
                        <li key={i}>{variety};</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className="banner-button font-poppins font-medium min-w-[180px] md:min-w-[246px] mt-6 p-1 lg:px-6 lg:py-2 cursor-pointer"
                    onClick={() => (window.location.href = "/products")}
                  >
                    {t("products.learnMore")}
                  </button>
                </div>

                {/* --- MOBILE VIEW --- */}
                <div className="flex flex-col items-center justify-center md:hidden w-full text-center">
                  <h3 className="text-[#9AC433] text-xl font-normal uppercase leading-tight font-mono45 mb-3">
                    {product.name}
                  </h3>

                  <img
                    src={index === 0 ? AppleImg : CherryImg}
                    alt={product.name}
                    className="object-contain h-[150px] w-[150px]"
                  />

                  <div className="text-gray-600 text-sm mt-4 flex flex-col items-center">
                    <span className="font-medium text-sm text-[#2B2D30] font-poppins leading-7">
                      {t("products.varietiesLabel")}
                    </span>
                    <ul className="text-[#666F77] font-medium text-sm font-poppins leading-7">
                      {product.varieties.map((variety, i) => (
                        <li key={i}>{variety};</li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm font-medium text-[#2B2D30] mt-3">
                    {product.season}
                  </p>

                  <button
                    className="banner-button font-mulish text-sm px-4 py-1 mt-4 cursor-pointer"
                    onClick={() => (window.location.href = "/products")}
                  >
                    {t("products.learnMore")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Small Products Carousel */}
        <div className="mt-16 w-full lg:max-w-[1400px] 2xl:max-w-[1250px] mx-auto relative">
          {smallProducts.map((item) => (
            <img
              key={item.name}
              src={item.img}
              alt={item.name}
              className="hidden"
              onLoad={handleImagesLoaded}
            />
          ))}

          {imagesLoaded && (
            <div className="max-w-full md:max-w-[1300px] mx-auto">
              <Slider key="loaded" ref={sliderRef} {...sliderSettings}>
                {smallProducts.map((item, idx) => (
                  <div key={idx} className="">
                    <div className="bg-white rounded-[30px] shadow-md p-6 flex flex-col items-center justify-between mx-auto max-w-[250px]">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="h-[200px] w-[200px] object-contain"
                      />
                      <h3 className="text-[#9AC433] mt-4 text-[24px] leading-[30px] font-normal font-mono45">
                        {item.name}
                      </h3>
                      <button
                        className="banner-button font-mulish min-w-[180px] md:min-w-[246px] mt-4 p-1 lg:px-6 lg:py-2 cursor-pointer"
                        onClick={() => (window.location.href = "/products")}
                      >
                        {t("products.learnMore")}
                      </button>
                    </div>
                  </div>
                ))}
              </Slider>

              {/* Custom Navigation Buttons */}
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className="absolute 2xl:left-[-60px] left-5 top-1/2 -translate-y-1/2 transition hidden md:block"
              >
                <IoChevronBack className="text-white w-10 h-50" />
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                className="absolute  2xl:right-[-25px] right-5 top-1/2 -translate-y-1/2 transition hidden md:block"
              >
                <IoChevronForward className="text-white w-10 h-50" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
