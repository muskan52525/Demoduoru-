import React from "react";
import OfficialImg from "../assets/png/officialCard-img.png";
import Logo from "../assets/png/OfficialLogo-img.png";
import { useTranslation } from "react-i18next";

const SobreOfficialCard = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white md:py-[60px] py-[60px] px-2">
      <h4 className="text-[#E5376B] font-medium text-2xl tracking-[1.28px] leading-[22px] text-center">
        {t("sobreOfficial.subtitle")}
      </h4>
      <h2 className="outline-heading text-[30px] md:text-[36px] mx-auto text-center">
        {t("sobreOfficial.title")}
      </h2>

      <div className="max-w-[1050px] md:mx-auto bg-[#E5376B] rounded-[25px] 2xl:rounded-[54px] shadow-[0px_4px_4px_0px_#00000040] space-y-4 block md:flex justify-between flex-col md:flex-row items-center gap-[30px] sm:gap-[80px] p-[30px] mt-[20px] md:mt-[38px]">
        <div className="rounded-[25px] overflow-hidden md:w-2/3">
          <img
            src={OfficialImg}
            className="h-full w-full object-cover"
            alt="OfficialImg"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className=" h-[40ox] w-[140px] md:w-[180px] md:h-[60px] mx-auto sm:mx-0 ">
            <img
              src={Logo}
              className="h-full w-full object-contain"
              alt="Logo"
            />
          </div>
          <h2 className="text-[#FFFFFF]  text-[22px] md:text-[28px] font-bold leading-[32px] font-mulish text-center sm:text-start">
            Escola de Andebol de Moimenta da Beira
          </h2>
          <h4 className="text-white text-[16px]  leading-normal font-bold font-mulish text-center sm:text-start">
            Rua do Mercado, Loja 3 3620-320 Moimenta Beira
          </h4>
          <p className="text-white text-[14px] leading-[24px] font-bold font-mulish underline text-center sm:text-start">
            moimentaandebol@gmail.com
          </p>
          <p className="text-white text-[14px] leading-[24px] font-bold font-mulish text-center sm:text-start">
            968118150
          </p>
          <div className="flex justify-center sm:justify-start">
            <button className="bg-[#A1C128] text-base   leading-normal lg:leading-24px xl:leading-[36px] 2xl:leading-[45px] font-medium underline font-mulish text-white px-3">
              andebol_moimentadabeira
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreOfficialCard;
