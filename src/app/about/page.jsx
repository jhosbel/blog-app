import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam animi
            optio ut sunt recusandae porro cum aspernatur dolorum repellat,
            ratione corporis impedit perferendis consequatur quia, illo, quam
            distinctio beatae sed laudantium odio nisi! Esse eligendi architecto
            tempore tempora ut, error sunt cum?.
            <br />
            <br />
            Harum natus
            labore, mollitia quam molestias, repudiandae doloribus quidem
            expedita magni eos, odio error quisquam. Temporibus perspiciatis
            porro magnam tenetur.
          </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>Who We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam animi
            optio ut sunt recusandae porro cum aspernatur dolorum repellat,
            ratione corporis impedit perferendis consequatur quia, illo, quam
            distinctio beatae sed laudantium odio nisi!.
            <br />
            <br /> - Creative Illustrations 
            <br />
            <br /> - Dynamic Websites 
            <br />
            <br /> - Fast and Handy Mobil Apps
          </p>
          <Button url='/contact' text='Contact' />
        </div>
      </div>
    </div>
  );
}

export default About;
