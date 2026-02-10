import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Turnstile } from "@marsidev/react-turnstile";

const ContactForm = ({
  imageSrc,
  bgColor = "#E5376B",
  outlineClass = "text-outline-green",
}) => {
  const { t } = useTranslation();
  const turnstileRef = useRef();

  const fields = [
    { type: "text", name: "name", placeholder: t("contactForm.name") },
    { type: "email", name: "email", placeholder: t("contactForm.email") },
    { type: "text", name: "subject", placeholder: t("contactForm.subject") },
    {
      type: "textarea",
      name: "message",
      placeholder: t("contactForm.message"),
      rows: 2,
    },
    // Honeypot field - visually hidden
    { type: "text", name: "website", placeholder: "Website", isHoneypot: true },
  ];

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState({});
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
  };

  const validate = () => {
    let newErrors = {};

    fields.forEach((field) => {
      if (field.isHoneypot) return;

      const value = formValues[field.name]?.trim() || "";

      if (!value && field.name !== "website") {
        newErrors[field.name] = t("contactForm.required", {
          field: field.placeholder,
        });
      } else if (field.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors[field.name] = t("contactForm.invalidEmail");
        }
      }
    });

    if (!turnstileToken) {
      newErrors["turnstile"] = t("contactForm.turnstileRequired") || "Please complete the CAPTCHA";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formValues.website) return;

    if (validate()) {
      setStatus("loading");

      try {
        const payload = {
          name: formValues.name,
          email: formValues.email,
          message: formValues.subject ? `Subject: ${formValues.subject}\n\n${formValues.message}` : formValues.message,
          website: formValues.website,
          turnstile_token: turnstileToken,
        };

        const response = await fetch("https://demodouro.pt/api/contact.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (data.ok) {
          setStatus("success");
          setFormValues({
            name: "",
            email: "",
            subject: "",
            message: "",
            website: "",
          });
          setTurnstileToken("");
          if (turnstileRef.current) {
            turnstileRef.current.reset();
          }
        } else {
          setStatus("error");
          console.error("Backend error:", data.error);
        }

      } catch (error) {
        setStatus("error");
        console.error("Network error:", error);
      }
    }
  };

  return (
    <section className="w-full">
      <div className="w-full flex flex-col-reverse">
        {imageSrc && (
          <div className="max-h-full sm:max-h-[550px]">
            <img
              src={imageSrc}
              alt="Contact illustration"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div
          className="flex items-center justify-center"
          style={{ backgroundColor: bgColor }}
        >
          <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-12 mx-auto max-w-[650px] w-full text-center md:text-start">
            <h2
              className={`text-3xl font-bold mb-2 text-outline-shadow drop-shadow-[0px_4px_4px_#D6134D] font-mono45 ${outlineClass}`}
            >
              {t("contactForm.heading")}
            </h2>
            <p className="font-light text-base md:text-xl leading-[26px] mt-[2px] text-white mb-3 font-poppins text-center md:text-start">
              {t("contactForm.subheading")}
            </p>

            <form
              className="flex flex-col w-full mt-4 gap-2 md:gap-3"
              onSubmit={handleSubmit}
              noValidate
            >
              {fields.map((field, index) =>
                field.isHoneypot ? (
                  <input
                    key={index}
                    type="text"
                    name={field.name}
                    value={formValues.website || ""}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                ) :
                  field.type === "textarea" ? (
                    <div key={index} className="flex flex-col">
                      <textarea
                        name={field.name}
                        placeholder={field.placeholder}
                        rows={field.rows || 2}
                        value={formValues[field.name] || ""}
                        onChange={handleChange}
                        className={`p-2 w-full bg-white placeholder-[#B4B4B4] focus:outline-none m-0 text-base md:text-lg font-normal leading-[26px] font-mulish max-w-full lg:max-w-[400px] 2xl:max-w-full font-mono45 ${errors[field.name] ? "border border-white" : ""
                          }`}
                      />
                      {errors[field.name] && (
                        <span className="text-white text-xs md:text-sm mt-1">
                          {errors[field.name]}
                        </span>
                      )}
                    </div>
                  ) : (
                    <div key={index} className="flex flex-col">
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formValues[field.name] || ""}
                        onChange={handleChange}
                        className={`p-2  w-full bg-white placeholder-[#B4B4B4] focus:outline-none m-0 text-sm md:text-base font-normal leading-[26px] font-mulish max-w-full lg:max-w-[400px] 2xl:max-w-full font-mono45 ${errors[field.name] ? "border border-white" : ""
                          }`}
                      />
                      {errors[field.name] && (
                        <span className="text-white text-xs md:text-sm mt-1 font-mono45">
                          {errors[field.name]}
                        </span>
                      )}
                    </div>
                  )
              )}

              <div className="my-2 max-w-full lg:max-w-[400px] 2xl:max-w-full">
                <Turnstile
                  ref={turnstileRef}
                  siteKey="0x4AAAAAACZvZY8EIC2J9h4B"
                  onSuccess={setTurnstileToken}
                  onError={() => setErrors({ ...errors, turnstile: "Turnstile error" })}
                  onExpire={() => setTurnstileToken("")}
                />
                {errors.turnstile && (
                  <span className="text-white text-xs md:text-sm mt-1 block">
                    {errors.turnstile}
                  </span>
                )}
              </div>

              {status === "success" && (
                <p className="text-white font-bold">
                  {t("contactForm.successMessage") || "Form submitted successfully!"}
                </p>
              )}
              {status === "error" && (
                <p className="text-white font-bold">
                  {t("contactForm.errorMessage") || "Something went wrong. Please try again."}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-[#A1C128] h-[35px] flex justify-center items-center max-w-[150px] w-full text-white text-sm md:text-base font-medium leading-[40px] font-poppins py-1 hover:opacity-90 transition m-auto md:m-0 disabled:opacity-50"
              >
                <span className="block md:hidden">
                  {status === 'loading' ? '...' : t("contactForm.mobileButtonText")}
                </span>
                <span className="hidden md:block">
                  {status === 'loading' ? 'Sending...' : t("contactForm.buttonText")}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
