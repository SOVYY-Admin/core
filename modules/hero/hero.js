import React from "react";
import PropTypes from 'prop-types';
// import styles
import styles from "./hero.module.css";
// import components
import { Grid, Divider, Section, Stack, Text, IconButton} from '../../components/components';

 export const Hero = ({variant, id, data, href, styling, ...props }) => {
  if (variant === 'visual') {
  return (
    <div 
    id={id}
    className={`
    ${styles[`sy--hero`]} 
    ${styling}  
    `}>
      <Section size="screen" spacing="screen">
        <Grid cols="1" mdcols="1" lgcols="1" xlcols="2" styling="min-h-full md:p-12">
        <Text variant="d" tag="h1" styling="text-left order-2 xl:order-1 h-fit md:self-center">{data.title}</Text>
        <iframe className="order-1 xl:order-2 min-h-320" src='https://my.spline.design/screencopy-08c1ef3baa8abc7ef871f396564d762c/' frameborder='0' width='100%' height='100%' allowtransparency='true' ></iframe>
        </Grid>
        <IconButton variant="ghost" icon="arrow-down" styling="absolute bottom-4 left-4 lg:bottom-12 lg:left-12" href={href}/>
      </Section>
    </div> 
  );
 } else {
  return (
    <div 
    id={id}
    className={`
    ${styles[`sy--hero`]} 
    ${styling}  
    `}>
      <Section size="large" spacing="screen">
        <Text variant="d" tag="h1" styling="text-center">{data.title}</Text>
        <Stack orientation="horizontal" styling="absolute w-96 max-w-3/4 bottom-4 right-4 lg:bottom-12 lg:right-12"><Divider/><Text variant="b2">{data.note}</Text></Stack>
        <IconButton variant="ghost" icon="arrow-down" styling="absolute bottom-4 left-4 lg:bottom-12 lg:left-12" href={href}/>
      </Section>
    </div> 
  );
 }};

Hero.propTypes = {
  data: PropTypes.object,
  variant: PropTypes.oneOf(['default', 'visual']),
};

Hero.defaultProps = {
  variant: 'default',
};
