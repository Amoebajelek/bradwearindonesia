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
    <div className="flex flex-col md:flex-row justify-center md:justify-between bg-black px-12 h-fit py-4 gap-4 md:gap-0 md:py-0 md:h-18 items-center">
      
      {/* Logo */}
      <Link href="/">
        <Image src={Logo} alt="Logo Bradwear" width={128} />
      </Link>
      {/* End Logo */}
      
      {/* Menus */}
      <div className="flex gap-8 uppercase font-medium text-xs text-white">
        {Menus.map((menu) => (
          <Link href={menu.link} key={menu.id}>
            {menu.title}
          </Link>
        ))}
      </div>
      {/* End Menus */}
      
    </div>
  );
}
