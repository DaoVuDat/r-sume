import { Hero } from '@/components/Header/Hero';
import type { NextPage } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="container m-auto">
      <Head>
        <title>Davu</title>
        <meta />
      </Head>
      <Hero />
    </div>
  );
};

export default Home;
