import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logo.jpg";

const Categories = [
  {
    id: 1,
    title: "Jackets",
    link: "#",
  },
  {
    id: 2,
    title: "Shirt",
    link: "#",
  },
  {
    id: 3,
    title: "Polo",
    link: "#",
  },
  {
    id: 4,
    title: "Workshirt",
    link: "#",
  },
];
const Products = [
  {
    id: 1,
    title: "Most Popular",
    link: "#",
  },
  {
    id: 2,
    title: "10.10",
    link: "#",
  },
  {
    id: 3,
    title: "Discount up to 50%",
    link: "#",
  },
];
const Getintouch = [
  {
    id: 1,
    title: "Bradwear",
  },
  {
    id: 2,
    title:
      "Karisma Residence, Blok C.46, RT.008/RW.003, Margajaya, Kec. Mangunreja, Kabupaten Tasikmalaya, Jawa Barat 46462",
  },
  {
    id: 3,
    title: "+62 823 1922 6530",
  },
];

export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between bg-black p-12 h-fit items-center">
        <div className="flex flex-col gap-2">
          <Link href="/">
            <Image src={Logo} alt="Logo Bradwear" width={240} />
          </Link>
          <p className="text-sm uppercase font-semibold text-white">
            Stay Bold. Stay Bradwear.
          </p>
        </div>

        <div className="flex gap-24">
          <div className="flex flex-col gap-1 text-white">
            <h4 className="uppercase font-semibold text-sm">Categories</h4>
            <div className="flex flex-col gap-1 uppercase font-regular text-sm ">
              {Categories.map((cat) => (
                <Link href={cat.link} key={cat.id}>
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 text-white">
            <h4 className="uppercase font-semibold text-sm">Products</h4>
            <div className="flex flex-col gap-1 uppercase font-regular text-sm ">
              {Products.map((prod) => (
                <Link href={prod.link} key={prod.id}>
                  {prod.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 text-white max-w-[480px]">
            <h4 className="uppercase font-semibold text-sm">Get In Touch</h4>
            <div className="flex flex-col gap-1 uppercase font-regular text-sm ">
              {Getintouch.map((getintouch) => (
                <p key={getintouch.id}>{getintouch.title}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-black py-6 border-t-1 border-gray-800">
        <p className="font-light text-xs text-white">
          © 2025 Bradwear Indonesia — Built for the Streets, Worn with Pride.
        </p>
      </div>
    </div>
  );
}
