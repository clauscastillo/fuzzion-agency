import { motion } from "framer-motion";
import React from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Contact = ({ close }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
      animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
      exit={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
      transition={{ duration: 1 }}
      className="lg:w-96 w-72 h-72 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 p-10 rounded-xl  bg-dark text-white flex flex-col center-fixed items-center gap-5 border-2 border-slate-600"
    >
      <button onClick={close}>
        <AiOutlineClose className="absolute top-4 right-4 cursor-pointer" />
      </button>

      <h3 className="text-xl font-bold">Contactanos</h3>
      <a href="http://wa.me/595985731684">
        <button className="flex items-center gap-1 bg-white w-fit text-dark px-5 py-2 rounded-full">
          Asesoría por Whatsapp <BsWhatsapp />
        </button>
      </a>
      <a href="mailto:contact@fuzzionagency.com">
        <button className="flex items-center gap-1 bg-white w-fit text-dark px-5 py-2 rounded-full">
          Escribenos un correo <AiOutlineMail />
        </button>
      </a>
    </motion.div>
  );
};

export default Contact;
