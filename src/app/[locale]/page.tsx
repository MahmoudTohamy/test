/** @format */

import Header from "@/components/Home/Header/Header";
import PlanYourTrip from "@/components/Home/PlanYourTrip/index";
import PlatformInfo from "@/components/Home/PlatformInfo/PlatformInfo";
import Services from "@/components/Home/Services/index";
import style from "./page.module.scss";
import Stats from "@/components/Home/Stats/Stats";
import FAQ from "@/components/Home/FAQ/FAQ";

export default function page() {
  return (
    <div className={style.home}>
      <Header />
      <div className={style.body}>
        <PlatformInfo />
        <PlanYourTrip activeId={"3"} />
        <Services />
        <Stats />
        <FAQ />
      </div>
    </div>
  );
}
