import Form from "@/components/Form";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-cover bg-center bg-[url('https://wallpapers.com/images/hd/travel-wallpaper-s4-wallpaper-ibackgroundwallpaper-9oel6c93nep4tpfd.jpg')] pt-16">
        <Header />
        <Hero />
        <Form />
      </div>
    </>
  );
}
