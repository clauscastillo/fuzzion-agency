import Image from "next/image";
import Consulting from "../../components/Consulting";
const valores = [
  {
    title: "Calidad",
    description:
      "Nuestro compromiso con la calidad es inquebrantable. Nos esforzamos por ofrecer productos y servicios de la más alta calidad a nuestros clientes.",
    img: "/compromiso.svg",
  },
  {
    title: "Innovación",
    description:
      "La innovación es el motor de nuestro crecimiento. Nos esforzamos por crear productos y servicios innovadores que satisfagan las necesidades de nuestros clientes.",
    img: "/innovacion.svg",
  },
  {
    title: "Satisfacción",
    description:
      "La satisfacción del cliente es nuestra máxima prioridad. Nos esforzamos por brindar el mejor servicio posible a nuestros clientes.",
    img: "/satisfaccion.svg",
  },
  {
    title: "Equipo",
    description:
      "Nuestro equipo es nuestro activo más valioso. Nos esforzamos por crear un entorno de trabajo que fomente el crecimiento personal y profesional.",
    img: "/equipo.svg",
  },
];

const equipo = [
  {
    name: "Pedro Salinas",
    img: "/pedro.png",
    position: "Co-Founder",
  },
  {
    name: "Claus Castillo",
    img: "/claus.png",
    position: "Co-Founder",
  },
];

const About = () => {
  return (
    <>
      <section className="lg:px-1/10 text-center flex align-center flex-col items-center my-8">
        <h2 className="text-main font-bold text-5xl">Valores</h2>
        <p className="w-3/5 mt-4 mb-10">
          Los principios fundamentales y la ética de un proyecto son los
          cimientos que determinan su crecimiento y éxito a largo plazo.
        </p>
        <div className="grid lg:grid-cols-4 gap-5">
          {valores.map((valor) => (
            <div
              key={valor.title}
              className="gap-2 hover:scale-105 text-start lg:w-full w-3/4 lg:mx-auto shadow-2xl shadow-gray-500 px-5 py-5 rounded-lg border-gray-100 group hover:bg-dark transition-all duration-700 hover:border-dark mx-auto"
            >
              <div className="aspect-square h-36">
                <Image
                  src={valor.img}
                  alt=""
                  className="group-hover:invert transition-all duration-700 h-full"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-dark text-2xl font-bold group-hover:text-white transition-colors duration-700">
                {valor.title}
              </h3>
              <p className="text-dark text-md group-hover:text-white transition-colors duration-700">
                {valor.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="lg:px-1/10 px-5p flex align-center flex-col mt-20 ">
        <h2 className="text-main font-bold text-5xl">Nuestro Equipo</h2>
        <p className="mt-4">
          Contamos con un equipo altamente capacitado que reúne una amplia gama
          de habilidades y experiencia. Cada miembro de nuestro equipo ha sido
          rigurosamente seleccionado por su experiencia y conocimientos en sus
          respectivas áreas, lo que nos permite abordar con éxito una variedad
          de desafíos y proyectos.
        </p>
      </section>
      <section className="mt-5 mb-20 lg:relative lg:px-0 lg:h-400 px-5p">
        <div className="justify-center lg:flex grid lg:gap-36 gap-5 text-center px-10">
          {equipo.map((persona) => {
            return (
              <div key={persona.name} className="lg:w-72">
                <Image
                  src={persona.img}
                  alt=""
                  className="rounded-full"
                  width={300}
                  height={300}
                />
                <h3 className="text-xl font-bold text-dark">{persona.name}</h3>
                <p className="text-slate-600">{persona.position}</p>
              </div>
            );
          })}
        </div>
        <span className="lg:block w-full bg-main h-24 lg:absolute top-1/2 -translate-y-1/2 hidden -z-10"></span>
      </section>
      <Consulting />
      <section className="px-1/10 my-20 flex flex-col items-center">
        <h3 className="text-dark lg:text-4xl text-2xl font-bold text-center mb-5 lg:w-3/4">
          Con mucha pasión, desde el
          <span className="text-main"> corazón de Sudamerica </span> para el
          resto del mundo
        </h3>
        <Image
          src="/map.png"
          alt=""
          className="lg:w-1/2 shadow-2xl border-2 border-slate-400 rounded-md"
          width={600}
          height={600}
        />
      </section>
    </>
  );
};

export default About;
