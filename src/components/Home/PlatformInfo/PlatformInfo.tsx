import Container from "@/components/Common/Container/Container";
import styles from "./PlatformInfo.module.scss";
import Image from "next/image";

function PlatformInfo() {
  return (
    <Container>
      <div className={styles.platformInfoCont}>
        <h2 className={styles.title}>The holistic Journey Platform </h2>
        <Image
          width={30}
          height={30}
          alt="purple-shape"
          src={"/assets/purple-shape.svg"}
        />
        <p className={styles.description}>
          The first-ever official planning, booking and experience &nbsp;
          <span>
            platform, to create your Umrah itinerary to Makkah, Madina, and
            beyond. With Nusuk, travelers from all over the world can easily
            organize their entire visit, from applying for an eVisa to booking
            hotels and flights.
          </span>
        </p>
      </div>
    </Container>
  );
}

export default PlatformInfo;
