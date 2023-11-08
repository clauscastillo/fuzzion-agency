import React, { useState, useEffect } from "react";

const TextAnimate = ({ texto }) => {
  const [textoVisible, setTextoVisible] = useState("");
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (indice < texto.length) {
        setTextoVisible((prevTexto) => prevTexto + texto.charAt(indice));
        setIndice((prevIndice) => prevIndice + 1);
      } else {
        clearInterval(intervalo);
      }
    }, 150); // Ajusta la velocidad de escritura aquí

    return () => {
      clearInterval(intervalo);
    };
  }, [texto, indice]);

  return <span className="degradado-texto">{textoVisible}</span>;
};

export default TextAnimate;
