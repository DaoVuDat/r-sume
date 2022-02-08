import React, { useEffect, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg';
import { HiCheck } from 'react-icons/hi';
import Image from 'next/image';
import { RoundedButton } from '@/components/common/RoundedButton';

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
    tech: ['NextJS', 'TailwindCSS v3', 'React Spring', 'Typescript'],
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
    tech: ['Matlab'],
    link: '',
    type: 'Freelance',
    time: '04/2020 - present',
  },
];

const SwiperCard = () => {
  const [selectIndex, setSelectIndex] = useState(0);

  const dataTransition = useTransition(sampleData[selectIndex], {
    from: { opacity: 0, transform: 'scale(1.1)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    config: {
      duration: 400,
    },
    exitBeforeEnter: true,
    key: sampleData[selectIndex].name,
  });

  const listItemTransitions = useTransition(sampleData[selectIndex].tech, {
    trail: 200,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: {
      duration: 600,
    },
    exitBeforeEnter: true,
    keys: (item) => `${sampleData[selectIndex].tech.length}-${item}`,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectIndex((prevState) => {
        if (prevState === sampleData.length - 1) {
          return 0;
        } else {
          return prevState + 1;
        }
      });
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [selectIndex]);

  const prevOnClick = () => {
    if (selectIndex === 0) {
      setSelectIndex(sampleData.length - 1);
      return;
    }
    setSelectIndex(selectIndex - 1);
  };
  const nextOnClick = () => {
    if (selectIndex === sampleData.length - 1) {
      setSelectIndex(0);
      return;
    }
    setSelectIndex(selectIndex + 1);
  };

  return (
    // Image Section
    <div className="w-full lg:w-2/3 mx-auto bg-[#3C4756] rounded-sm rounded-br-3xl overflow-hidden shadow-lg shadow-gray-800">
      <div className="h-80 w-full z-10 overflow-hidden">
        {dataTransition(({ opacity, transform }, item) => (
          <animated.div
            className="relative w-full h-full"
            style={{ opacity, transform: transform }}
          >
            <Image
              layout="fill"
              objectFit="cover"
              src={item.image}
              alt={item.name}
              priority
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
          </animated.div>
        ))}
      </div>

      {/* Prev, Next and Explore Button*/}
      <div className="relative flex py-4 px-8 justify-between">
        <div className="">
          <div className="flex justify-around">
            <span className="font-bold">{selectIndex + 1}</span>
            <span>of</span>
            <span className="font-bold">{sampleData.length}</span>
          </div>
          <div className="flex justify-between mt-1">
            <button
              onClick={() => prevOnClick()}
              className="cursor-pointer transition duration-300 hover:text-secondary_text"
            >
              <CgArrowLongLeft size={24} />
            </button>
            <button
              onClick={() => nextOnClick()}
              className="ml-8 cursor-pointer transition duration-300 hover:text-secondary_text"
            >
              <CgArrowLongRight size={24} />
            </button>
          </div>
        </div>
        <div className="w-[150px] tracking-wider ">
          <h3 className="font-bold">Project</h3>
          {dataTransition(({ opacity }, item) => (
            <animated.p
              className="text-gray-400 text-sm mt-1"
              style={{ opacity }}
            >
              {item.name}
            </animated.p>
          ))}
        </div>
        <div className="w-[150px] tracking-wider ">
          <h3 className="font-bold">Time</h3>
          {dataTransition(({ opacity }, item) => (
            <animated.p
              className="text-gray-400 text-sm mt-1"
              style={{ opacity }}
            >
              {item.time}
            </animated.p>
          ))}
        </div>
        <div>
          <a
            href={sampleData[selectIndex].link}
            target={sampleData[selectIndex].link !== '' ? '_blank' : ''}
            rel="noreferrer"
          >
            <RoundedButton onClick={() => {}}>Explore</RoundedButton>
          </a>
        </div>
      </div>

      {/* Type of Project Section */}
      {dataTransition(({ opacity }, item) => (
        <animated.div
          style={{
            opacity: opacity,
          }}
          className="px-8 md:h-28 lg:h-24 tracking-wider"
        >
          <div className="font-bold mb-2">{item.type} Project</div>{' '}
          {item.description}
        </animated.div>
      ))}

      {/* Technologies Section */}
      <div className="px-8 grid mt-4 mb-8 space-y-4">
        <h3 className="font-bold text-lg">Technologies :</h3>
        <ul className="grid gap-y-4 gap-x-1 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2">
          {listItemTransitions(({ opacity }, item) => (
            <animated.li
              style={{
                opacity: opacity,
              }}
              className="flex"
            >
              <HiCheck size={20} /> <span className="ml-2">{item}</span>
            </animated.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SwiperCard;
