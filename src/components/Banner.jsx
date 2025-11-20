import React from "react";
import Banner2 from "../assets/png/Banner2.png";
import bgImg from "../assets/png/bannerProduct/bg.png";
import bannerProductImages from "../assets/png/bannerProduct";
import appleHalf from "../assets/png/bannerProduct/appleHalf.png";
import appleSliceV1 from "../assets/png/bannerProduct/appleSliceV1.png";
import appleSliceV2 from "../assets/png/bannerProduct/appleSliceV2.png";
import demonAppleV1 from "../assets/png/bannerProduct/demonAppleV1.png";
import demonAppleV2 from "../assets/png/bannerProduct/demonAppleV2.png";
import greenApple from "../assets/png/bannerProduct/greenApple.png";
import logo from "../assets/png/bannerProduct/logo.png";
import redApple from "../assets/png/bannerProduct/redApple.png";

const Banner = () => {
  const lang = "PT";
  const bannerData = {
    bannerImg: Banner2,
  };

  const currentLangImages = bannerProductImages[lang];

  return (
    <>
      <div className="hidden">
        <img
          src={bannerData.bannerImg}
          className="2xl:h-[820px] w-full object-cover"
          alt="Banner"
        />
      </div>
      <div
        className="w-full sm:h-[60vh] 2xl:h-[600px] bg-cover bg-center relative flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* center */}
        <div className="flex flex-col items-center justify-center h-full absolute">
          <img
            src={currentLangImages.novidade}
            alt="Novidade"
            className="w-16 sm:w-40 2xl:w-96"
          />
          <img
            src={currentLangImages.tittle}
            alt="Title"
            className="w-40 sm:w-100 2xl:w-2xl my-[-10px] md:my-[-10px] 2xl:my-[-40px]"
          />
          <img
            src={currentLangImages.prancheta}
            alt="Prancheta"
            className="w-16 md:w-28 lg:w-32 xl:w-48 2xl:w-60"
          />
        </div>
        {/* other element */}
        <img
          src={greenApple}
          alt="greenApple"
          className="w-24 sm:w-52  2xl:w-80 absolute top-[-20px] left-[-45px] md:top-[-40px] md:left-[-60px] lg:top-[-60px] lg:left-[-100px] xl:top-[-40px] xl:left-[-90px] 2xl:top-[-50px] 2xl:left-[-120px] rotate-[115deg]"
        />
        <img
          src={appleHalf}
          alt="appleHalf"
          className="w-20 sm:w-40  2xl:w-64 absolute top-[-30px] left-[100px] md:top-[-40px] sm:left-[200px] lg:top-[-50px] lg:left-[350px] xl:top-[-60px] xl:left-[400px] 2xl:top-[-80px] 2xl:left-[550px]"
        />
        <img
          src={logo}
          alt="logo"
          className="w-20 sm:w-55 2xl:w-76 absolute left-[10px] top-[calc(50%-45px)] md:left-[60px] md:top-[calc(50%-70px)]  lg:top-[calc(50%-96px)] xl:left-[120px] xl:top-[calc(50%-145px)] 2xl:left-[130px] 2xl:top-[calc(50%-175px)]"
        />
        <img
          src={appleSliceV1}
          alt="appleSliceV1"
          className="w-16 sm:w-38 2xl:w-60 absolute left-[-30px] bottom-[-5px] md:left-[-50px] md:bottom-[-10px] lg:left-[-50px] lg:bottom-[-px] 2xl:left-[-50px] 2xl:bottom-[-40px] rotate-[15deg]"
        />
        <img
          src={appleSliceV2}
          alt="appleSliceV2"
          className="w-16 sm:w-[150px] 2xl:w-60 absolute left-[200px] bottom-[-20px] md:left-[440px] md:bottom-[-40px] lg:left-[580px] lg:bottom-[-50px] xl:left-[calc(50%+105px)] xl:bottom-[-70px] 2xl:left-[calc(50%+125px)] 2xl:bottom-[-90px] rotate-180"
        />
        <img
          src={redApple}
          alt="redApple"
          className="w-24 md:w-48 lg:w-60 xl:w-60 2xl:w-80 absolute left-[80px] bottom-[-50px] md:left-[120px] md:bottom-[-90px] lg:left-[160px] lg:bottom-[-125px] xl:left-[250px] xl:bottom-[-125px] 2xl:left-[360px] 2xl:bottom-[-150px]"
        />
        <img
          src={demonAppleV1}
          alt="demonAppleV1"
          className="w-20 sm:w-[200px] 2xl:w-[280px] absolute right-[25px] bottom-0 sm:right-[250px]  2xl:right-[140px] 2xl:bottom-[80px]"
        />
        <img
          src={demonAppleV2}
          alt="demonAppleV2"
          className="w-20 sm:w-[200px]  2xl:w-[280px] absolute right-[40px] top-[15px]  sm:top-0  sm:right-[250px]  2xl:right-[140px] 2xl:top-[100px]"
        />
      </div>
    </>
  );
};

export default Banner;
