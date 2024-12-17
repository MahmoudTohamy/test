/** @format */

import React from "react";
import Image from "next/image";
import style from "./style.module.scss";
import Link from "../../../../node_modules/next/link";

export default function Footer() {
  return (
    <div className={style.footerCont}>
      <Image src={"/assets/Group2.png"} width={162} height={70} alt='nusuk' />
      <div className={style.footerSections}>
        <div>
          <div>
            <p>Plan Your Trip</p>
            <Link href='/'>For Individuals</Link>
            <Link href='/'>For Businesses</Link>
          </div>
          <div className={style.aboutNusuk}>
            <p>About Nusuk</p>
            <Link href='/'>The Holistic Journey Platform</Link>
            <Link href='/'>About Saudi Arabia</Link>
            <Link href='/'>Currency & Payment</Link>
          </div>
        </div>
        <div>
          <p>Umrah & Ziyarah</p>
          <Link href='/'>Entrance to Umrah</Link>
          <Link href='/'>Travel and Access</Link>
          <Link href='/'>Miqat</Link>
          <Link href='/'>Ihram</Link>
          <Link href='/'>Access to Sanctuary</Link>
          <Link href='/'>Tawaf</Link>
          <Link href='/'>Sa’i</Link>
          <Link href='/'>Entrance to Ziyarah</Link>
        </div>
        <div>
          <p>Makkah</p>
          <Link href='/'>The Grand Mosque</Link>
          <Link href='/'>The Grand Mosque’s Services</Link>
          <Link href='/'>Attractions</Link>
          <Link href='/'>Holy Sites</Link>
          <Link href='/'>Accommodation</Link>
          <Link href='/'>Shopping</Link>
          <Link href='/'>Restaurants and Cafes</Link>
          <Link href='/'>Getting to Makkah</Link>
        </div>
        <div>
          <p>Madinah</p>
          <Link href='/'>Prophet’s Mosque</Link>
          <Link href='/'>Prophet’s Mosque Services</Link>
          <Link href='/'>Attractions</Link>
          <Link href='/'>Accommodation</Link>
          <Link href='/'>Shopping</Link>
          <Link href='/'>Restaurants and Cafes</Link>
          <Link href='/'>Transportation</Link>
          <Link href='/'>Getting to Madinah</Link>
        </div>
      </div>
    </div>
  );
}
