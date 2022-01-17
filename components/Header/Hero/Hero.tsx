import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Wave from './Wave';

const iconStyle = `border rounded-sm border-primary p-2 
    hover:border-secondary_hover hover:text-secondary_hover 
    transition duration-300 cursor-pointer`;

const Hero = (): JSX.Element => {
  return (
    <div className="mt-16">
      <div className="relative container m-auto">
        <div className="absolute top-4 left-0 flex flex-col space-y-4 justify-start items-start z-10">
          <div className={iconStyle}>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
          </div>
          <div className={iconStyle}>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className={iconStyle}>
            <a href="https://www.github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="flex flex-col pl-20 flex-1 relative">
          <h1 className="text-6xl font-bold tracking-widest font-nautigal">
            I&apos;m Dao Vu Dat
          </h1>
          <p className="text-xl text-gray-500 mt-4 font-nautigal tracking-wide">
            Developer and love listening music.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* BACKGROUND */}
        <div className="absolute left-0 bottom-0 w-screen">
          <Wave />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/profile.png"
            alt="profile image"
            width={500}
            height={500}
            priority={true}
            className="w-48 h-48"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
