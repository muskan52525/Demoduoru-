import React from "react";
import { useParams, Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import FormImg from "../assets/jpg/Contact_form image_Individual Product_Pages.jpg";
import { products } from "../data/form";
import ProductDetail from "../components/Productdetails";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold">Produto não encontrado</h2>
        <Link to="/products" className="text-blue-600 underline">
          Voltar aos produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">

      <ProductDetail />

      {/* Contact Form */}
    
        <ContactForm
          heading= "Estamos Aqui Para Si"
          subheading="Tem alguma pergunta? Envie-nos uma mensagem."
          buttonText="Enviar"
          imageSrc={FormImg}
          bgColor="#E5376B"
          outlineClass="text-outline-green"
        />
      </div>
  );
};

export default ProductDetailsPage;
