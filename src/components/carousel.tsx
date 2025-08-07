
// Importamos los componentes de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Importamos los estilos de Swiper
// eslint-disable-next-line
import "swiper/css" ;
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importamos los módulos de Swiper que vamos a usar
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

// Definimos la interfaz (type) para nuestros slides
interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

import { useContext } from 'react';
import { DarkLightContext, type TDarkLightContext } from './darklight.context';

import imag1 from "../info/task_management_baner.jpg"
import imag2 from "../info/tradiscionCriolla_baner.jpg"
import imag3 from "../info/wlr_shopeer.jpg"

const slidesData: Slide[] = [
  {
    id: 1,
    title: 'Proyecto: Task Manegement',
    description: 'Proyecto de tablero de kanban, React, Ts, Tailwiond',
    image: imag1
  },
  {
    id: 2,
    title: 'Proyecto: Tradicion Ciolla',
    description: 'Aplicación front-end & back-end de E-commerce, con js, node.js, express, MySQL, css, html',
    image: imag2
  },
  {
    id: 3,
    title: 'Proyecto: Wl`r Shopeer',
    description: 'Aplicación front-end de E-commerce, React.js, react-router, mockAPI, Bootstrap',
    image: imag3
  },
];

export const Carousel = () => {
    const { changeTheme } = useContext<TDarkLightContext>(DarkLightContext)
  return (
    <div className="w-full h-96 my-8">
      <Swiper
        // Añadimos los módulos que queremos usar
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        // Configuramos el comportamiento del carrusel
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        
        className={`mySwiper w-full h-full ${changeTheme}`} >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl mb-4">{slide.title}</h3>
              <p className="text-lg text-center mb-4">{slide.description}</p>
              <img src={slide.image} alt={slide.title} className="max-w-xs md:max-w-sm rounded-lg shadow-sm border-2" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
