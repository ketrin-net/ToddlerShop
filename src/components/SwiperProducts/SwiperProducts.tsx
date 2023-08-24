import React, { ReactNode, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { ProductCard, ProductCardProps } from '../ProductCard/ProductCard';


import './SwiperProducts.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';


export const SwiperProducts = (productCard: ProductCardProps[]) => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {Array.isArray(productCard) ?
                productCard.map((props, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard {...props} />
                    </SwiperSlide>)
                ) : null}
            < SwiperSlide> slide 1</SwiperSlide>
            < SwiperSlide> slide 2</SwiperSlide>
            < SwiperSlide> slide 3</SwiperSlide>

        </Swiper>
    );
};