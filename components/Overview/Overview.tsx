import Image from 'next/image';
import ReactIcon from '@/components/Overview/ReactIcon';
import NextJsIcon from '@/components/Overview/NextJSIcon';
import TypeScriptIcon from '@/components/Overview/TypeScriptIcon';
import TailwindIcon from '@/components/Overview/TailwindIcon';
import NetCoreIcon from '@/components/Overview/NetCoreIcon';

const listIconStyle = `border-2 p-4 rounded-lg border-transparent hover:border-secondary_hover transition duration-300 cursor-pointer`;

const Overview = () => {
  return (
    <div className="mt-8 pt-8">
      {/*EXPERIENCE SECTION*/}
      <div className="container m-auto">
        <h3 className="ml-24 tracking-wide text-secondary_text font-nautigal font-bold text-3xl tracking-widest">
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
          <div className="w-[400px] h-[500px] relative">
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
          <h2 className="text-6xl text-center font-nautigal">About Me.</h2>
          <div className="container">
            content content content content content
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
