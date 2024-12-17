/** @format */

import Header from "@/components/Home/Header/Header";
import PlanYourTrip from "@/components/Home/PlanYourTrip/index";
import PlatformInfo from "@/components/Home/PlatformInfo/PlatformInfo";
import Services from "@/components/Home/Services/index";
import style from "./page.module.scss";
import Stats from "@/components/Home/Stats/Stats";
import FAQ from "@/components/Home/FAQ/FAQ";

type TProps = {
  searchParams: {
    activeId: string;
  };
  params: { locale: string; activeId: string };
};

export default function page({ searchParams }: TProps) {
  return (
    <div className={style.home}>
      <Header />
      <div className={style.body}>
        <PlatformInfo />
        <PlanYourTrip
          activeId={searchParams?.activeId ? searchParams.activeId : "1"}
        />
        <Services />
        <Stats />
        <FAQ />
      </div>
    </div>
  );
}
