import React from 'react';
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
        <MileStone point="Future Planning">
          <div>Learning creating Webservice ( ASP.NET )</div>
          <div>Getting IELTS certificate</div>
          <div>Continuing studying (Postgraduate)</div>
        </MileStone>
        <MileStone point="03/2020 - Present">
          <div>
            Solving Mathematics Optimization Problems in Construction Field
          </div>
        </MileStone>
        <MileStone point="08/2019">
          <div>TOEFL ITP (score 556) - Expired</div>
        </MileStone>
        <MileStone point="10/2017 - 01/2018">
          <div>Capstone Project at CityNow</div>
          <div>Learning React technology</div>
          <div>Implementing Website for CityNow</div>
        </MileStone>
        <MileStone point="04/2017 - 06/2017">
          <div>Internship at Studio 60 - Front End Position</div>
          <div>Learning HTML, CSS and Javascript</div>
          <div>Using Photoshop for getting information</div>
        </MileStone>
        <MileStone className="mb-4" point="10/2014 - 11/2019">
          <div>
            Undergraduate Study at Đại Học Khoa Học Tự Nhiên TpHCM (HCMUS)
          </div>
          <div>Computer Science Faculty</div>
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
