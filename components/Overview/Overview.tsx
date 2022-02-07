import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import {
  NetCoreIcon,
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
        <h3 className="ml-24 text-secondary_text font-nautigal font-bold text-3xl tracking-widest">
          Experience:
        </h3>
        <ul className="mt-8 flex space-x-8 h-32 justify-between">
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
          <li className={listIconStyle}>
            <a
              href="https://dotnet.microsoft.com/"
              target="_blank"
              rel="noreferrer"
            >
              <NetCoreIcon />
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              accusantium dignissimos ea eos excepturi explicabo impedit itaque,
              minima, molestiae molestias nisi quam quia quidem sunt suscipit.
              Mollitia recusandae saepe voluptates.
              <div className="flex mt-6">
                <HiOutlineCheckCircle size={28} />
                <div className="ml-8">
                  <h3 className="text-xl font-bold pl-2">Creative Idea.</h3>
                  <ul className="text-base">
                    <li className="mt-6">
                      <span className="inline-block w-4 h-4 rounded-full border-2" />
                      <span className="ml-8">Find Common Problems</span>
                    </li>
                    <li className="mt-6">
                      <span className="inline-block w-4 h-4 rounded-full border-2" />
                      <span className="ml-8">Research On Problems</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex mt-6">
                <HiOutlineCheckCircle size={28} />
                <div className="ml-8">
                  <h3 className="text-xl font-bold pl-2">Problems Solving.</h3>
                  <ul className="text-base">
                    <li className="mt-6">
                      <span className="inline-block w-4 h-4 rounded-full border-2" />
                      <span className="ml-8">Find Common Problems</span>
                    </li>
                    <li className="mt-6">
                      <span className="inline-block w-4 h-4 rounded-full border-2" />
                      <span className="ml-8">Research On Problems</span>
                    </li>
                    <li className="mt-6">
                      <span className="inline-block w-4 h-4 rounded-full border-2" />
                      <span className="ml-8">Find Common Problems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 text-lg font-bold flex justify-end">
              <Link href="/about">
                <a
                  className="transition duration-300 hover:text-secondary_text
                    after:block after:content-[''] after:w-0 after:h-[2px] after:bg-secondary_text
                    after:transition-[width] after:duration-300 after:hover:w-full
                  "
                >
                  Explore
                  <span className="inline-block w-5 ml-2 animate-custom-translate">
                    &rarr;
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
