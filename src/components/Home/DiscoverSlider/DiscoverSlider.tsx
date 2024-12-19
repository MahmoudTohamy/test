"use client";
import Container from "@/components/Common/Container";
import styles from "./DiscoverSlider.module.scss";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import React, { useCallback, useState } from "react";
import Discover from "../Discover/Discover";
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
const data = [
  {
    header: {
      logo: "/assets/makka.svg",
      text: "Hajj",
    },
    description: {
      primary: "Discover Nusuk Hajj your gateway to the journey of a lifetime",
      secondary:
        "A platform that facilitates the journey of Hajj pilgrims from 126 specified countries, offering packages to ensure a smooth experience through accredited providers.",
    },
    gallery: [
      {
        image: "/assets/muslims.jpg",
        link: "#",
        name: "Local Hajj",
      },
      {
        image: "/assets/hand.jpg",
        link: "#",
        name: "International Hajj",
      },
    ],
  },
  {
    header: {
      logo: "/assets/purple-shape.svg",
      text: "Umrah & Ziyarah",
    },
    description: {
      primary:
        "All you need to know about Rituals to perform in Umrah and Ziyarah Al Masjid An Nabawi",
      secondary:
        "A platform that facilitates the journey of Hajj pilgrims from 126 specified countries, offering packages to ensure a smooth experience through accredited providers.",
    },
    gallery: [
      {
        image: "/assets/people.png",
        link: "#",
        name: "Umrah",
      },
      {
        image: "/assets/hand.jpg",
        link: "#",
        name: "Ziyarah Al Masjid An Nabawi",
      },
    ],
  },
];

function DiscoverSlider() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const sliderRef = React.useRef<SwiperRef | null>(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    setCurrentSlide((prev) => Math.max(1, prev - 1));
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    setCurrentSlide((prev) => Math.min(data.length, prev + 1));
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className={styles.discoverSlider}>
      <div className={styles.discoverSliderCont}>
        <Container>
          <div className={styles.sliderControl}>
            <h3 className={styles.active}>
              {currentSlide}/{data.length}
            </h3>
            <div className={styles.arrows}>
              <div className={styles.arrow} onClick={handlePrev}>
                <IoArrowBack className={styles.icon} fontSize={22} />
              </div>
              <div className={styles.arrow} onClick={handleNext}>
                <IoArrowForward className={styles.icon} fontSize={22} />
              </div>
            </div>
          </div>
        </Container>
        <div className={styles.slider}>
          <Swiper
            ref={sliderRef}
            spaceBetween={50}
            modules={[Navigation]}
            pagination={false}
            scrollbar={{ draggable: true }}
            loop
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1.45,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.header.text}>
                <Discover
                  description={item.description}
                  header={item.header}
                  gallery={item.gallery}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default DiscoverSlider;
