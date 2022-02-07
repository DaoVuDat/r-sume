import React from 'react';
import { SwiperCard } from '@/components/Projects/SwiperCard';

const Projects = () => {
  return (
    <div className="container mx-auto pt-8">
      <div className="w-2/3 mx-auto text-center">
        <h2 className="font-nautigal text-6xl">My Projects.</h2>
        <h3 className="w-[600px] mx-auto mt-6 tracking-widest leading-relaxed">
          Applying my knowledge from internet and books in order to build
          case-study projects for future career. Some are for freelance, and
          they are mostly about mathematics problems in Matlab language. Click
          the Explore button to go to the website!
        </h3>
      </div>
      <div className="mt-8">
        <SwiperCard />
      </div>
    </div>
  );
};

export default Projects;
