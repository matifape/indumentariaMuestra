// import Swiper en tu componente
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import "../assets/styles/slider.css"; 

import { Autoplay } from 'swiper/modules';

export default function SliderMarcas() {
  const marcas = ['Nike', 'Adidas', 'Zara', 'Levi\'s', 'H&M', 'Puma', 'Reebok', 'Converse', 'Vans', 'Fila', 'Asics', 'Skechers', 'Champion', 'Columbia','Patagonia', 'Lacoste', 'Guess', 'Diesel', 'Superdry', 'Jack & Jones', 'Bershka', 'Pull&Bear', 'Stradivarius', 'Mango',  'Oysho', 'Uterque',  'Benetton', 'Desigual'];

  return (
    <div className="swiperContainer">
        <Swiper
      modules={[Autoplay]}
      spaceBetween={5}
      slidesPerView={10}
      loop={true}
      speed={2000}
      autoplay={{ delay:0,
         disableOnInteraction: false
       }}
        breakpoints={{
    0: { slidesPerView: 2 },         // Teléfonos
    480: { slidesPerView: 3 },       // Teléfonos grandes
    768: { slidesPerView: 5 },       // Tablets
    1024: { slidesPerView: 8 },      // Escritorio chico
    1280: { slidesPerView: 10 },     // Escritorio grande
  }}
    >
      {marcas.map((marca, index) => (
        <SwiperSlide key={index}>
          <div className="slider">{marca}</div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
    
  );
}

