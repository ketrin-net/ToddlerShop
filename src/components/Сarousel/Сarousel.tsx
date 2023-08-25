import React, { ReactNode, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import './Сarousel.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';

interface SwiperProductsProps {
    children?: ReactNode | ReactNode[],
}

export const Сarousel = ({ children }: SwiperProductsProps) => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {React.Children.map(children, (item, index) => (
            <SwiperSlide key={index}>
                {item}
            </SwiperSlide>))}
        </Swiper>
    );
};