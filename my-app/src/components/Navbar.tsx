import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <h1 className={style.logo}>
        <Link href="/" className={style.navlink}>Personal Website</Link>
      </h1>
      <ul className={style.navlist}>
        <li><Link href="/" className={style.navlink}>Home</Link></li>
        <li><Link href="/blog" className={style.navlink}>Blog</Link></li>
        <li><Link href="/portfolio" className={style.navlink}>Portfolio</Link></li>
        <li><Link href="/resume" className={style.navlink}>Resume</Link></li>
        <li><Link href="/contact" className={style.navlink}>Contact</Link></li>
      </ul>
    </header>
  );
}
