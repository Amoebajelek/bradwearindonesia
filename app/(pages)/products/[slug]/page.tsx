import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";

import Db from "@/utils/db.json";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";

import Size from "@/public/size-chart-kemeja.jpeg";
import Model from "@/public/model-series-ventura.jpeg";
import Fabric from "@/public/spesifik-bahan-kain.jpeg";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = Number(slug);
  const product = Db.find((e) => e.id === id);

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      {/* Navbar */}
      <Navbar />
      {/* End Navbar */}

      {/* Contents */}
      <div className="flex flex-col h-fit w-full px-6 py-12 lg:p-20 justify-center items-center gap-5">
        {/* Link */}
        <div className="flex justify-center md:justify-start w-full md:w-10/12 lg:w-1/2">
          <Link
            href="/products"
            className="flex gap-2 text-xs lg:text-sm items-center"
          >
            <BsArrowLeft />
            <p className="uppercase font-regular text-gray-500">
              / Katalog /{" "}
              <span className="font-semibold">{product?.name}</span>
            </p>
          </Link>
        </div>
        {/* End Link */}
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between w-full md:w-10/12 lg:w-1/2 gap-4 md:gap-0">
          {/* Title */}
          <div className="flex flex-col gap-0 w-full items-center md:items-start">
            <h2 className="uppercase text-2xl lg:text-4xl font-bold">
              {product?.name}
            </h2>
            <div className="flex gap-1 items-center">
              <p className="text-xs lg:text-sm font-regular text-gray-500">
                {product?.sells} ·{" "}
              </p>
              <div className="flex gap-1 text-yellow-400 text-xs lg:text-sm">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
              </div>
            </div>
          </div>
          {/* End Title */}
          {/* Order Button */}
          <div className="flex items-center w-full md:w-1/3">
            <Link
              href="https://linktr.ee/bradwearIndonesia"
              target="_blank"
              className="flex w-full"
            >
              <button className="btn border-none bg-green-500 text-white w-full">
                Beli Sekarang
              </button>
            </Link>
          </div>
          {/* End Order Button */}
        </div>
        {/* End Top */}
        {/* Images */}
        <div className="flex flex-col lg:flex-row w-full md:w-10/12 lg:w-1/2 justify-center items-center lg:items-start gap-4">
          <div>
            <Image
              alt={product!.name}
              src={product!.src}
              height={24}
              width={360}
              loading="lazy"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-4 gap-2 h-fit">
            <Image
              alt={product!.name}
              src={product!.src}
              height={0}
              width={120}
              loading="lazy"
              className="object-cover"
            />
            <Image
              alt={product!.name}
              src={product!.src}
              height={0}
              width={120}
              loading="lazy"
              className="object-cover"
            />
            <Image
              alt={product!.name}
              src={product!.src}
              height={0}
              width={120}
              loading="lazy"
              className="object-cover"
            />
            <Image
              alt={product!.name}
              src={product!.src}
              height={0}
              width={120}
              loading="lazy"
              className="object-cover"
            />
            <Image
              alt={product!.name}
              src={product!.src}
              height={0}
              width={120}
              loading="lazy"
              className="object-cover"
            />
          </div>
        </div>
        {/* End Images */}
        {/* Desc */}
        <div className="flex flex-col items-center gap-4 w-full md:w-10/12 lg:w-1/2 h-fit">
          <p className="text-xs lg:text-sm/6 w-full">
            Siap menghadapi misi apa pun dengan Kemeja Taktis kami — dirancang
            untuk daya tahan, kenyamanan, dan performa. Terbuat dari kain
            berkualitas tinggi yang menyerap keringat, kemeja ini dilengkapi
            beberapa saku fungsional, jahitan yang diperkuat, dan potongan
            fleksibel yang mendukung gerakan aktif. Sempurna untuk aktivitas
            luar ruangan, kerja lapangan, atau penggunaan profesional, kemeja
            ini memadukan kegunaan dengan tampilan yang tajam dan profesional.
          </p>
          <div className="flex flex-col w-full">
            <p className="text-xs lg:text-sm/6 font-regular">Keunggulan :</p>
            <ul className="list-decimal text-xs lg:text-sm/6 font-regular ps-6">
              <li>Bahan tahan lama dan sirkulasi udara bagus</li>
              <li>Banyak kantong serbaguna yang aman</li>
              <li>Jahitan yang diperkuat untuk pemakaian yang tahan lama</li>
              <li>Nyaman dipakai sepanjang hari</li>
              <li>
                Cocok untuk kegiatan dalam dan luar ruangan, taktis dan
                professional
              </li>
            </ul>
          </div>
          <Image
            alt={product!.name}
            src={Model}
            height={320}
            width={500}
            loading="lazy"
            className=""
          />
          <Image
            alt={product!.name}
            src={Size}
            height={320}
            width={500}
            loading="lazy"
            className=""
          />
          <Image
            alt={product!.name}
            src={Fabric}
            height={320}
            width={500}
            loading="lazy"
            className=""
          />
        </div>
        {/* End Desc */}
      </div>
      {/* End Content */}

      {/* Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
}
