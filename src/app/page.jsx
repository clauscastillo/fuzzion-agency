"use client";

import { useEffect } from "react";
import MainAnimation from "../components/MainAnimation";
import TextAnimate from "../components/TextAnimate";
import Consulting from "../components/Consulting";
import Image from "next/image";

const Index = () => {
  useEffect(() => {
    // Selecciona todas las tarjetas con la clase "card"
    const cards = document.querySelectorAll(".card");

    // Función para verificar si una tarjeta está en el área visible
    function isCardVisible(card) {
      const rect = card.getBoundingClientRect();
      return rect.top < window.innerHeight - 300; // Ajusta el valor según tus necesidades
    }

    // Función para mostrar las tarjetas cuando están en el área visible
    function showVisibleCards() {
      cards.forEach((card) => {
        if (isCardVisible(card) && !card.classList.contains("visible")) {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
          card.classList.add("visible");
        }
      });
    }

    // Agrega un evento de desplazamiento para llamar a la función cuando se desplace la página
    window.addEventListener("scroll", showVisibleCards);

    // Llama a la función inicialmente para mostrar las tarjetas que ya están visibles al cargar la página
  }, []);
  return (
    <main>
      <article className="h-[86vh] lg:px-1/10 lg:grid-cols-60/40 py-10 grid px-5p box-border items-center">
        <div className="lg:order-none order-2">
          <h1 className="lg:text-6xl lg:text-left font-bold text-3xl text-center">
            Transformando Ideas <br className="hidden lg:inline" />
            en <TextAnimate texto={"Experiencias"} />
            <br className="hidden lg:inline" />
            <> </>Digitales Impactantes
          </h1>
          <p className="mt-5 w-4/5 lg:text-left lg:mx-0 lg:text-base mx-auto text-sm text-center">
            Convertimos tus ideas en experiencias digitales impactantes. Nuestro
            equipo de expertos en desarrollo, diseño, animación y marketing
            trabaja para cautivar a tu audiencia. Ya sea un sitio web atractivo,
            gráficos impresionantes, animaciones cautivadoras o estrategias de
            marketing efectivas, estamos aquí para hacerlo realidad. Únete a
            nosotros y transforma tu visión en éxito digital.
          </p>
        </div>
        <MainAnimation />
      </article>

      {/* <section>
        <h1>Te ofrecemos una asesoría gratuita!</h1>
      </section>
      <section>Empresas con las que trabajamos</section> */}

      <section className="py-10 lg:px-1/10 px-5p flex flex-col gap-5 bg-2sec bg-cover bg-no-repeat text-white">
        <h1 className="lg:text-4xl font-bold text-center text-xl">
          Nos enfocamos en <span className="text-main">potenciar empresas</span>{" "}
          a través de Internet
        </h1>
        <p className="w-4/5 mx-auto lg:text-base text-sm">
          En estos tiempos de revolución digital, creemos que la clave del éxito
          a largo plazo radica en una presencia sólida en internet. En{" "}
          <span>Fuzzion</span>, nos apasiona ayudarte a destacar en este mundo
          digital en constante evolución.
        </p>
        {/* <Link to={"aboutus"}>
            <button className="about-us font-medium lg:text-lg text-base ">
              Conoce más sobre nosotros
            </button>
          </Link> */}
      </section>
      <section className="my-10 lg:px-1/10 px-5p">
        <div className="grid lg:grid-cols-60/40 lg:px-5 gap-5">
          <h3 className="font-bold lg:text-4xl text-2xl ">
            Construimos productos y brindamos servicios que{" "}
            <span className="text-main">
              pueden marcar la diferencia en tu negocio.
            </span>
          </h3>
          <p>
            Con dedicación a la calidad, la innovación y la satisfacción del
            cliente, nuestra gama de productos es un testimonio de excelencia en
            cada detalle. Te invitamos a descubrir lo que ofrecemos y a
            disfrutar de la experiencia de elegir entre lo mejor.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 lg:gap-5 my-10 ">
          <article className="p-10 rounded-xl lg:shadow-2xl shadow-card hover:bg-slate-50 transition-colors duration-300 lg:w-full mx-auto my-5 w-3/4">
            <Image
              src="/dev.png"
              alt=""
              className="w-1/3 h-auto"
              width={250}
              height={250}
            />
            <h3 className="font-medium lg:text-2xl">Desarrollo</h3>
            <p className="text-slate-700">
              Ofrecemos soluciones de desarrollo versátiles, desde sitios web
              hasta aplicaciones y software a medida.
            </p>
          </article>
          <article className="p-10 rounded-xl lg:shadow-2xl shadow-card hover:bg-slate-50 transition-colors duration-300 lg:w-full mx-auto my-5 w-3/4">
            <Image
              src="/design.png"
              alt=""
              className="w-1/3 h-auto"
              width={250}
              height={250}
            />
            <h3 className="font-medium lg:text-2xl">Diseño</h3>
            <p className="text-slate-700">
              Transformamos tu imagen en línea y fuera de línea mediante un
              diseño atractivo y efectivo que comunica la esencia de tu marca y
              crea una impresión duradera.
            </p>
          </article>
          <article className="p-10 rounded-xl lg:shadow-2xl shadow-card hover:bg-slate-50 transition-colors duration-300 lg:w-full mx-auto my-5 w-3/4">
            <Image
              src="/mkt.png"
              alt=""
              className="w-1/3 h-auto"
              width={250}
              height={250}
            />
            <h3 className="font-medium lg:text-2xl">Marketing Digital</h3>
            <p>
              Elevamos tu presencia en línea y atraemos clientes de manera
              efectiva para impulsar el éxito de tu negocio en línea.
            </p>
          </article>
        </div>
        {/* <button className="button-animated services-button">
          Explora todos nuestros servicios
        </button> */}
      </section>
      <section className="grid lg:grid-cols-2 py-10 lg:px-1/10 px-5p gap-10">
        <div className="self-center gap-5 flex flex-col">
          <h2 className="font-bold mb-5 lg:text-5xl text-3xl lg:order-none order-1">
            La energía de una start-up impulsada por la{" "}
            <span className="text-main">innovación y la pasión.</span>
          </h2>
          <p className="leading-relaxed lg:w-3/4 lg:order-none order-3">
            En nuestro negocio de desarrollo, diseño y marketing, canalizamos la
            energía de una start-up para crear soluciones creativas y
            personalizadas. Nuestro equipo apasionado se especializa en
            desarrollo web, diseño gráfico y estrategias de marketing efectivas.
            Nos enorgullece nuestra búsqueda constante de innovación y calidad.
            Confía en nosotros como tu socio para llevar tu marca al siguiente
            nivel en el mundo digital. Únete a este emocionante viaje.
          </p>
        </div>
        <Image
          src="/business.png"
          alt=""
          className="lg:order-none order-2"
          width={500}
          height={500}
        />
      </section>
      <Consulting />
      {/* <section className="testimonial">
        <h3>TESTIMONIAL</h3>
        <h1 className="font-bold">
          Qué opinan <span>los clientes</span> <br />
          de nosotros
        </h1>

        <div className="shape-03"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor autem
          tempore rem eum eos mollitia culpa? Molestias incidunt reiciendis, quo
          tempore quae ad eligendi veniam? Nisi perspiciatis maxime, similique
          recusandae harum autem sint! Omnis, numquam!
        </p>
        <h4>PEDRO SALINAS</h4>
        <p>IT CONSULTANT</p>
      </section> */}
    </main>
  );
};

export default Index;
