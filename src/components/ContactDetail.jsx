import React from "react";
import DetailImg from "../assets/png/contactDetail-Img.png";
import MessageIcon from "../assets/svg/MessageIcon.svg";
import PhoneIcon from "../assets/svg/phone-icon.svg";
import LocationIcon from "../assets/svg/location.svg";

const ContactDetail = () => {
  return (
    <>
      <div className="grid grid-col1 md:grid-cols-2 items-center">
        <div className="max-w-[636px] mx-auto my-[30px] md:my-4 px-6 md:px-6 pb-5 md:pb-0 flex flex-col gap-2 sm:gap-4 md:gap-2 xl:gap-5">
          <h3 className="green-titile text-center lg:text-left">
            contactos
          </h3>
          <h2 className="text-[#E5376B] text-center lg:text-left font-normal text-[36px] leading-[45px] uppercase font-mono45 mt-0 lg:mt-[-12px]">
            entre em contacto
          </h2>
          <p className="text-black font-normal text-center lg:text-left leading-[26px] text-base font-poppins">
            Fale diretamente connosco e prove o melhor que temos para lhe dar
          </p>
          <div className="flex lg:items-start items-center lg:justify-start justify-center gap-4 cursor-pointer font-poppins">
            <img className="w-5 object-contain mt-2" src={PhoneIcon} alt=""/>
            <p className="text-black font-normal leading-[26px] text-base font-poppins">
              (+351) 912 345 678 <br />
              (+351) 925 524 855
            </p>
          </div>
          <div className="flex lg:items-start items-center lg:justify-start justify-center gap-4 cursor-pointer">
            <img className="w-5 object-contain mt-1" src={MessageIcon} alt="MessageIcon" />
            <p className="text-black font-normal leading-[26px] text-base font-poppins">
              geral@demodouro.pt
            </p>
          </div>
          <div className="flex lg:items-start items-center lg:justify-start justify-center gap-4 cursor-pointer ">
            <img className="w-5 object-contain mt-2" src={LocationIcon} alt="location" />
            <p className="text-black font-normal leading-[26px] text-base font-poppins lg:text-left text-center">
              Rua da Padaria, S/N, Granjinha/Sever,<br/>
              3620-503 Moimenta da Beira,
              Portugal
            </p>
          </div>
        </div>
        <div className="h-full max-h-full sm:max-h-[550px]">
          <img src={DetailImg} alt="DetailImg" className="h-full w-full object-cover sm:object-top"/>
        </div>
      </div>
    </>
  );
};

export default ContactDetail;