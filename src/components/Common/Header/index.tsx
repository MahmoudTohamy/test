/** @format */

import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { SlArrowDown } from "react-icons/sl";

import Image from "next/image";
import style from "./style.module.scss";

export default function Header() {
  return (
    <div className={style.headerCont}>
      <HiOutlineMenuAlt2 size={30} />
      <Image src='/assets/Vector.png' width={24} height={24} alt='nusuk' />
      <div className={style.actions}>
        <p>
          EN <SlArrowDown size={11} />
        </p>
        <button>Plan your trip</button>
      </div>
    </div>
  );
}
