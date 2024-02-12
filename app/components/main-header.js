import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import styles from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image priority src={logoImg} alt="Plate with food" />
          Next Level Food
        </Link>
        <NavLink />
      </header>
    </>
  );
}
