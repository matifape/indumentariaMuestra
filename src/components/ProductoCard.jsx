import { useState } from "react";
import "../assets/styles/product.css";

export default function ProductoCard({ producto }) {
  const [colorSeleccionado, setColorSeleccionado] = useState(null);
  const [talleSeleccionado, setTalleSeleccionado] = useState(null);

  

  return (
    <div
     className="mainContainer">
      <div className="infoContainer">
        <img src={producto.imagen} alt={producto.nombre} />
        <h2 className="nombre">{producto.nombre}</h2>
        <p className="descripcion">{producto.descripcion}</p>
        <p className="precio">${producto.precio}</p>
      </div>

      <div className="colorSelection">
        <p className="selectionTipe">Colores:</p>
        <div className="colors">
          {producto.color.map((color, i) => (
            <button
              key={i}
              onClick={() => setColorSeleccionado(color)}
               className={`botonColor ${colorSeleccionado === color ? "seleccionado" : ""}`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <div className="talleSelection">
        <p className="selectionTipe">Talles:</p>
        <div>
          {producto.talle.map((talle, i) => (
            <button
              key={i}
              onClick={() => setTalleSeleccionado(talle)}
               className={`botonColor ${talleSeleccionado === talle ? "seleccionado" : ""}`}
            >
              {talle}
            </button>
          ))}
        </div>
      </div>

      <button className="wtp" >Consultar por WhatsApp</button>
    </div>
  );
}
