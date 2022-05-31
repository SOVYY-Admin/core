import React from "react";
import PropTypes from 'prop-types';
// import styles
import styles from "./contentblock.module.css";
// import components
import {Section, Grid, Text, IMG, Button, TextLink, Stack} from '../../components/components';
// import api
import { getStrapiURL } from "/api/strapi";

 export const ContentBlock = ({variant, swapped, id, data, href, styling, ...props }) => {

 if (data.image === null && swapped === true ) {
  return (
    <div className={`
    ${styles[`sy--contentblock`]}
    ${styling}  
    `}>
      <Section>
        <Stack orientation="vertical" gap="12" styling="place-items-end">
          <Text variant="h1" styling="text-right max-w-960 m-0">{data.headline}</Text>
          <Grid cols="1" mdcols="2">
            <Text variant="b" styling="mb-0 order-2 md:order-1">{data.text}</Text>
            <Text variant="h6" styling="text-right m-0 order-1 md:order-2">{data.subline}</Text>
          </Grid>
        </Stack>
      </Section>
    </div>
  );
} else if (data.image === null) {
  return (
    <div className={`
    ${styles[`sy--contentblock`]}
    ${styling}  
    `}>
      <Section>
        <Stack orientation="vertical" gap="12">
          <Text variant="h1" styling="max-w-960 m-0">{data.headline}</Text>
          <Grid cols="1" mdcols="2">
            <Text variant="h6" styling="m-0">{data.subline}</Text>
            <Text variant="b" styling="m-0">{data.text}</Text>
          </Grid>
        </Stack>
      </Section>
    </div>
  );
} else if (swapped === true ) {
    return (
      <div className={`
      ${styles[`sy--content`]}
      ${styling}  
      `}>
        <Section>
          <Stack orientation="vertical" gap="12" styling="md:place-items-end">
            <Text variant="h1" styling="md:text-right max-w-960 m-0">{data.headline}</Text>
            <Text variant="h6" styling="md:text-right m-0">{data.subline}</Text>
            <Grid cols="1" mdcols="2">
              <div className="order-2 md:order-1">
                <Text variant="b" styling="mb-0">{data.text}</Text>
              </div>
              {data.image != undefined ? <IMG src={getStrapiURL(data.image.url)} styling="order-1 md:order-2" /> : ""}
            </Grid>
          </Stack>
        </Section>
      </div>
    );
} else {
    return (
      <div className={`
      ${styles[`sy--contentblock`]}
      ${styling}  
      `}>
        <Section>
          <Stack orientation="vertical" gap="12">
            <Text variant="h1" styling="max-w-960 m-0">{data.headline}</Text>
            <Text variant="h6" styling="m-0">{data.subline}</Text>
            <Grid cols="1" mdcols="2">
              {data.image != undefined ? <IMG src={getStrapiURL(data.image.url)} styling="order-1" /> : ""}
              <div className="order-2">
                <Text variant="b" styling="mb-0">{data.text}</Text>
              </div>
            </Grid>
          </Stack>
        </Section>
      </div>
    );
}};

ContentBlock.propTypes = {
  data: PropTypes.object,
  swapped: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'IMGText']),
  styling: PropTypes.string,
};

ContentBlock.defaultProps = {
  variant: 'default',
  bool: false,
  data: {
    "headline": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    "subline": "Lorem Ipsum dolor sit amet",
    "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
    "image":{
      "url": "/uploads/mymind_w_HJ_5_L9_KG_Tl4_unsplash_419f4d7272.jpg",
      "alt":"Lorem Ipsum dolor sit amet"
    },
    "buttons":[
      ],
    "links":[
      ]
  },
  styling: '',
};
