import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Logo from "../assets/svg/Header-logo.svg";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#A1C835] text-gray-800 py-10">
        <div className="max-w-[1360px] mx-auto flex flex-col items-center sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-5 px-6 sm:items-start">
          {/* Logo */}
          <div className="flex items-center md:items-start justify-start md:justify-start h-full">
            <img
              src={Logo}
              alt="Demodouro"
              className="h-[100px] w-[100px] md:h-[242px] md:w-[190px] object-cover object-top mb-4"
            />
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-[#E5376B] text-base md:text-lg font-black leading-6 mb-[10px] font-poppins text-center sm:text-start">
              {t("footer.menu.title")}
            </h3>
            <ul className="flex flex-col gap-2 sm:gap-[13px] text-sm font-medium font-poppins text-center sm:text-start">
              <li>
                <a
                  href="/products"
                  className="text-sm font-medium leading-[22px] text-white font-poppins"
                >
                  {t("footer.menu.products")}
                </a>
              </li>
              <li>
                <a
                  href="/infrastructure"
                  className="text-sm font-medium leading-[22px] text-white font-poppins"
                >
                  {t("footer.menu.infrastructure")}
                </a>
              </li>
              <li>
                <a
                  href="/sobre"
                  className="text-sm font-medium leading-[22px] text-white font-poppins"
                >
                  {t("footer.menu.about")}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm font-medium leading-[22px] text-white font-poppins"
                >
                  {t("footer.menu.contact")}
                </a>
              </li>
            </ul>

            <h2 className="text-[#E5376B] font-black text-base md:text-lg font-poppines leading-6 mt-[18px] text-center sm:text-start">
              {t("footer.links.title")}
            </h2>
            <p className="pt-[10px] text-[#FFFFFF] text-sm font-medium font-poppines leading-[22px] cursor-pointer">
              {t("footer.links.privacy")}
            </p>
          </div>

          {/* Contact */}
          <div className="w-full md:max-w-[252px]">
            <h3 className="text-[#E5376B] text-center sm:text-start text-base md:text-lg font-extrabold leading-6 mb-[10px] font-poppins">
              {t("footer.contact.title")}
            </h3>
            <ul className="flex items-center flex-col sm:items-start gap-4 text-sm font-medium font-poppins">
              <li className="flex items-center flex-col sm:flex-row gap-2 sm:gap-4">
                <FaPhoneAlt className="text-[#E5376B] h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
                <span className="text-sm font-medium leading-[22px] text-white font-poppins grid">
                  <a href="tel:(+351) 261 567 199">
                    {t("footer.contact.phone1")}
                  </a>
                  <a href="tel:(+351) 925 524 855">
                    {t("footer.contact.phone2")}
                  </a>
                </span>
              </li>
              <li>
                <a
                  href="mailto:geral@demodouro.pt?subject=Pedido%20de%20Informação&body=Olá%20Demodouro%2C%0A%0AEscrevo-lhe%20para..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium leading-[22px] text-white font-poppins hover:underline flex sm:justify-center sm:flex-row flex-col  items-center gap-2 sm:gap-4 "
                >
                  <FaEnvelope className="text-[#E5376B] sm:h-6 sm:w-6 h-5 w-5 cursor-pointer" />
                  {t("footer.contact.email")}
                </a>
              </li>
              <li>
                <span className="text-sm font-medium leading-[22px] text-white font-poppins">
                  <a
                    href="https://www.google.com/maps?q=Rua+da+Paradinha,+N.+Granja,+3620-503+Moimenta+da+Beira,+Portugal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex sm:justify-center sm:flex-row flex-col items-center gap-4 sm:text-start text-center"
                  >
                    <FaMapMarkerAlt className="text-[#E5376B] h-6 w-6 cursor-pointer " />
                    {t("footer.contact.addressLine1")}
                    <br />
                    {t("footer.contact.addressLine2")}
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Call to action */}
          <div>
            <h3 className="text-[#E5376B] text-base md:text-lg font-extrabold leading-6 mb-[10px] font-poppins text-center sm:text-start">
              {t("footer.cta.title")}
            </h3>
            <p className="text-sm font-medium leading-[22px] text-white font-poppins cursor-pointer text-center sm:text-start">
              {t("footer.cta.description")}
            </p>
            <div>
              <button
                className="mx-auto sm:mx-0 flex items-center justify-center cursor-pointer text-base h-[50px] max-w-[180px] p-[5px] md:max-w-[289px] w-full gap-2 bg-[#E5376B] md:text-lg text-white md:p-2 xl:p-3 2xl:p-4 rounded-lg font-medium leading-7 mt-[27px]"
                onClick={() => (window.location.href = "/contact")}
              >
                {t("footer.cta.button")}
              </button>
            </div>

            {/* Socials */}
            <div
              className="flex gap-4 text-xl mt-[25px] justify-center sm:justify-start"
              target="_blank"
            >
              <a
                href="https://www.facebook.com/demodouro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-white h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/demodouro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/demodouro-lda/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-white h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#E5376B] text-center px-2 py-4 text-white text-sm md:text-sm font-medium md:leading-[45px] leading-6 space-x-2">
        © {currentYear} Demodouro. {t("footer.bottom.rights")}
        <span> {" | "}</span>
        <span> {t("footer.bottom.developedBy")}</span>
        <span className="underline">
          <a href="https://devtech.pt/" target="_blank">
            {" Devtech"}
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;
