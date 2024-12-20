/** @format */

import Container from "@/components/Common/Container/Container";
import styles from "./PlatformInfo.module.scss";
import Image from "next/image";

function PlatformInfo({
  title,
  italic,
  msg,
}: {
  title: string;
  italic: string;
  msg: string;
}) {
  return (
    <Container>
      <div className={styles.platformInfoCont}>
        <h2 className={styles.title}>{title}</h2>
        <Image
          width={30}
          height={30}
          alt='purple-shape'
          src={"/assets/purple-shape.svg"}
        />
        <p className={styles.description}>
          <i> {italic} &nbsp;</i>
          <span>{msg}</span>
        </p>
      </div>
    </Container>
  );
}

export default PlatformInfo;
