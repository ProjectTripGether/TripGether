import Form from "./Form";
import Header from "./Header";
import Hero from "./Hero";

type Props = {
  pictureUrl: string;
};

export default function SlideItem({ pictureUrl }: Props) {
  return (
    <div
      className={`h-screen bg-cover bg-center pt-16`}
      style={{ backgroundImage: `url(${pictureUrl})` }}
    >
      <Header />
      <div className="flex flex-col items-end mr-[9.5rem] mt-20 space-y-10">
        <Hero />
        <Form />
      </div>
    </div>
  );
}
