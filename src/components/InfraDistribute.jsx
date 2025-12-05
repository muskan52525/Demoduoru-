import React from "react";
import { useTranslation } from "react-i18next";
import InfraImg from "../assets/jpg/InfraDistibution.jpg";

const InfraDistribute = () => {
  const { t } = useTranslation();
  const list = t("infraDistribute.list", { returnObjects: true });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="md:hidden flex-1 max-h-full sm:max-h-[550px]">
        <img
          src={InfraImg}
          alt={t("infraDistribute.subtitle")}
          className="w-full lg:h-full h-[40vh] object-cover"
        />
      </div>      
      <div className="flex-1 lg:m-auto my-3 lg:px-0 px-5 ">
        <div className="px-4 py-10 md:py-10 lg:py-0">
          <h4 className="green-titile text-xl text-center lg:text-left">{t("infraDistribute.subtitle")}</h4>
          <h2 className="pink-title text-2xl mt-[19px] text-center lg:text-left">{t("infraDistribute.title")}</h2>
          <p className="mt-3 md:mt-6 font-poppins text-center lg:text-left font-medium text-base  text-[#666F77] flex-wrap leading-7 whitespace-pre-line ">
            {t("infraDistribute.description")}
          </p>
          <ul className="mt-3 md:mt-6 font-poppins font-medium text-base text-center lg:text-left  text-[#666F77] flex-wrap leading-7 whitespace-pre-line flex flex-col lg:gap-2 lg:list-disc list-none md:pl-[30px]">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden md:block flex-1 max-h-full sm:max-h-[550px]">
        <img
          src={InfraImg}
          alt={t("infraDistribute.subtitle")}
          className="w-full lg:h-full h-[40vh] object-cover"
        />
      </div>
    </div>
    
    
  );
};

export default InfraDistribute;
