import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";

import Db from "@/utils/db.json";
import Image from "next/image";
import Link from "next/link";

import Size from "@/public/size-chart-kemeja.jpeg";
import Model from "@/public/model-series-ventura.jpeg";
import Fabric from "@/public/spesifik-bahan-kain.jpeg"


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
      <div className="flex flex-col h-fit w-full px-6 py-12 lg:p-20 justify-start gap-5">
        {/* Link */}
        <div className="flex w-full justify-center">
          <Link href="/products" className="w-full md:w-8/12">
            <p className="uppercase text-xs lg:text-sm font-regular text-gray-500">
              / Products /{" "}
              <span className="font-semibold">{product?.name}</span>
            </p>
          </Link>
        </div>
        {/* End Link */}
        {/* Header */}
        <div className="flex justify-center">
          <div className="flex w-full md:w-6/12">
            {/* Title */}
            <div className="flex flex-col gap-0">
              <h2 className="uppercase text-2xl lg:text-4xl font-bold">
                {product?.name}
              </h2>
              <p className="text-xs lg:text-sm font-regular text-gray-500">
                {product?.sells} · (4.9) *****
              </p>
            </div>
            {/* End Title */}
          </div>
          {/* Order Button */}
          <div className="hidden md:flex w-2/12 items-center">
            <Link
              href="https://linktr.ee/bradwearIndonesia"
              target="_blank"
              className="flex w-full"
            >
              <button className="btn border-none bg-green-500 text-white w-full">
                Checkout
              </button>
            </Link>
          </div>
          {/* End Order Button */}
        </div>
        {/* End Header */}
        {/* Images */}
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8">
          <div className="flex flex-wrap gap-2">
            <Image
              alt={product!.name}
              src={product!.src}
              height={24}
              width={320}
              loading="lazy"
              className=""
            />
            <Image
              alt={product!.name}
              src={product!.src}
              height={24}
              width={320}
              loading="lazy"
              className=""
            />
            <Image
              alt={product!.name}
              src={product!.src}
              height={24}
              width={320}
              loading="lazy"
              className=""
            />
          </div>
          {/* Order Button */}
          <div className="flex md:hidden w-full items-center">
            <Link
              href="https://linktr.ee/bradwearIndonesia"
              target="_blank"
              className="flex w-full"
            >
              <button className="btn border-none bg-green-500 text-white w-full">
                Checkout
              </button>
            </Link>
          </div>
          {/* End Order Button */}
        </div>
        {/* End Images */}
        {/* Desc */}
        <div className="flex flex-col w-full h-fit items-center gap-4">
          <p className="text-xs lg:text-sm/6 font-regular w-full md:w-6/12">
            Stay ready for any mission with our Tactical Shirt — designed for
            durability, comfort, and performance. Made with high-quality
            breathable fabric, this shirt features multiple functional pockets,
            reinforced stitching, and a flexible fit that supports active
            movement. Perfect for outdoor activities, fieldwork, or professional
            use, it combines utility with a sharp, professional look.
          </p>
          <div className="flex flex-col w-full md:w-6/12">
            <p className="text-xs lg:text-sm/6 font-regular">Key Features</p>
            <ul className="list-decimal text-xs lg:text-sm/6 font-regular ps-6">
              <li>Durable and breathable material</li>
              <li>Multiple secure utility pockets</li>
              <li>Reinforced stitching for long-lasting wear</li>
              <li>Comfortable fit for all-day use</li>
              <li>Suitable for outdoor, tactical, and professional settings</li>
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
