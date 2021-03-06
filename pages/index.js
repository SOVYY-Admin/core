import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom';
import Head from 'next/head'
import { Button, Chip, Section, Divider, Grid, Header, Icon, IconButton, Stack, TextLink, Text, IMG, Backdrop, Card, List, Footer, Drawer, Content } from '../components/components';
import { Hero, Projects, ContentBlock } from '../modules/modules';

// import api
import { fetchAPI, getStrapiURL } from "/api/strapi";


// fetch data
export async function getStaticProps({ }) {
  // get content from our api
  const header = await fetchAPI(`/header`);
  const content = await fetchAPI(`/homepage`);
  const projects = await fetchAPI(`/projects`);
  const footer = await fetchAPI(`/footer`);
  // return content from our api 
  return {
    props: { header, content, projects, footer },
    revalidate: 600,
  };
}

export default function Home({ header, content, projects, footer }) {

  return (
    <div className=''>
      <Head>
        <title>SOVYY</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* Header */}

      <Header data={header} sticky styling="top-0 z-50 rounded-none" id="hero"/>
      <Hero data={content.hero} variant="visual" href="#2"/>

    {/* Content */}
    
    <div>

    <Section spacing="large" id="1">
      <Content data={content.description} variant="HeadlineText" />
    </Section>
    
    <Section>
      <Text variant="h1">{content.projects.headline}</Text>
    </Section>


      </div>



      <Projects data={projects} id="2"/>

      {/* Footer */}

      <Footer data={footer} />
</div>
  )
}

