import React from 'react';
import Image from 'next/image';

const Hero = (): JSX.Element => {
  return (
    <section className="relative">
      <div className="absolute top-48 left-0 -rotate-90 origin-top-left">
        Left panel button
      </div>
      <div className="flex flex-col ml-20">
        <h1>I&apos;m Dao Vu Dat</h1>
        <p>Short description</p>
        <Image
          src="/images/profile.png"
          alt="profile image"
          width={500}
          height={500}
        />
        <div>
          Experience:
          <ul className="flex space-x-8">
            <li>Ex1</li>
            <li>Ex2</li>
            <li>Ex3</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
