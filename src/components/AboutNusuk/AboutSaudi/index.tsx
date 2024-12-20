/** @format */

import Container from "@/components/Common/Container/index";
import React from "react";
import Image from "next/image";
import style from "./style.module.scss";
import clsx from "clsx";
import Link from "next/link";

export default function AboutSaudi({ tab }: { tab: string }) {
  const tabs: Record<string, Record<string, string>> = {
    language: {
      img: "/assets/aboutSaudi.png",
      title: "Language",
      msg: "Arabic is the official language of Saudi Arabia and the primary language used in all dealings and public transactions. English serves as an informal second language in the Kingdom and is spoken by a large section of its society. All road signs are bilingual, showing information in both Arabic and English.",
    },
    culture: {
      img: "/assets/culture.png",
      title: "Culture",
      msg: "Saudi Arabia’s rich heritage and traditions have been shaped by its position as a historic trade hub and the birthplace of Islam. In recent years, the Kingdom has undergone a significant cultural transformation, evolving century-old customs to fit the contemporary world we live in today.",
    },
  };

  return (
    <Container>
      <div className={style.aboutSaudiCont}>
        <div className={style.tabsAndImage}>
          <Image
            src={tabs[tab].img}
            alt={tabs[tab].title}
            width={500}
            height={328}
          />
          <div className={style.tabs}>
            <Tab number='01' title='Language' isActive={tab === "language"} />{" "}
            <Tab number='02' title='Culture' isActive={tab === "culture"} />{" "}
          </div>
        </div>
        <div className={style.info}>
          <div className={style.title}>
            <Image
              src='/assets/Subtract.png'
              alt='Services'
              width={30}
              height={30}
            />
            <h3>About Saudi Arabia</h3>
          </div>
          <h4>{tabs[tab].title}</h4>
          <p>{tabs[tab].msg}</p>
        </div>
      </div>
    </Container>
  );
}
const Tab = ({
  number,
  title,
  isActive,
}: {
  number: string;
  title: string;
  isActive: boolean;
}) => {
  return (
    <Link href={`/about-nusuk?tab=${title.toLowerCase()}`} scroll={false}>
      <div className={clsx(style.tab, isActive && style.activeTab)}>
        <p>{number}</p>
        <span>{title}</span>
      </div>
    </Link>
  );
};
