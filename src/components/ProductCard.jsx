import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import AppleImg from "../assets/jpg/ProductPageImages/maçã_royal_produtos_page.jpg";
import GoldenImg from "../assets/jpg/ProductPageImages/maçã_golden_produtos_page.jpg";
import RedImg from "../assets/jpg/ProductPageImages/maçã_red_produtos_page.jpg";
import ReinetaImg from "../assets/jpg/ProductPageImages/maçã_reineta_produtos_page.jpg";
import FujiImg from "../assets/jpg/ProductPageImages/maçã_fuji_produtos_page.jpg";
import StarkingImg from "../assets/jpg/ProductPageImages/maçã_starking_produtos_page.jpg";
import GrannyImg from "../assets/jpg/ProductPageImages/maça_granny_smith_produtos_page.jpg";
import CerejaImg from "../assets/jpg/ProductPageImages/cereja_produtos_page.jpg";
import CastanhaImg from "../assets/jpg/ProductPageImages/castanha_produtos_page.jpg";
import MorangoImg from "../assets/jpg/ProductPageImages/morango_produtos_page.jpg";
import MirtiloImg from "../assets/jpg/ProductPageImages/mirtilo_produtos_page.jpg";
import KiwiImg from "../assets/jpg/ProductPageImages/kiwi_produtos_page.jpg";
import FramebosaImg from "../assets/jpg/ProductPageImages/framboesa_produtos_page.jpg";
import UvaImg from "../assets/jpg/ProductPageImages/uva_produtos_page.jpg";
import LaranjaImg from "../assets/jpg/ProductPageImages/laranja_produtos_page.jpg";
import NimioImg from "../assets/jpg/ProductPageImages/limão_produtos_page.jpg";

const imageMap = {
  1: AppleImg,
  2: GoldenImg,
  3: RedImg,
  4: ReinetaImg,
  5: FujiImg,
  6: StarkingImg,
  7: GrannyImg,
  8: AppleImg,
  9: CerejaImg,
  10: CastanhaImg,
  11: MorangoImg,
  12: MirtiloImg,
  13: KiwiImg,
  14: FramebosaImg,
  15: UvaImg,
  16: LaranjaImg,
  17: NimioImg,
};

const ProductsCards = () => {
  const { t } = useTranslation("products");
  const navigate = useNavigate();

  // Fetch array of products from translation
  const productsPage = t("productsPage.items", { returnObjects: true });

  return (
    <section className="bg-[#A1C128] md:py-[100px] py-[30px] sm:py-[60px] px-5">
      <div className="max-w-7xl mx-auto text-center p-5 md:p-0 py-[60px]">
        <p className="text-sm sm:text-[24px] font-medium leading-[22px] tracking-[1.28px] uppercase font-poppins text-white text-center">
          {t("productsPage.section.title")}
        </p>
        <h2 className="text-outline-pink font-mono45 text-center text-2xl sm:text-[40px] sm:leading-[48px] mt-[19px]">
          {t("productsPage.section.heading")}
        </h2>
        <p className="text-white mt-6 text-base  font-medium leading-[20px] font-poppins  sm:max-w-[922px] sm:mx-auto">
          {t("productsPage.section.description")}
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {productsPage.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-4xl shadow-[0px_4px_4px_0px_#00000040] py-8 flex flex-col items-center"
            >
              <img
                src={imageMap[product.id]}
                alt={product.name}
                className="h-45 w-100 object-contain"
              />
              <h3 className="text-[#9AC433] text-[28px] leading-[30px] font-regular font-mono45 text-lg">
                {product.name}
              </h3>
              <button
                className="banner-button font-medium font-poppins min-w-[180px] md:min-w-[246px] mt-2 p-1 lg:px-6 lg:py-2 cursor-pointer"
                onClick={() => {
                  navigate(`/product/${product.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                {t("productsPage.button")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCards;
