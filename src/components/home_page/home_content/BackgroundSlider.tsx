"use client";
import BackgroundSlider from "react-background-slider";

export default function MyBackgroundSlider() {
  return (
    <BackgroundSlider
      images={[
        "https://wallpapers.com/images/featured/travel-hd-axhrsecphqby11wk.jpg",
        "https://wallpapers.com/images/hd/travel-wallpaper-s4-wallpaper-ibackgroundwallpaper-9oel6c93nep4tpfd.jpg",
        "https://getwallpapers.com/wallpaper/full/1/3/f/150817.jpg",
      ]}
      duration={10}
      transition={2}
    />
  );
}
