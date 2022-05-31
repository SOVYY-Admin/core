import React from "react";
import PropTypes from 'prop-types';
import styles from "./carousel.module.css";

// import core
import { Section, Text, IMG } from '../../components/components';

// import api
import { fetchAPI, getStrapiURL } from "/api/strapi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay } from "swiper";

 export const Carousel = ({ id, data, styling, ...props }) => {
  return (
    <Section styling={styling}>
      <Swiper 
      id={id}
      grabCursor={true}
      loop={false}
      spaceBetween={24}
      autoplay={{
        delay: 7500,
        disableOnInteraction: false,
      }}
      pagination={{
        type: "fraction",
      }}
      modules={[Pagination, Autoplay]}
      className={`
      ${styles[`sy--projects`]} 
      `}>
      {data.map(data =>
        <SwiperSlide key={data.id}>
          <IMG src={getStrapiURL(data.url)} variant="fix" />
        </SwiperSlide>
      )}
    </Swiper>
  </Section>
  );
};

Carousel.propTypes = {
  styling: PropTypes.string,
};

Carousel.defaultProps = {
  styling: '',
};
