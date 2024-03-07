"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboad",
    url: "/dashboard",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const session = useSession();
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        JhosbelDev
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
      <nav className={styles.containerMobile}>
        <div className={styles.containerButton}>
          <button className={styles.buttonBurger} onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
        {isOpen && (
          <div className={styles.linksMobile}>
            <DarkModeToggle />
            {links.map((link) => (
              <Link key={link.id} href={link.url} className={styles.link}>
                {link.title}
              </Link>
            ))}
            {session.status === "authenticated" && (
              <button className={styles.logout} onClick={signOut}>
                Logout
              </button>
            )}
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
