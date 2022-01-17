import ReactIcon from '@/components/Overview/ReactIcon';
import NextJsIcon from '@/components/Overview/NextJSIcon';
import TypeScriptIcon from '@/components/Overview/TypeScriptIcon';
import TailwindIcon from '@/components/Overview/TailwindIcon';
import NetCoreIcon from '@/components/Overview/NetCoreIcon';

const Overview = () => {
  return (
    <div className="mt-8 pt-8">
      <div className="container m-auto">
        <p className="ml-24 text-lg text-secondary_text">Experience:</p>
        <ul className="mt-8 flex space-x-8 h-32 justify-between">
          <li>
            <ReactIcon />
          </li>
          <li>
            <NextJsIcon />
          </li>
          <li>
            <TypeScriptIcon />
          </li>
          <li>
            <TailwindIcon />
          </li>
          <li>
            <NetCoreIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
