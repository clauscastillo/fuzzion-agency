import { BsWhatsapp } from "react-icons/bs";

const Consulting = () => {
  return (
    <section className="grid lg:grid-cols-2 ">
      <img src="/contact-img.webp" alt="" className="w-full" />
      <div className="bg-main lg:px-5 px-5p py-5 flex flex-col justify-center gap-3">
        <h3 className="text-white font-bold xl:text-4xl lg:text-left text-2xl text-center">
          Tiene algun proyecto en mente?
        </h3>
        <p className="xl:w-3/5 lg:text-left lg:w-full text-center">
          Permítenos guiar tus pasos con nuestra asesoría gratuita. Juntos,
          haremos realidad tus ideas y objetivos.
        </p>
        <a href="https://api.whatsapp.com/send?phone=595985731684&text=Hola!%20estoy%20interesado%20en%20la%20asesoría%20gratuita.">
          <button className="bg-white rounded-lg flex items-center gap-2 lg:mx-0 mx-auto p-3 w-fit font-medium hover:animate-vibration">
            Quiero una asesoría gratuita <BsWhatsapp />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Consulting;
