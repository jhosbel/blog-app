import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      <div>©2024 Jhosbel. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          alt="Jhosbel Dev Facebook Acount"
          className={styles.icon}
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          alt="Jhosbel Dev Instagram Account"
          className={styles.icon}
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          alt="Jhosbel Dev Twitter Account"
          className={styles.icon}
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          alt="Jhosbel Dev Youtube Account"
          className={styles.icon}
        />
      </div>
    </div>
  );
}

export default Footer;
