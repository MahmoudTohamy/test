/** @format */

import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerCont}>
        <div className={styles.date}>
          <span>143</span>
          <p>days to next Hajj</p>
        </div>
        <div className={styles.separator} />
        <div className={styles.date}>
          <span>234</span>
          <p>days to Ramadan</p>
        </div>
      </div>
      <h1 className={styles.title}>
        Awaken
        <Image
          className={styles.makkaImg}
          src='/assets/makka.svg'
          alt='makka'
          width={47}
          height={49}
        />
        Your Path to Spiritual Growth.
      </h1>
      <div className={styles.mockup}>
        <Image src={"/assets/iphone14Mockup.png"} alt='iphone14Mockup' fill />
      </div>
      <Link href={"#"} target='_blank' className={styles.downloadApp}>
        <div className={styles.downloadAppCont}>
          <Image
            src={"/assets/downloadAppShape.svg"}
            alt='downloadAppShape'
            width={102}
            className={styles.downloadAppShape}
            height={108}
          />
          <p className={styles.downloadAppText}>Download the app</p>
        </div>
      </Link>
    </div>
  );
}

export default Header;
