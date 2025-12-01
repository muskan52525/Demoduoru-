import { useTranslation } from "react-i18next";
import { markets } from "../data/form";

const SobreCardComponent = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#E5376B] py-[60px] md:py-[125px]">
      <div className="flex flex-col max-w-[1407px] mx-auto text-center px-4 gap-4 ">
        <h4 className="uppercase text-white text-2xl font-medium leading-[22px] tracking-[1.28px] font-poppins">
          {t("sobreCard.subtitle")}
        </h4>
        <h2 className="font-mono45 font-normal text-[40px] text-outline-green leading-[45px]">
          {t("sobreCard.title")}
        </h2>
        <p className="text-white text-base sm:text-lg font-poppins font-normal leading-6 mb-3 sm:max-w-[704px] mx-auto">
          {t("sobreCard.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[78px] sm:mt-[35px] max-w-full sm:max-w-[950px] mx-auto lg:max-w-[1050px]">
          {markets.map((market) => (
            <div
              key={market.id}
              className="bg-white rounded-2xl shadow-lg p-4 lg:p-10 flex flex-col items-center md:max-w-[485px]"
              style={{height:"475px"}}
            >
              <img
                src={market.image}
                alt={market.title}
                className="rounded-[32px] w-[420px] h-[270px] object-cover"
              />
              <h3 className="bg-[#A4C428] font-mulish text-white  font-medium text-lg py-[10px] mt-[30px] leading-6 min-w-full lg:min-w-[380px] w-full whitespace-pre">
                {market.title}
              </h3>
              <p className="font-mulish text-base mt-4 text-[#061829] underline font-bold">
                {market.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SobreCardComponent;
