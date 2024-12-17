/** @format */

import React from "react";
import Image from "next/image";
import { HiArrowSmallRight } from "react-icons/hi2";

import style from "./style.module.scss";
import clsx from "clsx";
import Link from "next/link";
import Container from "@/components/Common/Container/index";

const steps = [
  {
    number: "01",
    title: "Start your Visa Process",
    disc: "Follow the simple steps to satisfy entry requirements to Saudi Arabia.",
  },
  {
    number: "02",
    title: "Umrah & Ziyarah",
    disc: "All you need to know about Umrah Rituals & Ziyarah to Almasjid Alnabawi.",
  },
  {
    number: "03",
    title: "Hajj",
    disc: "All you need to know about Hajj to perform your lifetime journey.",
  },
  {
    number: "04",
    title: "Explore Makkah",
    disc: "All you need to know about  Makkah, to go and see the Holy Sites.",
  },
  {
    number: "05",
    title: "Explore Madinah",
    disc: "When in Madinah, go and explore the majestic and historic destination.",
  },
];
export default function PlanYourTrip({ activeId }: { activeId: string }) {
  return (
    <div className={style.planningCont}>
      <Container>
        <>
          <div className={style.infoCont}>
            <div className={style.titleAndInfo}>
              <h2>
                <Image
                  alt="icon"
                  src={"/assets/Group2147208538.png"}
                  width={34}
                  height={34}
                />{" "}
                Plan your trip
              </h2>
              <p>
                Start planning <br />
                <i>your journey</i>
              </p>
              <span>
                Everything you need to know to start planning your journey to
                Makkah and Madinah.
              </span>
            </div>
            <Image
              src={"/assets/49e0935904126d14a6fb150377b773ce.png"}
              alt="hajj"
              width={755}
              height={322}
            />
          </div>
          <div className={style.serviceSteps}>
            {steps.map((step) => (
              <Step key={step.number} {...step} activeId={activeId} />
            ))}
          </div>
        </>
      </Container>
    </div>
  );
}

const Step = ({
  number,
  title,
  disc,
  activeId,
}: {
  number: string;
  title: string;
  disc: string;
  activeId: string;
}) => {
  return (
    <Link scroll={false} href={`/en?activeId=${Number(number)}`}>
      <div
        className={clsx(
          style.step,
          Number(activeId) === Number(number) && style.activeTab
        )}
      >
        <div className={style.numberAndArrow}>
          <p>{number}</p>
          {Number(activeId) === Number(number) ? (
            <HiArrowSmallRight size={22} />
          ) : null}
        </div>

        <h3>{title}</h3>
        <span>{disc}</span>
      </div>
    </Link>
  );
};
