/** @format */

import Header from "@/components/Home/Header/Header";
import PlanYourTrip from "@/components/Home/PlanYourTrip/index";
import PlatformInfo from "@/components/Home/PlatformInfo/PlatformInfo";
import Services from "@/components/Home/Services/index";
import style from "./page.module.scss";
import Stats from "@/components/Home/Stats/Stats";
import DiscoverSlider from "@/components/Home/DiscoverSlider/DiscoverSlider";

type TProps = {
  searchParams: Promise<{
    activeId: string;
  }>;
};

export default async function page({ searchParams }: TProps) {
  const { activeId } = await searchParams;
  return (
    <div className={style.home}>
      <Header />
      <div className={style.body}>
        <PlatformInfo
          title='The holistic Journey Platform'
          italic='The first-ever official planning, booking and experience'
          msg='platform, to create your Umrah itinerary to Makkah, Madina, and beyond. With Nusuk, travelers from all over the world can easily organize their entire visit, from applying for an eVisa to booking hotels and flights.'
        />
        <PlanYourTrip activeId={activeId ? activeId : "1"} />
        <Services />
        <Stats />
        <DiscoverSlider />
      </div>
    </div>
  );
}
