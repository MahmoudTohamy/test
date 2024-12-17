/** @format */

import React from "react";
import Image from "next/image";
import style from "./style.module.scss";
import Container from "@/components/Common/Container/index";

export default function Services() {
  return (
    <div className={style.servicesCont}>
      <Container>
        <div className={style.body}>
          <div className={style.info}>
            <div className={style.title}>
              <Image
                src='/assets/Subtract.png'
                alt='Services'
                width={30}
                height={30}
              />
              <h4>The holistic Journey Platform</h4>
            </div>
            <h2>
              All services a pilgrim needs <br />
              in <i>a single place</i>
            </h2>
            <div className={style.infoCont}>
              <InfoComp
                title='Your journey'
                number='01'
                italic='companion'
                disc='Nusuk app provides you comprehensive support every step of the
              way.'
              />
              <InfoComp
                title='End to end '
                number='02'
                italic='experience'
                disc='From planning and preparation to experiencing the profound moments
            of devotion.'
              />
              <InfoComp
                title=' All in one '
                number='03'
                italic='place'
                disc='Enjoy all the offering while ensuring a seamless and fulfilling
            experience.'
              />
            </div>
          </div>
          <Image
            src='/assets/Group2147208531.png'
            alt='Services'
            width={533}
            height={635}
          />
        </div>
      </Container>
    </div>
  );
}

const InfoComp = ({
  title,
  number,
  italic,
  disc,
}: {
  title: string;
  number: string;
  italic: string;
  disc: string;
}) => {
  return (
    <div className={style.infoComp}>
      <p>{number}</p>
      <p className={style.serviceTitle}>
        {title} <br />
        <i>{italic}</i>
      </p>
      <p>{disc}</p>
    </div>
  );
};
