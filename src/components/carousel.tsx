import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { type TSlideProyect } from "../info/proyect_info"
import { useContext } from 'react';
import { DarkLightContext, type TDarkLightContext } from './darklight.context';

// eslint-disable-next-line no-alert
// import "swiper/css"; 
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export const Carousel = ( props: {data: Array<TSlideProyect>} ) => {
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
        {props.data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-md h-full">
              {slide.title.trim() !== '' ? <h3 className="text-2xl mb-4">{slide.title}</h3> : null}
              {slide.description.trim() !== '' ? <p className="text-lg text-center mb-4">{slide.description}</p> : null}
              {slide.image.trim() !== '' ? <img src={slide.image} alt={slide.title} className="max-w-xs md:max-w-sm rounded-lg shadow-sm border-2" /> : null}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
