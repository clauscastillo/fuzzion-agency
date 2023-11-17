"use client";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Footer = ({ scrollToTop }) => {
  return (
    <footer className="bg-dark lg:relative lg:px-1/10 px-5p py-10  ">
      {/* <div className="absolute"></div> */}
      <div className="lg:grid lg:grid-cols-footer lg:items-start gap-16 text-white flex flex-col items-center ">
        <hr className="lg:hidden order-3" />
        <div className="lg:w-56 lg:order-none w-full flex flex-col items-center gap-5 order-3">
          <Image
            src="/white-fuzzion.png"
            alt=""
            width={300}
            height={100}
            className="logo-footer lg:w-full w-1/2"
          />
          <p className="lg:text-left text-center ">
            Soluciones tecnológicas con una creatividad que cautiva
            estratégicamente
          </p>
          <div className="social">
            <a href="https://www.instagram.com/fuzzionagency/">
              <AiFillInstagram size={20} />
            </a>
            <AiFillFacebook size={20} />

            <FaXTwitter size={20} />
          </div>
          <p className="text-sm ">
            Fuzzion EAS © 2023 - Todos los derechos reservados.
          </p>
        </div>

        <div className="lg:flex lg:justify-evenly lg:order-none lg:flex-row lg:text-left flex flex-col text-center gap-10 order-1">
          <div className="flex flex-col gap-5 ">
            <h4 className="font-bold mb-2">Empresa</h4>
            <Link href={"/"} onClick={scrollToTop}>
              Home
            </Link>
            <Link href={"/services"} onClick={scrollToTop}>
              Servicios
            </Link>
            <Link href={"/nosotros"} onClick={scrollToTop}>
              Nosotros
            </Link>
            {/* <Link href={"/portfolio"} onClick={scrollToTop}>
              Portafolio
            </Link> */}
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="font-bold mb-2">Conectar</h4>
            <a href="mailto:info@fuzzionagency.com">info@fuzzionagency.com</a>
            <a href="http://wa.me/595985731684">+595-985-731-684</a>
          </div>
        </div>
        <hr className="lg:hidden lg:order-none order-2 " />

        <div className="footer-3 lg:order-none  order-2  gap-10 items-center">
          <form
            action=""
            className="lg:items-start lg:text-start text-center items-center"
          >
            <h4>Apuntate para recibir noticias y promociones</h4>
            <input
              type="text"
              className="input-suscribe w-3/4 text-dark"
              placeholder="Escribe tu email"
            />
            <button type="submit" className="bg-secondary rounded-full py-2">
              Suscribirme
            </button>
          </form>
          <div className="flex flex-col lg:flex-row gap-2">
            <a>Política de privacidad</a>
            <a>Términos y Condiciones</a>
          </div>
        </div>
      </div>

      {/* <div className="shape-2"></div> */}
    </footer>
  );
};

export default Footer;
