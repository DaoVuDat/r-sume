import React, { ReactNode, useEffect, useRef } from 'react';
import { useSpring, animated, SpringRef } from '@react-spring/web';
import classNames from 'classnames';
import useOnScreen from '../../../hooks/useOnScreen';

interface MileStoneProps {
  point: string;
  children: ReactNode;
  className?: string;
  springRefApiOnContent?: SpringRef<any> | null;
}

const MileStone = (props: MileStoneProps): JSX.Element => {
  const { children, className = '', point, springRefApiOnContent } = props;
  const divRef = useRef<HTMLDivElement>(null);

  const [pointStyle, pointApi] = useSpring(() => ({
    from: {
      x: 50,
      opacity: 0,
    },
  }));

  const isIntersecting = useOnScreen(divRef);

  useEffect(() => {
    if (isIntersecting) {
      // trigger animation
      console.log('intersecting');
      pointApi({
        x: 0,
        opacity: 1,
        config: {
          duration: 400,
        },
      });
    }
    return () => {};
  }, [isIntersecting]);

  return (
    <div
      ref={divRef}
      className={classNames('flex justify-end min-h-[200px] z-20 ', className)}
    >
      <div className="relative w-3/4">
        <Item />
        <div className="pl-8 ">
          <animated.div
            style={pointStyle}
            className="text-2xl font-bold tracking-wide"
          >
            {point}
          </animated.div>
          <div className="mt-4 tracking-wide">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MileStone;

const Item = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="22"
      width="28"
      aria-hidden="true"
      className="bg-primary absolute -left-0 top-2 z-20 transform -translate-x-1/2"
    >
      <path
        d="m2.5 10a1 1 0 1 0 0 2zm23 2a1 1 0 1 0 0-2zm-23 0h23v-2h-23z"
        fill="rgb(75,85,99)"
      />
      <circle
        cx="14"
        cy="11"
        fill="rgb(38,46,63)"
        r="5"
        stroke="rgb(75,85,99)"
        strokeWidth="2"
      />
    </svg>
  );
};
