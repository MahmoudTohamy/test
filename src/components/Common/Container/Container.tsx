import { ReactNode } from "react";
import style from "./Container.module.scss";

type TContainerProps = {
  children: ReactNode;
};
const Container = ({ children }: TContainerProps) => {
  return <div className={style.container}>{children}</div>;
};
export default Container;
