/** @format */

import Header from "@/components/Home/Header/Header";
import PlanYourTrip from "@/components/Home/PlanYourTrip/index";
import PlatformInfo from "@/components/Home/PlatformInfo/PlatformInfo";
import Services from "@/components/Home/Services/index";
import style from "./page.module.scss";
import Stats from "@/components/Home/Stats/Stats";
import DiscoverSlider from "@/components/Home/DiscoverSlider/DiscoverSlider";

type TProps = {
  searchParams: {
    activeId: string;
  };
};

export default async function page({ searchParams }: TProps) {
  const { activeId } = await searchParams;
  return (
    <div className={style.home}>
      <Header />
      <div className={style.body}>
        <PlatformInfo />
        <PlanYourTrip activeId={activeId ? activeId : "1"} />
        <Services />
        <Stats />
        <DiscoverSlider />
      </div>
    </div>
  );
}
