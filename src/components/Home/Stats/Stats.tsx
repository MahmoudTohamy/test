import Container from "@/components/Common/Container";
import styles from "./stats.module.scss";
import Image from "next/image";

function Stats() {
  return (
    <div className={styles.stats}>
      <Container>
        <div className={styles.content}>
          <div className={styles.ourNumbers}>
            <div className={styles.card}>
              <h3>8.7%</h3>
              <p>
                Increase <br /> compared to 2022
              </p>
            </div>
            <div className={styles.card}>
              <h3>26.8 Million</h3>
              <p>
                Million Umrah <br /> performers in 2023
              </p>
            </div>
            <div className={styles.card}>
              <h3>61.8%</h3>
              <p>
                More compared <br />
                to 2022
              </p>
            </div>

            <div className={styles.card}>
              <h3>13.5 Million</h3>
              <p>
                Million international <br /> Umrah performers in 2023
              </p>
            </div>
          </div>
          <div className={styles.data}>
            <div className={styles.heading}>
              <Image
                alt="green shape"
                width={29}
                height={29}
                src={"/assets/greenShape.svg"}
              />
              <h3>Data</h3>
            </div>
            <h2 className={styles.title}>Pilgrimage at a glance</h2>
            <p className={styles.description}>
              During this long period 50 years, the Authority has made
              considerable efforts to develop the approach of work used in
              collecting data in order to reach the highest levels of accuracy
              and comprehensiveness. The use of modern technologies in the
              process of Hajj statistics has played an essential role in
              extracting the desired results quickly.
            </p>
            <ul className={styles.appOwner}>
              <li className={styles.companyName}>datasaudi</li>
              <li className={styles.separator}></li>
              <li className={styles.companyName}>arabia-it</li>
              <li className={styles.separator}></li>
              <li className={styles.companyName}>surahapp</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Stats;
