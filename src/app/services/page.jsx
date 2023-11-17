"use client";

import { BsArrow90DegRight } from "react-icons/bs";

import Budget from "../../components/Budget";
import Consulting from "../../components/Consulting";
import Image from "next/image";

const Page = () => {
  return (
    <main>
      <section className="lg:px-1/10 px-5p py-10 text-center">
        <h1 className="lg:text-5xl text-4xl font-bold ">
          Nuestros <span className="text-main">Servicios</span>
        </h1>
        <p className="text-lg mt-5 text-slate-700">
          En nuestra empresa, creamos soluciones personalizadas en diseño,
          desarrollo y marketing para ayudarte a alcanzar tus objetivos de
          manera efectiva. Ya sea que necesites una estrategia de marketing
          impactante, un diseño excepcional o desarrollo de vanguardia, estamos
          aquí para ofrecerte resultados sobresalientes.
        </p>
        <div className=" mx-auto my-10 flex flex-col lg:grid grid-rows-3 gap-20 text-start">
          <article className="flex flex-col w-3/4 mx-auto lg:grid lg:grid-cols-40/60 gap-5">
            <div className="relative lg:w-full mx-auto h-36 lg:h-auto aspect-square self-center">
              <div className="aspect-square w-9/10 bg-main"></div>
              <Image
                src="/dev2.webp"
                alt=""
                className="z-10 h-9/10 absolute w-9/10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                width={300}
                height={300}
              />
            </div>
            <div className="lg:text-left flex flex-col justify-center  mx-auto text-center">
              <h3 className="text-4xl font-bold text-main">Desarrollo</h3>
              <p className="lg:text-lg leading-8 mt-3">
                La implementación eficiente de sistemas es fundamental para
                aumentar la productividad empresarial. Datos actuales indican
                que las organizaciones que invierten en tecnología y procesos
                bien diseñados experimentan mejoras sustanciales en su
                eficiencia operativa.
              </p>
            </div>
          </article>
          <article className="flex flex-col w-3/4 mx-auto lg:grid lg:grid-cols-60/40 gap-5">
            <div className="lg:text-left flex flex-col justify-center  mx-auto text-center lg:order-none order-2">
              <h3 className="text-4xl font-bold text-main">Diseño</h3>
              <p className="lg:text-lg leading-8 mt-3">
                En la era de la experiencia del consumidor, la inversión en un
                diseño distintivo y una identidad visual sólida permite a las
                empresas destacar, atraer a nuevos clientes y estimular el
                crecimiento económico a través de la innovación y la
                competitividad en mercados cambiantes.
              </p>
              {/* <button className="bg-secondary w-max p-3 text-white rounded-full flex items-center gap-1">
                Conoce más
                <BsArrow90DegRight />
              </button> */}
            </div>
            <div className="relative lg:w-full mx-auto h-36 lg:h-auto aspect-square self-center lg:order-none order-1">
              <div className="aspect-square w-9/10 bg-main right-0 absolute"></div>
              <Image
                src="/design2.webp"
                alt=""
                className="z-10 absolute w-9/10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                width={300}
                height={300}
              />
            </div>
          </article>
          <article className="flex flex-col w-3/4 mx-auto lg:grid lg:grid-cols-40/60 gap-5">
            <div className="relative lg:w-full mx-auto h-36 lg:h-auto aspect-square self-center">
              <div className="aspect-square w-9/10 bg-main"></div>
              <Image
                src="/mkt2.webp"
                alt=""
                className="z-10 absolute w-9/10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                width={300}
                height={300}
              />
            </div>
            <div className="lg:text-left flex flex-col justify-center mx-auto text-center">
              <h3 className="text-4xl font-bold text-main">Marketing</h3>
              <p className="lg:text-lg leading-8 mt-3">
                El marketing digital es esencial en los negocios, ya que permite
                a las empresas conectarse con audiencias a nivel global de
                manera efectiva y medible. A través de estrategias digitales, se
                mejora la visibilidad en línea, se atrae tráfico calificado y se
                posibilita la interacción en tiempo real con los clientes,
                respaldada por datos para decisiones informadas.
              </p>
            </div>
          </article>
        </div>
      </section>
      <Consulting />
      <Budget />
    </main>
  );
};

export default Page;
