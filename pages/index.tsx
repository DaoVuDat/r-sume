import { Hero } from '@/components/Header/Hero';
import type { NextPage } from 'next';
import React, { useState } from 'react';

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      Body
    </div>
  );
};

export default Home;
