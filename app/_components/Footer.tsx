import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logo.jpg";
import IconInstagram from "@/public/icon-instagram.svg";
import IconWhatsapp from "@/public/icon-whatsapp.svg";
import IconTiktok from "@/public/icon-tiktok.svg";
import iconEmail from "@/public/icon-email.svg";

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
      <div className="flex flex-col md:flex-row justify-between gap-8 bg-black p-6 lg:p-12 h-fit">
        {/* Logo */}
        <div className="flex flex-col gap-2">
          <Link href="/">
            <Image src={Logo} alt="Logo Bradwear" width={240} />
          </Link>
          <p className="text-sm uppercase font-semibold text-white">
            Stay Bold. Stay Bradwear.
          </p>
          <div className="flex gap-1">
            <Link
              href="https://www.instagram.com/bradwear_indonesia"
              target="_blank"
            >
              <Image
                src={IconInstagram}
                alt="Icon Instagram"
                width={24}
                height={24}
                loading="lazy"
              />
            </Link>
            <Link
              href="https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2FbradwearIndonesia%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAadnU5Xv4LSJSNMMyYliwxQeBzllEwaB92aAyxESkS_6p-IFBhL32qyHuLfHrw_aem_55YGzowIY3lP7DNMml64ew&e=AT3AqCgf7EmKZb5_k4oNQRDb9OzmL-GkKaZzMzsbY0enZ8VeW6dKXgvEEfpo6UjBxkVibRjZEkMuY3ViRL2kMKRADDwjmnITgvIz14mxDQ"
              target="_blank"
            >
              <Image
                src={IconWhatsapp}
                alt="Icon Instagram"
                width={24}
                height={24}
                loading="lazy"
              />
            </Link>
            <Link
              href="https://l.instagram.com/?u=https%3A%2F%2Fwww.tiktok.com%2F%40bradwearindonesia%3F_t%3DZS-8xXp87In0z9%26_r%3D1%26fbclid%3DPAZXh0bgNhZW0CMTEAAafcuTMws96_dTZDNHydBbfddCy8f7rbZk8R9lQl0ucSNcOTT2gwnOHtpYYyKA_aem_amW39md3i80fQIehxJksWQ&e=AT1YLiO8ftoPZzhh1zf6HkqBZDl93EvdhOuWp5YQnKJx_sAQop-f2AFAV7HZTxG0vdF2EX-olmbEIHgBsiZQrQKlCbt1DVxqV5kgfIOIUw"
              target="_blank"
            >
              <Image
                src={IconTiktok}
                alt="Icon Instagram"
                width={24}
                height={24}
                loading="lazy"
              />
            </Link>
            <Link
              href="https://l.instagram.com/?u=https%3A%2F%2Fwww.youtube.com%2F%40gilang_setianugraha%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaeRlQBgjieFYtNP4mX1s2r4fBnV2tZ84B8GGtNtAJ9sVuaj73qECGYS3qgkbw_aem_1cGd11tOYw4X6EoDaS5wCQ&e=AT3KlqTC2CaxaxR6xGsBK0hv0A9AazFon-zBlNCnzGOGIPqbf1gAR-a9pg6Rp5sMCWqwVQCqqB8tYwGlY8fG28TfOr4JiO-FUIq69nm3Zw"
              target="_blank"
            >
              <Image
                src={iconEmail}
                alt="Icon Instagram"
                width={24}
                height={24}
                loading="lazy"
              />
            </Link>
          </div>
        </div>
        {/* End Logo */}

        {/* Menus */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-24">
          <div className="flex flex-col gap-2 text-white">
            <h4 className="uppercase font-semibold text-xs">Categories</h4>
            <div className="flex flex-col gap-2 uppercase font-light text-xs">
              {Categories.map((cat) => (
                <Link href={cat.link} key={cat.id}>
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 text-white">
            <h4 className="uppercase font-semibold text-xs">Products</h4>
            <div className="flex flex-col gap-2 uppercase font-light text-xs">
              {Products.map((prod) => (
                <Link href={prod.link} key={prod.id}>
                  {prod.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 text-white max-w-[480px]">
            <h4 className="uppercase font-semibold text-xs">Get In Touch</h4>
            <div className="flex flex-col gap-2 uppercase font-light text-xs">
              {Getintouch.map((getintouch) => (
                <p key={getintouch.id}>{getintouch.title}</p>
              ))}
            </div>
          </div>
        </div>
        {/* End Menus */}
      </div>

      {/* Footer */}
      <div className="flex justify-center bg-black py-6 border-t-1 border-gray-800">
        <p className="font-light text-xs text-white">
          © 2025 Bradwear Indonesia — Built for the Streets, Worn with Pride.
        </p>
      </div>
      {/* End Footer */}
    </div>
  );
}
