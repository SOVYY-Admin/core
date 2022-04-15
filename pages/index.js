import Head from 'next/head'
import { Button, Chip, Section, Divider, Grid, Header, Icon, IconButton, Stack, TextLink, Text, IMG, Backdrop } from '../core';
import { useState } from 'react';
import { useTheme } from 'next-themes'


export default function Home() {

  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className='p-48'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Hello World</div>

      <Button label="Theme" onClick={toggleTheme} />
      <div className=' w-96 h-96 mt-48 bg-red-500 dark:bg-blue-500'/>

      <Section>
  <Grid cols="2" gap="12">  
    <IMG variant="fix" className="h-96" />
    <div>
      <Text variant="h6">Lorem Ipsum</Text>
      <Text variant="b2">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </Text>
    </div> 
  </Grid>
</Section>

<Section>
{(() => {
  const count = 10;
  const loop = [];
  for (let i = 1; i < count; i++){
    loop.push(<div className='p-4 bg-primary-500 text-white text-center mb-2'>{i}</div>)
  }
  return loop;
})()}
</Section>


</div>
  )
}
