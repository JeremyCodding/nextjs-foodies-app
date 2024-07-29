"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";

export default function NavLink(props) {
  const { href, children } = props;
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${styles.active} ${styles.link}` : styles.link
      }
    >
      {children}
    </Link>
  );
}
