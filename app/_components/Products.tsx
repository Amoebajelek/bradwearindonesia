"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Series Ventura",
    desc: "A card component has a figure, a body part, and inside body there are title and actions parts|",
    image: "/Carousel-1.jpg",
  },
  {
    id: 2,
    name: "Series 3",
    desc: "A card component has a figure, a body part, and inside body there are title and actions parts|",
    image: "/Carousel-2.jpg",
  },
  {
    id: 3,
    name: "Series 2",
    desc: "A card component has a figure, a body part, and inside body there are title and actions parts|",
    image: "/Carousel-3.jpg",
  },
  {
    id: 4,
    name: "Series 2",
    desc: "A card component has a figure, a body part, and inside body there are title and actions parts|",
    image: "/Carousel-3.jpg",
  },
  {
    id: 5,
    name: "Series 2",
    desc: "A card component has a figure, a body part, and inside body there are title and actions parts|",
    image: "/Carousel-3.jpg",
  },
  {
    id: 6,
    name: "Series 2",
    desc: "A card component has a figure, a body part, and inside body there are title and actions parts|",
    image: "/Carousel-3.jpg",
  },
];

export default function Products() {
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        {products.map((product) => (
          <div className="card bg-white shadow-sm" key={product.id}>
            <figure>
              <Image
                src={product.image}
                alt="Product 1"
                className=" object-full"
                width={360}
                height={128}
                loading="lazy"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title uppercase text-2xl font-bold overflow-hidden min-w-full">BRANDWEAR <span className=" text-green-500">{product.name}</span></h2>
              <p className="">{product.desc}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
