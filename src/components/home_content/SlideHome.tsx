"use client";

import Carousel from "react-bootstrap/Carousel";
import SlideItem from "./SlideItem";

export default function SlideHome() {
  return (
    <Carousel controls={false}>
      <Carousel.Item interval={3500}>
        <SlideItem pictureUrl="https://wallpapers.com/images/featured/travel-hd-axhrsecphqby11wk.jpg" />
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <SlideItem pictureUrl="https://wallpapers.com/images/hd/travel-wallpaper-s4-wallpaper-ibackgroundwallpaper-9oel6c93nep4tpfd.jpg" />
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <SlideItem pictureUrl="https://getwallpapers.com/wallpaper/full/1/3/f/150817.jpg" />
      </Carousel.Item>
    </Carousel>
  );
}
