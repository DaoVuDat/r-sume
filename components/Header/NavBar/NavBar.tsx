import { RoundedButton } from '@/components/common/RoundedButton';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link as ScrolledLink } from 'react-scroll';
import styles from './NavBar.module.css';
import { useRouter } from 'next/router';
import { animateScroll as scroll } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, useAnimation } from 'framer-motion';

const navLinkItemStyle =
  'hover:text-secondary_text font-normal transition duration-300 cursor-pointer';

const NavBar = (): JSX.Element => {
  const router = useRouter();
  const [detach, setDetach] = useState(false);
  const hamControl = useAnimation();
  const xControl = useAnimation();
  const contentControl = useAnimation();
  const [isOpened, setIsOpened] = useState(false);

  const pathname = router.pathname;

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 50) {
        setDetach(true);
      } else {
        setDetach(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  let headerStyles = 'fixed top-0 left-0 w-full py-4 z-50 bg-primary ';
  if (detach)
    headerStyles += 'border-b shadow-lg border-slate-400 shadow-slate-700';

  const toggleMenu = async () => {
    if (!isOpened) {
      contentControl.start({
        opacity: 1,
        height: '100vh',
        display: 'block',
        transition: {
          duration: 0.3,
          ease: 'linear',
        },
      });
      await hamControl.start({
        opacity: 0,
        scale: 0,
        transitionEnd: {
          display: 'none',
        },
      });
      await xControl.start({
        opacity: 1,
        display: 'block',
        rotate: 90,
      });
    } else {
      contentControl.start({
        opacity: 0,
        height: 0,
        transition: {
          duration: 0.3,
          ease: 'linear',
        },
        transitionEnd: {
          display: 'none',
        },
      });
      await xControl.start({
        opacity: 0,
        rotate: 0,
        transitionEnd: {
          display: 'none',
        },
      });
      await hamControl.start({
        opacity: 1,
        scale: 1,
        display: 'block',
      });
    }
    setIsOpened((prev) => !prev);
  };

  return (
    <div className={headerStyles}>
      <div
        className={
          'pl-8 lg:pl-0 flex container justify-between items-center m-auto'
        }
      >
        <div className={classNames('text-4xl lg:text-5xl lg:py-4')}>
          <a
            onClick={() => scrollToTop()}
            className={classNames(navLinkItemStyle, 'font-nautigal font-bold')}
          >
            Davu
          </a>
        </div>

        <nav className="hidden w-full lg:flex justify-end items-center">
          <ul className="w-full flex justify-end items-center m-auto space-x-8 py-4">
            <li className={classNames(navLinkItemStyle, styles.navItem)}>
              <a href="#" onClick={() => scroll.scrollToTop()}>
                Home
              </a>
            </li>
            <li className={classNames(navLinkItemStyle, styles.navItem)}>
              <ScrolledLink to="overview" smooth={true} offset={-120}>
                Overview
              </ScrolledLink>
            </li>
            <li className={classNames(navLinkItemStyle, styles.navItem)}>
              <ScrolledLink to="projects" smooth={true} offset={-120}>
                Projects
              </ScrolledLink>
            </li>
            <li className={classNames(navLinkItemStyle, styles.navItem)}>
              <ScrolledLink to="education" smooth={true} offset={-120}>
                Education
              </ScrolledLink>
            </li>
          </ul>
        </nav>

        <div className="hidden lg:block ml-12">
          <ScrolledLink to="contact" smooth={true} offset={-120}>
            <RoundedButton onClick={() => {}}>Contact</RoundedButton>
          </ScrolledLink>
        </div>
        {/* Mobile Nav */}
        <div className="block pr-8 lg:hidden">
          <motion.div initial={{ opacity: 1 }} animate={hamControl}>
            <HiMenu size={24} onClick={toggleMenu} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, display: 'none' }}
            animate={xControl}
          >
            <HiX size={24} onClick={toggleMenu} />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0, display: 'none' }}
        animate={contentControl}
      >
        <nav className="w-full lg:hidden">
          <ul className="mt-16 w-full flex flex-col justify-center items-center m-auto space-y-8 text-2xl">
            <li className={classNames(navLinkItemStyle, styles.navItem)}>
              <a
                href="#"
                onClick={() => {
                  toggleMenu();
                  scroll.scrollToTop();
                }}
              >
                Home
              </a>
            </li>
            <li className={classNames(navLinkItemStyle, styles.navItem)}>
              <ScrolledLink
                to="overview"
                smooth={true}
                offset={-120}
                onClick={toggleMenu}
              >
                Overview
              </ScrolledLink>
            </li>
            <li className={classNames(navLinkItemStyle, styles.navItem)}>
              <ScrolledLink
                to="projects"
                smooth={true}
                offset={-120}
                onClick={toggleMenu}
              >
                Projects
              </ScrolledLink>
            </li>
            <li className={classNames(navLinkItemStyle, styles.navItem)}>
              <ScrolledLink
                to="education"
                smooth={true}
                offset={-120}
                onClick={toggleMenu}
              >
                Education
              </ScrolledLink>
            </li>
          </ul>
        </nav>

        <div className="mt-32 flex justify-center mx-auto lg:hidden">
          <ScrolledLink to="contact" smooth={true} offset={-120}>
            <RoundedButton onClick={() => {}}>Contact</RoundedButton>
          </ScrolledLink>
        </div>
      </motion.div>
    </div>
  );
};

export default NavBar;
