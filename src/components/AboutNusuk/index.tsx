/** @format */

import React from "react";
import Image from "next/image";
import PlatformInfo from "../Home/PlatformInfo/PlatformInfo";
import style from "./style.module.scss";
import Container from "../Common/Container/index";
import { CompHeader } from "../Home/PlanYourTrip/index";
import AboutSaudi from "./AboutSaudi/index";
import CurrencyAndPayments from "./CurrencyAndPayment/index";

export default function AboutNusuk({ tab }: { tab: string }) {
  return (
    <div>
      <div className={style.aboutNusuk}>
        <PlatformInfo
          title='About Nusuk'
          italic='Designed to guide pilgrims on their sacred journey of Hajj'
          msg='and Umrah, Nusuk innovative app blends modern technology with the timeless rituals of devotion, providing all the guidance, support, and resources you need for your journey right at your fingertips.'
        />
        <div className={style.imgCont}>
          <Image
            src='/assets/aboutnusuk.png'
            alt='aboutNusuk'
            width={650}
            height={427}
          />
        </div>
      </div>
      <Container>
        <CompHeader
          title='The Holistic Journey Platform'
          subTitle='Awaken Your Path'
          subTitleItalic='to Spiritual Growth'
          msg='A text explaining Nusuk offering lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit enim, porttitor eget lectus eu, sodales auctor libero. '
          imgSrc='/assets/spiritualGrowth.png'
        />
      </Container>
      <AboutSaudi tab={tab || "language"} />
      <CurrencyAndPayments />
    </div>
  );
}
