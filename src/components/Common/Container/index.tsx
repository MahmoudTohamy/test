/** @format */

import React from "react";
import style from "./style.module.scss";

export default function Container({
  children,
}: {
  children: React.ReactElement;
}) {
  return <div className={style.container}>{children}</div>;
}
