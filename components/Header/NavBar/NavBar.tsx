import { RoundedButton } from '@/components/common/RoundedButton';
import Link from 'next/link';
import classNames from 'classnames';
import React from 'react';
import styles from './NavBar.module.css';

const navLinkItemStyle =
  'hover:text-primary_text hover:text-bold transition duration-300 ';

const NavBar = (): JSX.Element => {
  return (
    <div className="container flex justify-between items-center py-8 m-auto">
      <div className={classNames('text-3xl py-4')}>
        <Link href="/">
          <a className={navLinkItemStyle}>Davu</a>
        </Link>
      </div>
      <nav className="w-full flex justify-end items-center">
        <ul className="w-full flex justify-end items-center m-auto space-x-8 py-4">
          <li className={classNames(navLinkItemStyle, styles.navItem)}>
            <Link href="/overview">
              <a>Overview</a>
            </Link>
          </li>
          <li className={classNames(navLinkItemStyle, styles.navItem)}>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
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
  );
};

export default NavBar;
