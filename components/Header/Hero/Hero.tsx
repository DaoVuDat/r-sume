import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const iconStyle = `border rounded-sm border-primary p-2 
    hover:border-secondary_hover hover:text-secondary_hover 
    transition duration-300 cursor-pointer`;

const Hero = (): JSX.Element => {
  return (
    <section className="relative mt-4">
      <div className="absolute top-4 left-0 flex flex-col space-y-4 justify-start items-start">
        <div className={iconStyle}>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
        </div>
        <div className={iconStyle}>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
        <div className={iconStyle}>
          <a href="https://www.github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="flex flex-col ml-20 flex-1">
        <h1 className="text-4xl font-bold tracking-widest font-nautigal">
          I&apos;m Dao Vu Dat
        </h1>
        <p className="text-sm text-gray-500">
          Developer and love listening music.
        </p>
        <Image
          src="/images/profile.png"
          alt="profile image"
          width={500}
          height={500}
          priority={true}
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
