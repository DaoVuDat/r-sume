import React, { useEffect } from 'react';
import Image from 'next/image';
import Typed from 'typed.js';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Wave from './Wave';

const iconStyle = `border rounded-sm border-primary p-2 
    hover:border-secondary_hover hover:text-secondary_hover 
    transition duration-300 cursor-pointer`;

const options = {
  strings: [
    'Welcome to my online resumé !',
    'My name is <strong>Đào Vũ Đạt </strong>.',
    `I am ${new Date().getFullYear() - 1996} years old now.`,
    'I am currently working with <strong>ReactJS</strong>',
    'And learning <strong>.Net Core </strong>  for <strong>Webservice</strong>.',
    'I have grand passionate listening music.',
    'Playing some video games in my spare time.',
    'You could find my all information on this website.',
    'Please <strong>contact </strong>  me if you need anything.',
  ],
  backDelay: 1000,
  typeSpeed: 60,
  loop: true,
  smartBackspace: true,
  showCursor: true,
  cursorChar: ' __',
  backSpeed: 40,
};

const Hero = (): JSX.Element => {
  useEffect(() => {
    const typing = new Typed('#hero-sub', options);
    typing.start();

    return () => {
      typing.stop();
      typing.destroy();
    };
  }, []);

  return (
    <div className="mt-16">
      <div className="relative container m-auto">
        <div className="absolute top-4 left-0 space-y-4 z-10">
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
        <div className="pl-20 relative">
          <h1 className="text-8xl font-bold tracking-widest font-nautigal">
            Đào Vũ Đạt.
          </h1>
          <span
            id="hero-sub"
            className="text-xl text-secondary_text mt-6 tracking-wide h-8"
          />
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
