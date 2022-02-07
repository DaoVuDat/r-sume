import React from 'react';

const Education = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-center font-nautigal text-6xl">My Education.</h2>
      <div
        className="relative mt-16 overflow-hidden
      after:content[''] after:w-[2px] after:bg-gray-600 after:absolute
      after:block after:top-4 after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:z-10"
      >
        <div className="flex w-full h-48">
          <div className="w-3/5">IELTS + abroad study</div>
          <div className="w-2/5">Future Planning</div>
        </div>
        <div className="flex w-full h-48">
          <div className="w-2/5">11/2019</div>
          <div className="w-3/5">HCMUS Graduation</div>
        </div>
        <div className="flex w-full h-48">
          <div className="w-3/5">TOEFL ITP (score 556)</div>
          <div className="w-2/5">08/2019</div>
        </div>
        <div className="flex w-full h-48">
          <div className="w-2/5">04/2017</div>
          <div className="w-3/5">Internship Studio-S60</div>
        </div>
        <div className="flex w-full h-48">
          <div className="w-3/5">HCMUS Admission</div>
          <div className="w-2/5">10/2014</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
