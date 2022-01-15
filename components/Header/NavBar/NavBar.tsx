import { RoundedButton } from '@/components/common/RoundedButton';
import Link from 'next/link';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link as ScrolledLink } from 'react-scroll';
import styles from './NavBar.module.css';
import Router, { useRouter } from 'next/router';

const navLinkItemStyle =
  'hover:text-primary_text hover:text-bold transition duration-300 ';

const NavBar = (): JSX.Element => {
  const router = useRouter();
  const [detach, setDetach] = useState(false);

  const pathname = router.pathname;

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

  var headerStyles = 'fixed top-0 w-screen py-4 z-10 bg-primary ';
  if (detach) headerStyles += 'border-b shadow border-white ' + styles.header;

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
        {pathname !== '/contact' && (
          <nav className="w-full flex justify-end items-center">
            <ul className="w-full flex justify-end items-center m-auto space-x-8 py-4">
              <li className={classNames(navLinkItemStyle, styles.navItem)}>
                <ScrolledLink to="overview" smooth={true} offset={-100}>
                  Overview
                </ScrolledLink>
              </li>
              <li className={classNames(navLinkItemStyle, styles.navItem)}>
                <ScrolledLink to="projects" smooth={true} offset={-100}>
                  Projects
                </ScrolledLink>
              </li>
            </ul>
          </nav>
        )}
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
