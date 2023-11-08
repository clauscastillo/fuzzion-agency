import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";

const Budget = ({ popup, close }) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 1 }}
      className={
        popup
          ? "lg:px-1/10 px-5p fixed grid gap-10 grid-cols-2 bg-black/95 py-20 overflow-y-auto text-white w-full h-full top-0 left-0 m-0 z-30"
          : "lg:px-1/10 px-5p grid gap-10 grid-cols-2 relative my-8"
      }
    >
      {popup && (
        <button className="absolute top-8 right-10" onClick={close}>
          <AiFillCloseCircle size={30} />
        </button>
      )}
      <div className="lg:col-span-1 col-span-2">
        <form action="" className=" flex flex-col gap-3 text-lg col-span-2">
          <h3 className="lg:text-5xl text-3xl font-bold">
            Te preparamos un plan a tu medida
          </h3>
          <p>Tipo de proyecto (Marca las casillas que correspondan)</p>

          <div className="grid grid-cols-3">
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Desarrollo</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Diseño</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Marketing</label>
            </div>
          </div>

          <p>Presupuesto aprox. en GS</p>
          <div className="grid grid-cols-2">
            <div className="flex items-center gap-1">
              <input type="radio" name="budget" id="" />
              <label htmlFor="">Menos de 500,000</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="radio" name="budget" id="" />
              <label htmlFor="">Menos de 1,000,000</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="radio" name="budget" id="" />
              <label htmlFor="">Menos de 2,000,000</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="radio" name="budget" id="" />
              <label htmlFor="">Mas de 2,000,000</label>
            </div>
          </div>

          <label htmlFor="">Nombre</label>
          <input
            type="text"
            className="border-2 rounded-md border-slate-300 p-2 focus:border-main focus:outline-none text-dark"
          />
          <label htmlFor="">Empresa</label>
          <input
            type="text"
            className="border-2 rounded-md border-slate-300 p-2 focus:border-main focus:outline-none text-dark"
          />
          <label htmlFor="">Comentarios adicionales</label>
          <textarea className="resize-none border-2 rounded-md border-slate-300 p-2 focus:border-main focus:outline-none text-dark" />
          <button type="submit" className="bg-dark text-white rounded-xl py-2">
            Enviar
          </button>
        </form>
      </div>
      <div className="hidden lg:flex flex-col items-center gap-3 self-center w-4/5">
        <img src="/contact.png" alt="" />
        <a href="mailto:info@fuzzionagency.com">info@fuzzionagency.com</a>
        <a href="http://wa.me/595972217068">+595-972-217-068</a>
      </div>
    </motion.section>
  );
};

export default Budget;
