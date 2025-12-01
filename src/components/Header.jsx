import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../assets/png/Header-logo.png";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

 const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Force re-render on language change
  // const [, forceUpdate] = useState(0);
  // useEffect(() => {
  //   const handleLanguageChanged = () => forceUpdate((n) => n + 1);
  //   i18n.on("languageChanged", handleLanguageChanged);
  //   return () => {
  //     i18n.off("languageChanged", handleLanguageChanged);
  //   };
  // }, [i18n]);

  // Updated keys to include "header." prefix
  const links = [
    { path: "/products", labelKey: "header.products" },
    { path: "/infrastructure", labelKey: "header.infrastructure" },
    { path: "/sobre", labelKey: "header.about" },
    { path: "/contact", labelKey: "header.contact" },
    { path: "", labelKey: "header.language", isLangSwitcher: true },
  ];

  const handleNavigate = (path, isLangSwitcher = false) => {
    if (isLangSwitcher) {
      setShowLangDropdown((prev) => !prev);
      return;
    }
    setActivePath(path);
    setMenuOpen(false);
    setShowLangDropdown(false);
    navigate(path);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setShowLangDropdown(false);
  };

  // Track URL changes
  useEffect(() => {
    const handleRouteChange = () => setActivePath(window.location.pathname);
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowLangDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-[#E5376B] relative">
      <div className="max-w-[1468px] mx-auto w-full px-6 flex items-center justify-between py-2 lg:py-3">
        {/* ===== Desktop Navigation ===== */}
        <div className="hidden lg:flex w-full items-center justify-center mx-auto gap-x-20">
          {/* Left Links */}
          <div className="flex items-center gap-20 justify-center">
            {links.slice(0, 2).map(({ path, labelKey }) => (
              <button
                key={labelKey}
                onClick={() => handleNavigate(path)}
                className={`text-white text-base font-poppins font-black px-[18px] py-[2px]  cursor-pointer hover:opacity-80 transition lowercase ${
                  activePath === path ? "active-link" : ""
                }`}
              >
                {t(labelKey)}
              </button>
            ))}
            {/* Center Logo */}
          <button onClick={() => handleNavigate("/")}>
            <img
              src={Logo}
              alt="Logo"
              className="h-[60px] w-[60px] md:w-[110px] md:h-[110px] object-contain cursor-pointer"
            />
          </button>
            {links.slice(2,4).map(({ path, labelKey }) => (
              <button
                key={labelKey}
                onClick={() => handleNavigate(path)}
                className={`text-white text-base font-poppins font-black px-[18px] py-[2px]  cursor-pointer hover:opacity-80 transition lowercase ${
                  activePath === path ? "active-link" : ""
                }`}
              >
                {t(labelKey)}
              </button>
            ))}
          </div>

          

          {/* Right Links */}
          <div className="flex items-center gap-8 justify-between">
            
            {links.slice(4).map(({ path, labelKey, isLangSwitcher }) => (
              <div key={labelKey} className="relative" ref={isLangSwitcher ? dropdownRef : null}>
                <button
                  onClick={() => handleNavigate(path, isLangSwitcher)}
                  className={`text-white text-base px-[18px] py-[2px]  cursor-pointer font-poppins font-black hover:opacity-80 transition  ${
                    !isLangSwitcher && activePath === path ? "active-link" : ""
                  }`}
                >
                  {!isLangSwitcher ? t(labelKey) : "PT | EN"}
                </button>

                {/* Language Dropdown */}
                {isLangSwitcher && showLangDropdown && (
                  <div className="absolute right-0 mt-2 w-[130px] bg-white rounded-xl shadow-md z-10 flex flex-col text-center">
                    <button
                      onClick={() => handleLanguageChange("pt")}
                      className={`px-3 py-2 hover:bg-gray-100 ${
                        i18n.language === "pt" ? "text-[#E5376B] font-semibold" : ""
                      }`}
                    >
                      PT
                    </button>
                    <button
                      onClick={() => handleLanguageChange("en")}
                      className={`px-3 py-2 hover:bg-gray-100 ${
                        i18n.language === "en" ? "text-[#E5376B] font-semibold" : ""
                      }`}
                    >
                      EN
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ===== Mobile Menu Button ===== */}
        <div className="lg:hidden flex w-full items-center justify-center mx-auto"> 
          <button
            className="lg:hidden bg-[#ffd4d4] p-2 rounded-[4px]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
          {menuOpen ? (
            <IoMdClose color="#e5376b" className="h-6 w-6" />
          ) : (
            <FaBars color="#e5376b" className="h-6 w-6" />
          )}
          </button>
          <button className="block mx-auto" onClick={() => handleNavigate("/")}>
            <img
              src={Logo}
              alt="Logo"
              className="h-[60px] w-[60px] md:w-[110px] md:h-[110px] object-contain cursor-pointer"
            />
          </button>
        </div>
        
      </div>

      {/* ===== Mobile Navigation ===== */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-3 bg-[#E5376B] pb-6">
          {links.map(({ path, labelKey, isLangSwitcher }) => (
            <div key={labelKey} className="relative">
              <button
                onClick={() => handleNavigate(path, isLangSwitcher)}
                className={`font-medium text-base px-[18px] py-[2px] ${
                  !isLangSwitcher && activePath === path
                    ? "text-[#ffd4d4]"
                    : "text-white"
                }`}
              >
                {!isLangSwitcher ? t(labelKey) : "PT | EN"}
              </button>

              {isLangSwitcher && showLangDropdown && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[100px] bg-white rounded-xl shadow-md z-10">
                  <button
                    onClick={() => handleLanguageChange("pt")}
                    className={`block w-full text-center px-3 py-2 hover:bg-gray-100 ${
                      i18n.language === "pt" ? "text-[#E5376B] font-bold" : ""
                    }`}
                  >
                    PT
                  </button>
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`block w-full text-center px-3 py-2 hover:bg-gray-100 ${
                      i18n.language === "en" ? "text-[#E5376B] font-bold" : ""
                    }`}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
