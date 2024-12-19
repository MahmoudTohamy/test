import Link from "next/link";
import styles from "./Discover.module.scss";
import Image from "next/image";

type TProps = {
  header: {
    logo: string;
    text: string;
  };
  description: {
    primary: string;
    secondary: string;
  };
  gallery: {
    image: string;
    link: string;
    name: string;
  }[];
};

function Discover({ header, description, gallery }: TProps) {
  return (
    <div className={styles.discover}>
      <div className={styles.discoverCont}>
        <div className={styles.header}>
          <Image width={30} height={30} alt="logo" src={header.logo} />
          <h2>{header.text}</h2>
        </div>
        <div className={styles.description}>
          <p className={styles.primary}>{description.primary}</p>
          <p className={styles.secondary}>{description.secondary}</p>
        </div>
        <div className={styles.gallery}>
          {gallery.map((item) => (
            <div key={item.name} className={styles.item}>
              <Image
                src={item.image}
                alt={item.name}
                width={495}
                height={328}
              />
              <div className={styles.overlay} />
              <div className={styles.info}>
                <p className={styles.name}>{item.name}</p>
                <Link href={item.link}>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Discover;
