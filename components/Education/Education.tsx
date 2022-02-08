import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { MileStone } from '@/components/Education/MileStone';

const Education = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-center font-nautigal text-6xl">My Education.</h2>
      <div
        className="mt-16 w-full relative overflow-hidden z-20
      after:content[''] after:w-[2px] after:bg-gray-600 after:absolute
      after:block after:top-4 after:bottom-0 after:left-1/4 after:z-10 after:transform after:-translate-x-1/2"
      >
        <Circle />
        <MileStone className="mt-16" point="Future Planning">
          IELTS + abroad study
        </MileStone>
        <MileStone point="11/2019">HCMUS Graduation</MileStone>
        <MileStone point="08/2019">TOEFL ITP (score 556)</MileStone>
        <MileStone point="04/2017">Internship Studio-S60</MileStone>
        <MileStone className="mb-8" point="10/2014">
          HCMUS Admission
        </MileStone>
        <span
          className="absolute bottom-0 left-1/4 transform -translate-x-1/2
         w-8 border border-gray-600"
        />
      </div>
    </div>
  );
};

export default Education;

const Circle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 28 20"
      aria-hidden="true"
      className="absolute left-1/4 transform -translate-x-1/2 bg-primary z-20 w-7 h-7"
    >
      <circle
        cx="14"
        cy="10"
        r="5"
        fill="rgb(38,46,63)"
        stroke="rgb(75,85,99)"
        strokeWidth="2"
      />
    </svg>
  );
};
