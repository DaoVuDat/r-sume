import React from 'react';
import { SwiperCard } from '@/components/Projects/SwiperCard';

const sampleData = [
  {
    image: '/images/projects/sample-project1.jpg',
    name: 'Dog Breeds',
    description:
      'Show dog breeds by using TheDogApi.com. The website has authentication and authorization functionality ' +
      'and animation. It has also responsive design for mobile and PC.',
    tech: [
      'ReactJS',
      'Typescript',
      'TailwindCSS v2',
      'Firebase',
      'Framer Motion',
      'Styled Component',
      'React Hook Form v7',
    ],
    link: 'https://dog-breeds.cf',
    type: 'Learning',
    time: '08/2021 - 09/2021',
  },
  {
    image: '/images/projects/sample-project2.jpg',
    name: 'Resume',
    description: 'The CV online website using NextJS with Typescript.',
    tech: [
      'NextJS',
      'TailwindCSS v3',
      'React Spring',
      'Typescript',
      'Framer Motion',
    ],
    link: 'https://daovudat.tk',
    type: 'Learning',
    time: '01/2022 - present',
  },
  {
    image: '/images/projects/sample-project3.jpg',
    name: 'Optimization Projects',
    description:
      'Using optimization algorithms in order to solve mathematics problems ' +
      'in Construction field. For instance, Particle Swarm Optimization (PSO), ' +
      'Grey Wolf Optimization (GWO) algorithms, etc.',
    tech: ['Matlab', 'Python'],
    link: '',
    type: 'Freelance',
    time: '03/2020 - present',
  },
  {
    image: '/images/projects/sample-project2.jpg',
    name: 'GEC',
    description:
      'Solving Grammatical Error Correction (GEC) problem by using Machine Translation with Seq-2-Seq model ' +
      'and Language Model. The feature is plugged in MS Word via an addon which uses API endpoint from Flask server.',
    tech: ['Python', 'Flask', 'MS Word'],
    link: '',
    type: 'Thesis',
    time: '12/2018 - 08/2019',
  },
];

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
        <SwiperCard data={sampleData} />
      </div>
    </div>
  );
};

export default Projects;
