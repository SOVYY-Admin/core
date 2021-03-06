import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom';
import Head from 'next/head'
// import core
import { Section,  Header, Text, Footer, Carousel } from '../components/components';
import { Hero, ContentBlock, Employees } from '../modules/modules'

// import api
import { fetchAPI, getStrapiURL } from "/api/strapi";

// fetch data
export async function getStaticProps({ }) {
  // get content from our api
  const header = await fetchAPI(`/header`);
  const content = await fetchAPI(`/team`);
  const employees = await fetchAPI(`/employees`);
  const footer = await fetchAPI(`/footer`);
  // return content from our api 
  return {
    props: { header, content, employees, footer },
    revalidate: 600,
  };
}

export default function Team({ header, content, employees, footer }) {

  return (
    <div className=''>
      <Head>
        <title>Team</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <Header data={header}  sticky styling="top-0 z-50 rounded-none" />
      <Hero data={content.hero} />

      {/* Content */}

      <div className='min-h-screen p-6'>
      <Section>
        <Text variant="h1">{content.employees.headline}</Text>
      </Section>
      <Employees data={employees} styling="pt-0"/>
      <ContentBlock data={content.story} variant="headlineText"/>
      <Carousel data={content.carousel.images} styling="pt-0"/>
      </div>

      {/* Footer */}

      <Footer data={footer} />
    </div>
  )
}

