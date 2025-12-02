import React from "react";
import Map from "../assets/png/map.png";
import { useTranslation } from "react-i18next";

const SobreHistory = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center px-3 py-5 md:flex">
      <div className="w-full max-w-full md:max-w-[700px] mx-auto">
        <h3 className="green-titile text-center text-xl md:text-2xl lg:text-left">
          {t("aboutHistory.subtitle")}
        </h3>
        <h2 className="pink-title mt-[19px] text-center text-2xl md:text-3xl lg:text-left">
          {t("aboutHistory.title")}
        </h2>

        <p className="mt-3 md:mt-6 font-poppins text-center lg:text-left font-medium text-base  text-[#666F77] flex-wrap leading-7 whitespace-pre-line">
          {t("aboutHistory.description")}
        </p>
      </div>

      <div className="flex justify-center mx-auto h-[550px] w-[365px] md:w-[400px]">
        <img src={Map} alt="DetailImg" className="h-full w-full object-contain" />
      </div>
    </div>
  );
};

export default SobreHistory;
