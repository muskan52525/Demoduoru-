import React from "react";
import InfraImg from "../assets/png/AboutInfraImg.png";
import { useTranslation } from "react-i18next";

const AboutInfraStructure = () => {
  const { t } = useTranslation();

  const subtitle = t("aboutInfrastructure.subtitle");
  const title = t("aboutInfrastructure.title");
  const description = t("aboutInfrastructure.description");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
      <div className="h-full max-h-[20vh] md:max-h-[550px]">
        <img
          src={InfraImg}
          alt={title}
          className="w-full h-full aspect-square object-cover"
        />
      </div>
      <div className="max-w-full w-full lg:max-w-[668px] md:mx-auto py-8 lg:pb-8 px-5 2xl:px-0">
        <h4 className="green-titile text-xl md:text-xl lg:text-left text-center">
          {subtitle}
        </h4>
        <h2 className="pink-title text-2xl md:text-4xl mt-[19px] lg:text-left text-center">
          {title}
        </h2>
        <p className="mt-3 md:mt-6 lg:text-left text-center font-poppins font-medium text-base  text-[#666F77] flex-wrap leading-7 whitespace-pre-line">
          {description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default AboutInfraStructure;
