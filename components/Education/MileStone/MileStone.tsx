import React, { ReactNode, useEffect, useRef } from 'react';
import { useAnimation, motion, AnimationControls } from 'framer-motion';
import classNames from 'classnames';
import useOnScreen from '../../../hooks/useOnScreen';

interface MileStoneProps {
  point: string;
  children: ReactNode;
  className?: string;
  controls?: AnimationControls;
}

const listVariant = {
  initial: {},
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      ease: 'easeInOut',
    },
  },
};

const itemVariant = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const MileStone = (props: MileStoneProps): JSX.Element => {
  const { children, className = '', point } = props;

  const titleControl = useAnimation();
  const listControl = useAnimation();

  const divRef = useRef<HTMLDivElement>(null);
  const divChildren = React.Children.toArray(children);

  const isIntersecting = useOnScreen(divRef);

  useEffect(() => {
    if (isIntersecting) {
      // trigger animation

      const sequence = async () => {
        await titleControl.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.7 },
        });
        return await listControl.start('animate');
      };
      sequence().then();
    }
    return () => {};
  }, [isIntersecting, listControl, titleControl]);

  return (
    <div
      ref={divRef}
      className={classNames(
        'mt-24 flex justify-end min-h-[100px] z-20 ',
        className
      )}
    >
      <div className="relative w-3/4">
        <Item />
        <div className="pl-8 ">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={titleControl}
            className="text-4xl font-bold tracking-wide"
          >
            {point}
          </motion.div>
          <motion.div
            initial="initial"
            variants={listVariant}
            animate={listControl}
            className="mt-4 tracking-wide space-y-4"
          >
            {divChildren.map((item, index) => (
              <motion.div key={index} variants={itemVariant}>
                {item}
              </motion.div>
            ))}
          </motion.div>
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
