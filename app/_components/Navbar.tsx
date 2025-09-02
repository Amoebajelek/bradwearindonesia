import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logo.jpg";

const Menus = [
  {
    id: 1,
    title: "Products",
    link: "/products",
  },
  {
    id: 2,
    title: "Clients",
    link: "/clients",
  },
  {
    id: 3,
    title: "About Us",
    link: "/about-us",
  },
];

export default function Navbar() {
  return (
    <div className="flex justify-between bg-black px-12 h-18 items-center">
      <Link href="/">
        <Image src={Logo} alt="Logo Bradwear" width={128} />
      </Link>
      <div className="flex gap-8 uppercase font-medium text-xs">
        {Menus.map((menu) => (
          <Link href={menu.link} key={menu.id}>
            {menu.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
