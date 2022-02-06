import React, { useState } from 'react';
import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg';
import Image from 'next/image';
import { RoundedButton } from '@/components/common/RoundedButton';
import { SVGWave2 } from '@/components/Projects/SwiperCard';

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

const SwiperCard = () => {
  const [selectIndex, setSelectIndex] = useState(0);

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
    <div className="w-3/4 mx-auto bg-[#3C4756] rounded-sm rounded-br-3xl overflow-hidden shadow shadow-gray-800">
      <div className="relative h-80 z-10">
        <Image
          layout="fill"
          objectFit="cover"
          src={sampleData[selectIndex].image}
          alt={sampleData[selectIndex].name}
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
      </div>
      <div className="relative flex py-4 px-8 justify-between">
        <div className="z-10">
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
        <div className="w-1/3 tracking-wider z-10">
          <h3 className="font-bold">Project</h3>
          <p className="text-gray-400 text-sm mt-1">
            {sampleData[selectIndex].name}
          </p>
        </div>
        <div className="z-10">
          <RoundedButton onClick={() => {}}>Explore</RoundedButton>
        </div>
        <div className="absolute -bottom-8 -right-0 w-full">
          <SVGWave2 />
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
