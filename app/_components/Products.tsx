"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Series Ventura",
    sells: "2RB+ terjual",
    desc: "A card component has a figure, a body part, and inside body there are title and actions parts.",
    image: "/Carousel-1.jpg",
  },
  {
    id: 2,
    name: "Series Yuroi",
    sells: "2RB+ terjual",
    desc: "A card component has a figure, a body part, and inside body there are title and actions parts.",
    image: "/Carousel-2.jpg",
  },
  {
    id: 3,
    name: "Series 3",
    sells: "2RB+ terjual",
    desc: "A card component has a figure, a body part, and inside body there are title and actions parts.",
    image: "/Carousel-3.jpg",
  },
  {
    id: 4,
    name: "Series PDH",
    sells: "2RB+ terjual",
    desc: "A card component has a figure, a body part, and inside body there are title and actions parts.",
    image: "/Carousel-3.jpg",
  },
  {
    id: 5,
    name: "Series Robotic",
    sells: "2RB+ terjual",
    desc: "A card component has a figure, a body part, and inside body there are title and actions parts.",
    image: "/Carousel-3.jpg",
  },
  // {
  //   id: 6,
  //   name: "Series 1",
  //   desc: "A card component has a figure, a body part, and inside body there are title and actions parts|",
  //   image: "/Carousel-3.jpg",
  // },
  // {
  //   id: 7,
  //   name: "Series Strazard",
  //   desc: "A card component has a figure, a body part, and inside body there are title and actions parts|",
  //   image: "/Carousel-3.jpg",
  // },
  // {
  //   id: 8,
  //   name: "Series Strazard",
  //   desc: "A card component has a figure, a body part, and inside body there are title and actions parts|",
  //   image: "/Carousel-3.jpg",
  // },
  // {
  //   id: 9,
  //   name: "Series 2",
  //   desc: "A card component has a figure, a body part, and inside body there are title and actions parts|",
  //   image: "/Carousel-3.jpg",
  // },
  // {
  //   id: 10,
  //   name: "Series Brad V-2",
  //   desc: "A card component has a figure, a body part, and inside body there are title and actions parts|",
  //   image: "/Carousel-3.jpg",
  // },
  // {
  //   id: 10,
  //   name: "Series Brad V-1",
  //   desc: "A card component has a figure, a body part, and inside body there are title and actions parts|",
  //   image: "/Carousel-3.jpg",
  // },
];

export default function Products() {
  return (
    <div className="flex flex-col gap-5">

      {/* Title */}
      <div className="flex flex-col gap-0">
        <p className="uppercase text-xs lg:text-sm font-regular text-gray-500">
          best sellers
        </p>
        <h2 className="uppercase text-2xl lg:text-4xl font-bold">
          comfort every day
        </h2>
      </div>
      {/* End Title */}

      {/* Content */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {products.map((product) => (
          <div className="card bg-white shadow-sm" key={product.id}>
            <figure>
              <Image
                src={product.image}
                alt="Product 1"
                className="w-full"
                width={360}
                height={24}
                loading="lazy"
              />
            </figure>
            <div className="card-body p-4 pt-0 gap-0">
              <p className="card-title uppercase text-xl lg:text-2xl font-bold text-green-500">
                {product.name}
              </p>
              <p className="text-slate-500 text-xs font-medium">
                {product.sells}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/*End Content */}
      
    </div>
  );
}
