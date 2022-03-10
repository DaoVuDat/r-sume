import React, { useEffect, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg';
import { HiCheck } from 'react-icons/hi';
import Image from 'next/image';
import { RoundedButton } from '@/components/common/RoundedButton';

interface SwiperCardProps {
  data: {
    image: string;
    name: string;
    description: string;
    tech: string[];
    link: string;
    type: string;
    time: string;
  }[];
}

const SwiperCard = ({ data }: SwiperCardProps): JSX.Element => {
  const [selectIndex, setSelectIndex] = useState(0);

  const dataTransition = useTransition(data[selectIndex], {
    from: { opacity: 0, transform: 'scale(1.1)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    config: {
      duration: 400,
    },
    exitBeforeEnter: true,
    key: data[selectIndex].name,
  });

  const listItemTransitions = useTransition(data[selectIndex].tech, {
    trail: 200,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: {
      duration: 600,
    },
    exitBeforeEnter: true,
    keys: (item) => `${data[selectIndex].tech.length}-${item}`,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectIndex((prevState) => {
        if (prevState === data.length - 1) {
          return 0;
        } else {
          return prevState + 1;
        }
      });
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [data.length, selectIndex]);

  const prevOnClick = () => {
    if (selectIndex === 0) {
      setSelectIndex(data.length - 1);
      return;
    }
    setSelectIndex(selectIndex - 1);
  };
  const nextOnClick = () => {
    if (selectIndex === data.length - 1) {
      setSelectIndex(0);
      return;
    }
    setSelectIndex(selectIndex + 1);
  };

  return (
    // Image Section
    <div className="w-full md:w-2/3 mx-auto bg-[#3C4756] rounded-sm md:rounded-br-3xl overflow-hidden shadow-lg shadow-gray-800">
      <div className="h-80 w-full z-10 overflow-hidden">
        {dataTransition(({ opacity, transform }, item) => (
          <animated.div
            className="relative w-full h-full"
            style={{ opacity, transform: transform }}
          >
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              src={item.image}
              alt={item.name}
              priority
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
          </animated.div>
        ))}
      </div>

      {/* Prev, Next and Explore Button*/}
      <div className="relative flex flex-col md:flex-row py-4 px-8 justify-between items-center">
        <div className="w-full md:w-auto flex justify-between">
          <div>
            <div className="flex space-x-5 md:justify-around">
              <span className="font-bold">{selectIndex + 1}</span>
              <span>of</span>
              <span className="font-bold">{data.length}</span>
            </div>
            <div className="flex justify-between mt-1 text-2xl">
              <button
                onClick={() => prevOnClick()}
                className="cursor-pointer transition duration-300 hover:text-secondary_text"
              >
                <CgArrowLongLeft />
              </button>
              <button
                onClick={() => nextOnClick()}
                className="ml-4 lg:ml-8 cursor-pointer transition duration-300 hover:text-secondary_text"
              >
                <CgArrowLongRight />
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <a
              href={data[selectIndex].link}
              target={data[selectIndex].link !== '' ? '_blank' : ''}
              rel="noreferrer"
            >
              <RoundedButton onClick={() => {}}>Explore</RoundedButton>
            </a>
          </div>
        </div>

        <div className="w-[150px] tracking-wider self-start mt-4 lg:self-auto lg:mt-0">
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
        <div className="w-[150px] tracking-wider self-start mt-4 lg:self-auto lg:mt-auto">
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
        <div className="hidden md:block">
          <a
            href={data[selectIndex].link}
            target={data[selectIndex].link !== '' ? '_blank' : ''}
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
