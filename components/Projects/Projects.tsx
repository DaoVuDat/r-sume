import React from 'react';
import { SwiperCard } from '@/components/Projects/SwiperCard';

const sampleData = [
  {
    image: '/images/projects/sample-project1.jpg',
    name: 'Dog Breeds',
    description: 'Project is built by ReactJS with Typescript',
  },
  {
    image: '/images/projects/sample-project2.jpg',
    name: 'Resume',
    description: 'Project is built by NextJS with Typescript',
  },
  {
    image: '/images/projects/sample-project3.jpg',
    name: 'Optimization Projects',
    description: 'Project is implemented with Matlab.',
  },
];

const Projects = () => {
  return (
    <div className="w-2/3 py-10 bg-[#282633] mx-auto rounded-lg shadow">
      <div className="w-2/3 mx-auto text-center">
        <h2 className="font-nautigal text-6xl">My Projects.</h2>
        <h3 className="mt-6 tracking-wider">
          Project is built by ReactJS with Typescript. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eius est harum itaque nemo nobis
          quam quos sit voluptatum? Cupiditate, eius?
        </h3>
      </div>

      <div className="mt-6">
        <SwiperCard />
      </div>
    </div>
  );
};

export default Projects;
