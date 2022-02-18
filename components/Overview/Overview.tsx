import Image from 'next/image';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import {
  NextJsIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
} from '@/components/Overview/SVGIcons';

const listIconStyle = `border-2 p-4 rounded-lg border-transparent hover:border-secondary_hover transition duration-300 cursor-pointer`;

const Overview = () => {
  return (
    <div>
      {/*EXPERIENCE SECTION*/}
      <div className="container m-auto">
        <h3 className="ml-24 font-nautigal font-bold text-3xl tracking-widest">
          Experience:
        </h3>
        <ul className="mt-8 flex h-32 justify-between">
          <li className={listIconStyle}>
            <a href="https://www.reactjs.org" target="_blank" rel="noreferrer">
              <ReactIcon />
            </a>
          </li>
          <li className={listIconStyle}>
            <a href="https://www.nextjs.org" target="_blank" rel="noreferrer">
              <NextJsIcon />
            </a>
          </li>
          <li className={listIconStyle}>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              <TypeScriptIcon />
            </a>
          </li>
          <li className={listIconStyle}>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <TailwindIcon />
            </a>
          </li>
        </ul>
      </div>
      {/* ABOUT ME SECTION */}
      <div className="mt-16 flex">
        <div>
          <div className="w-[400px] h-full relative">
            <Image
              className="rounded-br-xl rounded-tr-xl"
              layout="fill"
              objectFit="cover"
              src="/images/aboutme.jpg"
              alt="Profile image"
            />
          </div>
        </div>
        <div className="flex-1 pl-16">
          <div className="w-2/3 mx-auto">
            <h2 className="text-6xl font-nautigal">About Me.</h2>
            <div className="tracking-widest leading-relaxed mt-4">
              Looking for a company in order to apply my experiences and gain my
              knowledge. In addition, I am be able to accumulate my experience
              during working with professional colleagues. I am always eager to
              learn new skills to support my future career. Therefore, I could
              be better in working as a team or as myself.
              <div className="flex mt-6">
                <HiOutlineCheckCircle size={28} />
                <div className="ml-8">
                  <h3 className="text-xl font-bold pl-2">Hard Skills.</h3>
                  <ul className="text-base">
                    <li className="mt-6">
                      <span className="inline-block w-4 h-4 rounded-full border-2" />
                      <span className="ml-8">HTML / CSS</span>
                    </li>
                    <li className="mt-6">
                      <span className="inline-block w-4 h-4 rounded-full border-2" />
                      <span className="ml-8">ReactJS / NextJS</span>
                    </li>
                    <li className="mt-6">
                      <span className="inline-block w-4 h-4 rounded-full border-2" />
                      <span className="ml-8">
                        TailwindCSS and some UI libraries
                      </span>
                    </li>
                    <li className="mt-6">
                      <span className="inline-block w-4 h-4 rounded-full border-2" />
                      <span className="ml-8">State Management with Redux</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex mt-6">
                <HiOutlineCheckCircle size={28} />
                <div className="ml-8">
                  <h3 className="text-xl font-bold pl-2">Soft Skills.</h3>
                  <ul className="text-base">
                    <li className="mt-6">
                      <span className="inline-block w-4 h-4 rounded-full border-2" />
                      <span className="ml-8">Research On Problems</span>
                    </li>
                    <li className="mt-6">
                      <span className="inline-block w-4 h-4 rounded-full border-2" />
                      <span className="ml-8">Update New Knowledge</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 text-lg font-bold flex justify-end">
              <a
                className="cursor-pointer transition duration-300 hover:text-secondary_text
                    after:block after:content-[''] after:w-0 after:h-[2px] after:bg-secondary_text
                    after:transition-[width] after:duration-300 after:hover:w-full
                  "
              >
                Explore
                <span className="inline-block w-5 ml-2 animate-custom-translate">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
