import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "./MainHeader.module.css";
import Image from "next/image";
import MainHeaderBackground from "../MainHeaderBackground";
import { usePathname } from "next/navigation";
import NavLink from "../NavLink/NavLink";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logoImg} alt="logo" priority />
          Next Level Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
