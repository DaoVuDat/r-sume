import { Hero } from '@/components/Header/Hero';
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { HiArrowSmUp } from 'react-icons/hi';
import Head from 'next/head';
import { Overview } from '@/components/Overview';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';

const Home: NextPage = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 150) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      <Head>
        <title>Davu</title>
        <meta property="og:title" content="Đào Vũ Đạt - Resumé" />
        <meta property="og:image" content="/images/profile.png" />
        <meta
          property="og:description"
          content="The website shows information of Đào Vũ Đạt."
        />
      </Head>
      <Hero />

      <section id="overview" className="mt-16">
        <Overview />
      </section>
      <section id="projects" className="mt-16">
        <Projects />
      </section>
      <section id="education" className="mt-16">
        <Education />
      </section>
      {showScrollToTop && (
        <button
          onClick={() => scrollToTop()}
          className="fixed bottom-16 right-16 
                    hover:text-secondary_hover hover:border-secondary_hover
                    transition duration-300 
                    border p-2 border-transparent"
        >
          <HiArrowSmUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Home;
