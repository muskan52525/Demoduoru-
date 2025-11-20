import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Products from '../components/Products'
import ContactForm from '../components/ContactForm'
import StoryPage from '../components/StoryPage'
import BlackberryImg from "../assets/jpg/BlackberryImg.jpg"
import ContactFormImage from "../assets/png/Contact_form_image.png"

const Home = () => {
  return (
    <>
      <Hero/>
      <Banner/>
      <Products/>
      <ContactForm
      heading="ESTAMOS AQUI PARA SI!"
      subheading="Tem alguma pergunta? Envie-nos uma mensagem."
      buttonText="saber mais"
      imageSrc={BlackberryImg}
      bgColor="#E5376B"
      outlineClass="text-outline-green"/>
      <StoryPage/>
    </>
  )
}

export default Home
