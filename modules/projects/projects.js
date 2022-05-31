import React, { useRef, useState } from "react";
import Link from 'next/Link'
import PropTypes from 'prop-types';
// import styles
import styles from "./projects.module.css";
// import components
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

export const Projects = ({id, data, styling, ...props }) => {
  return (
    <Swiper 
    id={id}
    grabCursor={true}
    loop={true}
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
          <Link href={`/projects/${data.slug}`}>
            <a>
              <IMG src={getStrapiURL(data.image.url)} variant="flex" backdropopacity="o50">
                <Section size="screen" spacing="screen" styling="relative z-50">
                    <Text variant="d" tag="h2" styling="text-white text-center hover:opacity-80">{data.headline}</Text>
                </Section>
              </IMG>
            </a>
          </Link>
        </SwiperSlide>
    )}
  </Swiper>
  );
};

Projects.propTypes = {
  data: PropTypes.object,
};

Projects.defaultProps = {
};
