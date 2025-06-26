
import "../assets/styles/pruebaheader.css";
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Pruebaheader = () => {
  return (
    <>
      <header data-aos="fade-down"
     data-aos-duration="3000" className="prueba-header">
        
        <h1>
          TuIndumentaria <span>®</span>
        </h1>
       <div className="buttons">
          <button className="messagePrueba">
          <FaWhatsapp className="iconowtp" />
              <span className="spanwtp">WhatsApp</span>  
        </button>
        <button className="messagePrueba">
          <FaInstagram className="iconowtp" />
          <span className="spanwtp">Instagram</span>
        </button>
        <button className="messagePrueba">
          <FaFacebookSquare  className="iconowtp" />
          <span className="spanwtp">Facebook</span>
        </button>
       </div>
        
        
      </header>
    </>
  );
};

export default Pruebaheader;
