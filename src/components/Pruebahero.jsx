import React from "react";
import "../assets/styles/pruebahero.css";

const Pruebahero = () => {
  return (
    <>
      <div className="spanContainer">
        <img className="fondoImagen" src="/img/fondo1.jpg" alt="fondo" />
        <h2 data-aos="fade-up" data-aos-duration="3000" className="prueba">
          TuIndumentaria
        </h2>
      </div>

      <div className="pruebainfo">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="textoPrueba"
        >
          <h3>TuIndumentaria</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quia possimus vel. Consequatur ullam quaerat architecto dolorum
            eligendi dolores ipsa iure corrupti at recusandae tenetur provident
            consectetur, non sed similique.
          </p>
        </div>
        <img
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="imagenPrueba"
          src="/img/imagen4.jpg"
          alt=""
        />
      </div>
      <div className="segundaFoto">
        <img
          data-aos="fade-up"
          data-aos-duration="3000"
          className="imagen3"
          src="/img/imagen3.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default Pruebahero;
