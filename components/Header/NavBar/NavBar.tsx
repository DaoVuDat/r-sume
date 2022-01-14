import { RoundedButton } from '@/components/common/RoundedButton';
import Link from 'next/link';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link as ScrolledLink } from 'react-scroll';
import styles from './NavBar.module.css';

const navLinkItemStyle =
  'hover:text-primary_text hover:text-bold transition duration-300 ';

const NavBar = (): JSX.Element => {
  const [detach, setDetach] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setDetach(true);
      } else {
        setDetach(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  var headerStyles = 'w-screen py-8 z-10 bg-primary ';
  if (detach)
    headerStyles +=
      ' fixed top-0 py-4 border-b shadow border-white ' + styles.header;

  return (
    <div className={headerStyles}>
      <div className={'container flex justify-between items-center m-auto '}>
        <div className={classNames('text-3xl py-4')}>
          <Link href="/">
            <a
              className={classNames(
                navLinkItemStyle,
                'font-nautigal font-bold'
              )}
            >
              Davu
            </a>
          </Link>
        </div>
        <nav className="w-full flex justify-end items-center">
          <ul className="w-full flex justify-end items-center m-auto space-x-8 py-4">
            <li className={classNames(navLinkItemStyle, styles.navItem)}>
              <ScrolledLink to="overview" smooth={true}>
                Overview
              </ScrolledLink>
            </li>
            <li className={classNames(navLinkItemStyle, styles.navItem)}>
              <ScrolledLink to="projects" smooth={true}>
                Projects
              </ScrolledLink>
            </li>
          </ul>
        </nav>
        <div className="ml-12">
          <Link href="/contact">
            <a>
              <RoundedButton onClick={() => console.log('Button Click')}>
                Contact
              </RoundedButton>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
