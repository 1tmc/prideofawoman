'use client';

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import './slider.css';

const slideData = [
  {
    title: 'The Pride of a Woman',
    description: 'Raising women of purpose, power, and prayer through the word of God.',
    image: '/assets/img/slider/slider1.jpg',
  },
  {
    title: 'Transforming Lives with the Gospel',
    description: 'Equipping women to break limitations and walk in divine destiny.',
    image: '/assets/img/slider/slider2.jpg',
  },
  {
    title: 'Empowering Women to Rise',
    description: 'Providing spiritual support, mentorship, and opportunities for growth.',
    image: '/assets/img/slider/slider3.jpg',
  },
  {
    title: 'A Movement of Hope and Healing',
    description: 'Impacting lives through prayer, outreach, and purposeful fellowship.',
    image: '/assets/img/slider/slider4.jpg',
  }
];

const ImageSlider: React.FC = () => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, []);

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        speed={1300}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        navigation={{
          nextEl: '#slide-next',
          prevEl: '#slide-prev',
        }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="swiper"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slider-item"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content">
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-description">{slide.description}</p>
                <a href="/about" className="slide-button"><span>Discover More</span></a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <div className="slider-navigations">
        <button id="slide-prev" className="arrow-button">{'<'}</button>
        <button id="slide-next" className="arrow-button">{'>'}</button>
      </div>
    </div>
  );
};

export default ImageSlider;
