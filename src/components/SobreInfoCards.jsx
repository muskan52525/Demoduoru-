import React from "react";
import { sobre } from "../data/form";
import { useTranslation } from "react-i18next";

const SobreInfoCards = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#A1C128] py-[60px] md:py-[100px] px-2">
      <h4 className="text-sm sm:text-2xl font-medium leading-[22px] tracking-[1.28px] uppercase font-poppins text-white text-center">
        {t("sobreInfo.subtitle")}
      </h4>
      <h2 className="text-outline-pink font-mono45 text-center text-[36px]">
        {t("sobreInfo.title")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px] md:gap-4 lg:gap-8 xl:gap-12 px-2 md:px-4 lg:px-6 mt-5 md:mt-[40px] lg:mt-[60px] max-w-full sm:max-w-[1580px] mx-auto">
        {sobre.map((member) => (
          <div key={member.id} className="staff-card flex flex-col items-center text-center">
            <div className="w-[250px] h-[250px]">

            <img
              className="h-full w-full aspect-square object-cover rounded-2xl"
              src={member.image}
              alt={member.name}
            />
            </div>
            <h3 className="text-center text-lg md:text-[20px] font-normal leading-[45px] text-white font-mono45">
              {member.name}
            </h3>
            {member.role && (
              <p className="text-center text-sm md:text-base text-white font-poppins">
                {member.role}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SobreInfoCards;
