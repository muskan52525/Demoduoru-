// src/components/ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { products } from "../data/form";

const PINK = "#E64C73";
const GREEN = "#86B038";

export default function ProductDetail({ product: productProp }) {
  const params = useParams();
  const navigate = useNavigate();
  const idFromRoute = params?.id ? Number(params.id) : null;

  const product =
    productProp ?? products.find((p) => p.id === idFromRoute) ?? products[0];

  if (!product) return null;

  return (
    <section className="bg-white py-5 sm:py-12 lg:py-35 relative">
      <ProductDecor decor={product.decor} />
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-0">
        {/* ---------- MOBILE LAYOUT ---------- */}
        <div className="block lg:hidden px-5 md:px-[50px]">
          {/* Product Name */}
          <h1 className="text-[34px] sm:text-[42px] font-medium font-mono45 uppercase tracking-wide text-[#E64C73] lg:mb-6 text-center">
            {product.name}
          </h1>

          {/* Image */}
          <div className="flex justify-center items-center mb-6 h-[350px] sm:h-[550px]">
            <img
              src={product.img}
              alt={product.name}
              className="object-contain w-full h-full"
            />
          </div>

          {/* Category Box */}
              {product.cat && (
                <div className="flex-1 border border-[#E64C73] rounded-[16px] px-6 py-[12px] mb-6 flex justify-center">
                  <span className="text-[22px] font-mono45 font-light uppercase tracking-wide text-[#E64C73] text-center">
                    {product.cat}
                  </span>
                </div>
              )}

          {/* Pink Info Box */}
          <div
            className="rounded-[38px] w-full py-[38px] px-5 sm:px-10 text-white mb-6"
            style={{ backgroundColor: PINK }}
          >
            <div className="space-y-4 sm:space-y-5">
              {(product.characteristics || []).map((c) => (
                <CharLine key={c.label} label={c.label} value={c.value} />
              ))}
            </div>
          </div>

          {/* Green Info Box */}
          <div className="rounded-[38px] p-10 px-5 sm:px-10 sm:py-[38px] text-white font-poppins bg-[#A1C128] mb-6">
            <Calendar
              months={product.calendar?.months}
              plantacao={product.calendar?.plantacao}
              colheita={product.calendar?.colheita}
              disponibilidade={product.calendar?.disponibilidade}
            />
          </div>

          {/* Storage Box */}
          <div
            className="rounded-[28px] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-2 w-full mb-6"
            style={{ borderColor: PINK }}
          >
            <dl className="space-y-5 sm:space-y-6">
              {Object.entries(product.storage ?? {}).map(([label, text]) => (
                <div key={label}>
                  <dt
                    className="text-base sm:text-[22px] leading-6 font-medium font-mono45 uppercase tracking-wide"
                    style={{ color: PINK }}
                  >
                    {label}
                  </dt>
                  <dd className="text-sm leading-[16px] text-slate-900">
                    {String(text)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Button */}
          <div className="grid justify-center">
            <button
              type="button"
              onClick={() => navigate("/products")}
              className="mx-auto block rounded-[15px] border-2 cursor-pointer p-3 text-base sm:text-[20px] font-normal font-mono45 uppercase tracking-[1.25px] hover:bg-black hover:text-white transition text-[#061829]"
            >
              Ver outros produtos
            </button>
          </div>
        </div>

        {/* ---------- DESKTOP LAYOUT ---------- */}
        <div className="hidden lg:grid gap-8 grid-cols-3 px-5">
          <div className="col-span-1">
            {/* image */}
            <img
              src={product.img}
              alt={product.name}
              className={`object-contain w-full h-full md:mt-[50px] ${
                product.imageAdjust ?? ""
              }`}
            />
          </div>
          <div className="col-span-2">
            {/* heading + category */}
            <div className="flex items-center gap-6 mb-4 lg:mb-6 mx-[35px]">
              {/* Product Name */}
              <h1
                className="text-[34px] sm:text-[42px] lg:text-[56px] font-medium font-mono45 uppercase tracking-wide"
                style={{ color: PINK }}
              >
                {product.name}
              </h1>

              {/* Category Box */}
              {product.cat && (
                <div className="flex-1 border border-[#E64C73] rounded-[16px] px-6 py-[12px] flex justify-center">
                  <span className="text-[22px] font-mono45 font-regular uppercase tracking-wide text-[#E64C73] text-center">
                    {product.cat}
                  </span>
                </div>
              )}
            </div>

            {/* Pink Info Box */}
            <div
              className="rounded-[38px] md:max-w-[921px] w-full md:py-[38px] md:px-10 p-5 text-white"
              style={{ backgroundColor: PINK }}
            >
              <div className="space-y-4 sm:space-y-5">
                {(product.characteristics || []).map((c) => (
                  <CharLine key={c.label} label={c.label} value={c.value} />
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div
              className="rounded-[28px] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-2 sm:px-[18px] sm:py-[18px] w-full min-h-[225px] content-center"
              style={{ borderColor: PINK }}
            >
              <dl className="space-y-5 sm:space-y-4">
                {Object.entries(product.storage ?? {}).map(([label, text]) => (
                  <div key={label}>
                    <dt
                      className="text-base sm:text-[22px] leading-6 font-medium font-mono45 uppercase tracking-wide"
                      style={{ color: PINK }}
                    >
                      {label}
                    </dt>
                    <dd className="text-sm leading-[16px] text-slate-900">
                      {String(text)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="col-span-2">
            <div className="rounded-[38px] p-10 px-5 sm:px-10 sm:py-[48px] text-white font-poppins bg-[#A1C128] mb-10">
              <Calendar
                months={product.calendar?.months}
                plantacao={product.calendar?.plantacao}
                colheita={product.calendar?.colheita}
                disponibilidade={product.calendar?.disponibilidade}
              />
            </div>

            <div className="grid justify-end">
              <button
                type="button"
                onClick={() => navigate("/products")}
                className="mx-auto block rounded-[15px] border-2 cursor-pointer p-3 text-base sm:text-[20px] font-normal font-mono45 uppercase tracking-[1.25px] hover:bg-black hover:text-white transition text-[#061829]"
              >
                Ver outros produtos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- small parts ---------- */

function CharLine({ label, value }) {
  return (
    <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] border-b-2 border-white items-end">
      {/* LEFT */}
      <div
        className="relative h-auto flex items-start before:content-[''] before:w-[10px] before:h-[10px] before:bg-white
      before:rounded-full before:absolute before:left-0 before:-bottom-[6px] before:z-[2]"
      >
        <span className="relative z-[1] text-sm sm:text-lg font-medium uppercase leading-[28px] font-poppins pl-5">
          {label}
        </span>
      </div>

      {/* RIGHT */}
      <div
        className="relative h-auto flex items-start before:content-[''] before:w-[10px] before:h-[10px] before:bg-white
      before:rounded-full before:absolute before:left-0 before:-bottom-[6px] before:z-[2]"
      >
        <span className="relative text-xs sm:text-base leading-[22px] sm:leading-[28px] font-medium font-poppins pl-5">
          {value}
        </span>
      </div>
    </div>
  );
}
function Calendar({
  months = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ",
  ],
  plantacao,
  colheita,
  disponibilidade,
}) {
  const pinkColor = "#E5376B";

  // Create a mobile version of months (first letter only)
  const shortMonths = months.map((m) => m[0]);

  return (
    <div className="space-y-4">
      {/* -------- Month Header Row -------- */}
      <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] md:grid-cols-[180px_1fr] items-center">
        <div></div>

        {/* Desktop months */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-12 gap-2">
            {months.map((m) => (
              <span
                key={m}
                className="text-center text-[12px] sm:text-[14px] font-normal leading-[22px] opacity-90 font-poppins"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile months (one letter each, no scroll) */}
        <div className="block sm:hidden">
          <div className="ml-[30px] grid grid-cols-12 gap-[2px]">
            {shortMonths.map((m, i) => (
              <span
                key={i}
                className="text-center text-[11px] font-normal leading-[18px] opacity-90 font-poppins"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* -------- Rows -------- */}
      {/* Mobile (short months) */}
      <div className="block sm:hidden">
        <Row
          label="PLANTAÇÃO"
          months={shortMonths}
          data={plantacao}
          activeColor={pinkColor}
        />
        <Row
          label="COLHEITA"
          months={shortMonths}
          data={colheita}
          activeColor={pinkColor}
        />
        <Row
          label="DISPONIBILIDADE"
          months={shortMonths}
          data={disponibilidade}
          activeColor={pinkColor}
        />
      </div>

      {/* Desktop (normal months) */}
      <div className="hidden sm:block">
        <Row
          label="PLANTAÇÃO"
          months={months}
          data={plantacao}
          activeColor={pinkColor}
        />
        <Row
          label="COLHEITA"
          months={months}
          data={colheita}
          activeColor={pinkColor}
        />
        <Row
          label="DISPONIBILIDADE"
          months={months}
          data={disponibilidade}
          activeColor={pinkColor}
        />
      </div>
    </div>
  );
}


function Row({ label, months, data, activeColor = "rgba(255,255,255,0.95)" }) {
  const isText = typeof data === "string";

  return (
    <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] items-center h-9 border-b-2 border-white">
      <div
        className="relative h-auto flex items-center before:content-[''] before:w-[10px] before:h-[10px] before:bg-white
      before:rounded-full before:absolute before:left-0 before:-bottom-[9px] before:z-[2]"
      >
        <span className="relative z-[1] text-xs ml-3 sm:text-[17px] font-medium uppercase font-poppins leading-[28px] ">
          {label}
        </span>
      </div>

      <div
        className="relative h-auto flex items-center before:content-[''] before:w-[10px] before:h-[10px] before:bg-white
    before:rounded-full before:absolute before:-left-5 before:-bottom-[17px] before:z-[2]"
      >
        {isText ? (
          <span className="relative z-[1] ml-3 text-xs sm:text-sm leading-[28px] font-medium font-poppins">
            {data}
          </span>
        ) : (
          <div
            className="
          relative z-[1] 
          grid grid-cols-12 sm:grid-cols-12 
          gap-2 w-full  
          max-w-full
          sm:grid-rows-1
          [&>*]:flex-shrink-0
          sm:[&>*]:flex-shrink
          sm:[&>*]:w-auto
        sm:grid 
          flex-row sm:flex-none 
          sm:flex-col
        "
          >
            {months.map((_, i) => {
              const isActive = data?.active?.includes(i);
              return (
                <span
                  key={i}
                  className={
                    "h-[10px] sm:h-[12px] w-[10px] sm:w-[12px] rounded-full border transition-colors " +
                    (isActive
                      ? "bg-[var(--pink)] border-transparent"
                      : "bg-transparent border-white/80")
                  }
                  style={{ ["--pink"]: activeColor }}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function ProductDecor({ decor }) {
  if (!decor) return null;
  const { topLeft, topRight, bottomLeft } = decor;

  return (
    <>
      {topLeft && (
        <img
          src={topLeft}
          alt=""
          className="pointer-events-none select-none hidden lg:block 
                      absolute top-0 left-0 h-[200px] w-[200px] mt-[20px]"
        />
      )}

      {topRight && (
        <img
          src={topRight}
          alt=""
          className="pointer-events-none select-none  hidden lg:block
                      absolute top-0 right-0 h-[200px] w-[200px] mt-[20px]"
        />
      )}

      {bottomLeft && (
        <img
          src={bottomLeft}
          alt=""
          className="pointer-events-none select-none hidden lg:block
                      absolute bottom-0 left-0 h-[200px] w-[200px] mb-[20px]"
        />
      )}
    </>
  );
}
