"use client";

import Image from "next/image";

type Props = {};

type Blog = {
  id: number;
  title: string;
  content: string;
  image: string;
};

const MOCKDATA: Blog[] = [
  {
    id: 1,
    title: "Trip Enjoy The Moment1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
  },
  {
    id: 2,
    title: "Trip Enjoy The Moment2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Trip Enjoy The Moment3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://ichef.bbci.co.uk/ace/standard/999/cpsprodpb/11979/production/_131075027_07.jpg",
  },
  {
    id: 4,
    title: "Trip Enjoy The Moment4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 5,
    title: "Trip Enjoy The Moment5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://static.boredpanda.com/blog/wp-content/uploads/2014/01/animal-children-photography-elena-shumilova-2.jpg",
  },
  {
    id: 6,
    title: "Trip Enjoy The Moment6",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://img.freepik.com/free-photo/colorful-heart-air-balloon-shape-collection-concept-isolated-color-background-beautiful-heart-ball-event_90220-1047.jpg",
  },
  {
    id: 7,
    title: "Trip Enjoy The Moment7",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://wallpapers.com/images/featured/rainbow-pictures-povwnf60sljd1snu.jpg",
  },
  {
    id: 8,
    title: "Trip Enjoy The Moment8",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://imagedelivery.net/GUFM4Akk6JWzoEMVBlhEQw/a1d4a992-a9d0-4c9e-cd3e-a4e57b9ea800/w=300",
  },
  {
    id: 9,
    title: "Trip Enjoy The Moment9",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://imagedelivery.net/GUFM4Akk6JWzoEMVBlhEQw/9cbdba43-6c0b-4158-31a9-71f64714fa00/w=300",
  },
  {
    id: 1,
    title: "Trip Enjoy The Moment1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
  },
  {
    id: 2,
    title: "Trip Enjoy The Moment2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Trip Enjoy The Moment3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://ichef.bbci.co.uk/ace/standard/999/cpsprodpb/11979/production/_131075027_07.jpg",
  },
  {
    id: 4,
    title: "Trip Enjoy The Moment4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 5,
    title: "Trip Enjoy The Moment5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://static.boredpanda.com/blog/wp-content/uploads/2014/01/animal-children-photography-elena-shumilova-2.jpg",
  },
  {
    id: 6,
    title: "Trip Enjoy The Moment6",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://img.freepik.com/free-photo/colorful-heart-air-balloon-shape-collection-concept-isolated-color-background-beautiful-heart-ball-event_90220-1047.jpg",
  },
  {
    id: 7,
    title: "Trip Enjoy The Moment7",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://wallpapers.com/images/featured/rainbow-pictures-povwnf60sljd1snu.jpg",
  },
  {
    id: 8,
    title: "Trip Enjoy The Moment8",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://imagedelivery.net/GUFM4Akk6JWzoEMVBlhEQw/a1d4a992-a9d0-4c9e-cd3e-a4e57b9ea800/w=300",
  },
  {
    id: 9,
    title: "Trip Enjoy The Moment9",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://imagedelivery.net/GUFM4Akk6JWzoEMVBlhEQw/9cbdba43-6c0b-4158-31a9-71f64714fa00/w=300",
  },
  {
    id: 1,
    title: "Trip Enjoy The Moment1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
  },
  {
    id: 2,
    title: "Trip Enjoy The Moment2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Trip Enjoy The Moment3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://ichef.bbci.co.uk/ace/standard/999/cpsprodpb/11979/production/_131075027_07.jpg",
  },
  {
    id: 4,
    title: "Trip Enjoy The Moment4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 5,
    title: "Trip Enjoy The Moment5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://static.boredpanda.com/blog/wp-content/uploads/2014/01/animal-children-photography-elena-shumilova-2.jpg",
  },
  {
    id: 6,
    title: "Trip Enjoy The Moment6",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://img.freepik.com/free-photo/colorful-heart-air-balloon-shape-collection-concept-isolated-color-background-beautiful-heart-ball-event_90220-1047.jpg",
  },
  {
    id: 7,
    title: "Trip Enjoy The Moment7",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://wallpapers.com/images/featured/rainbow-pictures-povwnf60sljd1snu.jpg",
  },
  {
    id: 8,
    title: "Trip Enjoy The Moment8",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://imagedelivery.net/GUFM4Akk6JWzoEMVBlhEQw/a1d4a992-a9d0-4c9e-cd3e-a4e57b9ea800/w=300",
  },
  {
    id: 9,
    title: "Trip Enjoy The Moment9",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://imagedelivery.net/GUFM4Akk6JWzoEMVBlhEQw/9cbdba43-6c0b-4158-31a9-71f64714fa00/w=300",
  },
  {
    id: 1,
    title: "Trip Enjoy The Moment1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
  },
  {
    id: 2,
    title: "Trip Enjoy The Moment2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Trip Enjoy The Moment3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://ichef.bbci.co.uk/ace/standard/999/cpsprodpb/11979/production/_131075027_07.jpg",
  },
  {
    id: 4,
    title: "Trip Enjoy The Moment4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 5,
    title: "Trip Enjoy The Moment5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://static.boredpanda.com/blog/wp-content/uploads/2014/01/animal-children-photography-elena-shumilova-2.jpg",
  },
  {
    id: 6,
    title: "Trip Enjoy The Moment6",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://img.freepik.com/free-photo/colorful-heart-air-balloon-shape-collection-concept-isolated-color-background-beautiful-heart-ball-event_90220-1047.jpg",
  },
  {
    id: 7,
    title: "Trip Enjoy The Moment7",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://wallpapers.com/images/featured/rainbow-pictures-povwnf60sljd1snu.jpg",
  },
  {
    id: 8,
    title: "Trip Enjoy The Moment8",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://imagedelivery.net/GUFM4Akk6JWzoEMVBlhEQw/a1d4a992-a9d0-4c9e-cd3e-a4e57b9ea800/w=300",
  },
  {
    id: 9,
    title: "Trip Enjoy The Moment9",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nisl",
    image:
      "https://imagedelivery.net/GUFM4Akk6JWzoEMVBlhEQw/9cbdba43-6c0b-4158-31a9-71f64714fa00/w=300",
  },
];

const BlogContent = (props: Props) => {
  return (
    <>
      <div id="tripblog" className="flex justify-center pt-20">
        <div className="border border-slate-500 bg-slate-600 py-2 px-6 rounded-md shadow-lg">
          <h3 className="text-xl font-medium text-cyan-50">
            Trip Enjoy The Moment
          </h3>
        </div>
      </div>
      <div className="columns-1 pt-8 sm:columns-3 lg:columns-5 mx-32">
        {MOCKDATA.map((data) => (
          <div key={data.id} className="break-inside-avoid mb-4">
            <Image
              src={data.image}
              alt={data.title}
              layout="responsive"
              width={100}
              height={100}
              className="shadow-lg"
            />
            <h3 className="text-xl font-medium text-slate-500 mt-2">
              {data.title}
            </h3>
            <p className="text-sm text-slate-500">{data.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogContent;