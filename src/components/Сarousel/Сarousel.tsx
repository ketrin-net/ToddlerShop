import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import ArrowLeftCircle from './assets/ArrowLeftCircle.svg';
import ArrowRightCircle from './assets/ArrowRightCircle.svg';
import React, { ReactNode } from 'react';

import './Сarousel.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';

interface СarouselProps {
  slidesCount: number;
  children?: ReactNode | ReactNode[];
}

const spaceBetweenCard = 24;

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>
        <img src={ArrowLeftCircle} alt="" />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <img src={ArrowRightCircle} alt="" />
      </button>
    </div>
  );
};

export const Сarousel = ({ children, slidesCount }: СarouselProps) => {
  return (
    <Swiper slidesPerView={slidesCount} spaceBetween={spaceBetweenCard} modules={[Navigation]} className="mySwiper">
      {React.Children.map(children, (item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
      <SwiperNavButtons />
    </Swiper>
  );
};
