import React from "react";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import reviewPerson1 from "../assets/images/dist/review-persons/review-person-1.png";
import reviewPerson2 from "../assets/images/dist/review-persons/review-person-2.png";
import reviewPerson3 from "../assets/images/dist/review-persons/review-person-3.png";

export const ReviewsSlider: React.FC = () => {
  return (
    <>
      <Swiper
        className='reviews-slider'
        modules={[Navigation]}
        spaceBetween={50}
        navigation
        slidesPerView={1}
        speed={500}
        breakpoints={{
          1200: {
            spaceBetween: 90,
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide className='reviews-slide'>
          <h4 className='reviews-slide__title'>
            Schnell und kundenorientiert!
          </h4>
          <p className='reviews-slide__descr'>
            Wir waren in der Situation, in der alles schnell gehen musste. Trotz
            Zeitdruck lief alles sehr schnell und wir haben mehrere Angebote von
            unterschiedlichen Banken zum Vergleich bekommen. Der Kaufpreis wurde
            rechtzeitig überwiesen. Danke
          </p>
          <div className='reviews-slide__person'>
            <div className='reviews-person__img'>
              <img src={reviewPerson1} alt='Familie Burgkardt' />
            </div>
            <div className='reviews-person__text'>
              <h5 className='reviews-person__name'>Familie Burgkardt</h5>
              <div className='reviews-person__city'>Freiburg am Breisgau</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='reviews-slide'>
          <h4 className='reviews-slide__title'>Sehr kompetente Beratung!</h4>
          <p className='reviews-slide__descr'>
            Sehr kompetente Beratung. Zuverlässig und vor allem professionell.
            So muss es immer sein. Kann ich jedem mit bestem Gewissen
            weiterempfehlen
          </p>
          <div className='reviews-slide__person'>
            <div className='reviews-person__img'>
              <img src={reviewPerson2} alt='Familie Burgkardt' />
            </div>
            <div className='reviews-person__text'>
              <h5 className='reviews-person__name'>H. Rösch</h5>
              <div className='reviews-person__city'>München</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='reviews-slide'>
          <h4 className='reviews-slide__title'>
            Hier werden Wohnträume verwirklicht!
          </h4>
          <p className='reviews-slide__descr'>
            Herr V. Schell hat unseren Traum vom Eigenheim möglich gemacht! Wir
            wurden sehr gut beraten und haben eine massgeschneiderte Lösung für
            unsere Finanzierung bekommen. Danke für alles! Wir empfehlen ihn zu
            100% weiter! Besser geht es nicht :-)
          </p>
          <div className='reviews-slide__person'>
            <div className='reviews-person__img'>
              <img src={reviewPerson3} alt='Familie Burgkardt' />
            </div>
            <div className='reviews-person__text'>
              <h5 className='reviews-person__name'>Familie Heldmerich</h5>
              <div className='reviews-person__city'>Lörrach</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
