import React from 'react'
import ContactBanner from "../assets/png/contact-banner.png"
import ContactDetail from '../components/ContactDetail'
import ContactFormImg from "../assets/png/ContactForm_img.png"
import ContactForm from '../components/ContactForm'
import MobileContactForm from '../components/MobileContactForm'

const ContactPage = () => {
  return (
    <>
    {/* <img  className='w-full' src={ContactBanner} alt="ContactBanner" /> */}
    <div className="hidden sm:block">
    <ContactDetail/>
      <ContactForm
      heading="ESTAMOS AQUI PARA SI!"
      subheading="Tem alguma pergunta? Envie-nos uma mensagem."
      buttonText="saber mais"
      imageSrc={ContactFormImg}
      bgColor="#E5376B"
      outlineClass="text-outline-green"/>
    </div>
    
    {/* {Mobile} */}
    <div className="lg:hidden">
      <ContactDetail/>
      <MobileContactForm
      heading="ESTAMOS AQUI PARA SI!"
      subheading="Tem alguma pergunta? Envie-nos uma mensagem."
      buttonText="saber mais"
      imageSrc={ContactFormImg}
      bgColor="#E5376B"
      outlineClass="text-outline-green"/>
    </div>

    </>

    

  )
}

export default ContactPage
