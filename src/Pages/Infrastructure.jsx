import React from 'react'
import AboutInfraStructure from '../components/AboutInfraStructure'
import { InfraData } from "../data/form";
import bgImage from "../assets/png/IngraBgimg.png";
import bgImageMobile from "../assets/png/image_INFRAESTRUTURAS.png";
import InfraDistribute from '../components/InfraDistribute'
import ContactForm from '../components/ContactForm'
import Infraform from "../assets/jpg/infraform.jpg"
import { useTranslation } from "react-i18next";

const Infrastructure = () => {

   const { t } = useTranslation();
     const InfraData = t("infraData.items", { returnObjects: true });
  return (
    <>
      <AboutInfraStructure/>
       <section
      className="hidden md:block relative bg-cover bg-center min-h-[800px] md:min-h-[700px] w-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center center, center center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
  
      <div className="absolute inset-0">
        {InfraData.map((feature, index) => {
          const positions = [
            { top: "60px", left: "450px" },
            { bottom: "136px", left: "85px" },
            { top: "150px", right: "215px" },
            { bottom: "25px", right: "463px" },
          ];
          const positionsClasses = [
            "top-[40px] left-[20px] lg:top-[48px] lg:left-[100px] xl:top-[48px] xl:left-[200px] 2xl:top-[60px] 2xl:left-[450px]",
            "bottom-[40px] left-[15px] lg:bottom-[80px] lg:left-[55px] xl:bottom-[80px] xl:left-[55px] 2xl:bottom-[136px] 2xl:left-[85px]",
            "top-[9px] right-[10px] lg:top-[90px] lg:right-[5px] xl:top-[90px] xl:right-[105px] 2xl:top-[150px] 2xl:right-[215px]",
            "bottom-[20px] right-[20px] lg:bottom-[25px] lg:right-[16px] xl:bottom-[25px] xl:right-[216px] 2xl:bottom-[25px] 2xl:right-[436px]"
          ];

          return (
            <div
              key={feature.id}
              className={`absolute ${positionsClasses[index]}`}
            >
              <div className="bg-white backdrop-blur-md rounded-[30px] p-4 text-center max-w-[326px] w-full cursor-pointer border-[5px] lg:border-[20px] border-[#E5376B] ">
                <h3 className="text-lg md:text-xl font-normal text-[25px] leading-[45px] text-[#E73569] font-mono45  ">
                  {feature.title}
                </h3>
                <p className="text-[#E73569] mt-2 text-base font-normal leading-[24px] font-poppins">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
    
    {/* Mobile View */}
    <section
      className="relative bg-cover bg-center min-h-[800px] md:min-h-[700px] w-full flex items-center justify-center md:hidden "
      style={{
        backgroundImage: `url(${bgImageMobile})`,
        backgroundPosition: "center center, center center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-10 ">
        {InfraData.map((feature) => (
          <div
            key={feature.id}
            className="border-[#E5376B] border-[20px] rounded-[30px]"
          >
            <div className="bg-white  rounded-[30px] shadow-lg p-4 text-center cursor-pointer">
              <h3 className="text-[22px] leading-[35px] text-[#E73569] font-mono45 font-normal">
                {feature.title}
              </h3>
              <p className="text-[#E73569] mt-2 text-base font-normal leading-[24px]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
        
      </div>
    </section>
      <InfraDistribute/>
       <ContactForm
      heading="ESTAMOS AQUI PARA SI!"
      subheading="Tem alguma pergunta? Envie-nos uma mensagem."
      buttonText="saber mais"
      imageSrc={Infraform}
      bgColor="#E5376B"
      outlineClass="text-outline-green"/>
    </>
  )
}

export default Infrastructure
