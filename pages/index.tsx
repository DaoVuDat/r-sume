import { Hero } from '@/components/Header/Hero';
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { HiArrowSmUp } from 'react-icons/hi';
import styles from '@/styles/index.module.css';
import Head from 'next/head';

const Home: NextPage = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 50) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="container m-auto">
      <Head>
        <title>Davu</title>
        <meta />
      </Head>
      <Hero />

      <section id="overview" className="h-screen">
        Overview
      </section>
      <section id="projects" className="h-screen">
        Projects
      </section>
      {showScrollToTop && (
        <button
          onClick={() => scrollToTop()}
          className="fixed bottom-16 right-16"
        >
          <HiArrowSmUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Home;
