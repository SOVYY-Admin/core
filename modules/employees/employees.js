import React, { useRef, useState } from "react";
import Link from 'next/Link'
import PropTypes from 'prop-types';
// import styles
import styles from "./employees.module.css";
// import components
import { Section, Grid, Text, Stack, IMG } from '../../components/components';

// import api
import { fetchAPI, getStrapiURL } from "/api/strapi";

// import required modules
import { Pagination, Autoplay } from "swiper";

export const Employees = ({id, data, styling, ...props }) => {
  return (
    <Section styling={styling}>
      <Grid>
        {data.map (data =>
          <Stack>
            {data.image != undefined ? <IMG variant="fix" src={getStrapiURL(data.image.url)} /> : ""}
            <Text variant="h6" styling="m-0">{data.name}</Text>
            <Text variant="b2" styling="m-0 opacity-40">{data.position}</Text>
          </Stack>
        )}
      </Grid>
    </Section>
  );
};

Employees.propTypes = {
  data: PropTypes.object,
  styling: PropTypes.string,
};

Employees.defaultProps = {
};
