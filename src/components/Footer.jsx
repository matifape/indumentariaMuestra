import "../assets/styles/footer.css";
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  
  return (
    <>
    <div className="footerContainer">
    <img className="logoFooter" src="https://placehold.co/600?text=tu+logo" alt="" />
      <div className="footerInfo">
        <h3 className="footerTitle">TuIndumentaria</h3>
        <p className="footerText">La mejor calidad en ropa de mujer</p>
      </div>
      <div className="links">
        <div className="botonFooter" >
          
          <FaWhatsapp className="botonInsta" />
        </div>
        
        
        <FaInstagram className="botonInsta" />
        <FaFacebookSquare className="botonInsta" />
      </div>
    </div>
      
    </>
  );
};

export default Footer;
