import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";

import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col w-full min-h-lvh bg-slate-50">
      {/* Navbar */}
      <Navbar />
      {/* End Navbar */}
      {/* Contents */}
      <div className="flex flex-col h-full w-full px-6 py-12 lg:p-20 items-center gap-12">
        {/* Title */}
        <div className="flex w-full md:w-10/12 lg:w-8/12">
          <div className="flex flex-col gap-0">
            <p className="uppercase text-xs lg:text-sm font-regular text-gray-500">
              Pelanggan
            </p>
            <h2 className="uppercase text-2xl lg:text-4xl font-bold">
              Apa kata mereka tentang kami?
            </h2>
          </div>
        </div>
        {/* End Title */}
        {/* Client 1 */}
        <div className="flex flex-col lg:flex-row w-full md:w-10/12 lg:w-8/12 justify-center gap-4">
          {/* Title */}
          <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-4/12">
            <div className="flex w-20 h-20">
              <Image
                src="/client-1.png"
                alt="Kejaksaan Agung"
                height={24}
                width={80}
                loading="lazy"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-0 justify-center">
              <h2 className="uppercase text-xl lg:text-2xl font-bold">
                Kejaksaan Agung
              </h2>
              <p className="uppercase text-xs lg:text-sm font-regular text-gray-500">
                2025
              </p>
            </div>
          </div>
          {/* End Title */}
          <div className="grid grid-cols-3 gap-2 w-full lg:w-8/12">
            <Image
              src="/client-kejagung-1.webp"
              alt="Kejaksaan Agung"
              height={24}
              width={320}
              loading="lazy"
              className="object-contain"
            />
            <Image
              src="/client-kejagung-2.webp"
              alt="Kejaksaan Agung"
              height={24}
              width={320}
              loading="lazy"
              className="object-contain"
            />
            <Image
              src="/client-kejagung-3.webp"
              alt="Kejaksaan Agung"
              height={24}
              width={320}
              loading="lazy"
              className="object-contain"
            />
          </div>
        </div>
        {/* End Client 1 */}
        {/* Client 2 */}
        <div className="flex flex-col lg:flex-row w-full md:w-10/12 lg:w-8/12 justify-center gap-4">
          {/* Title */}
          <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-4/12">
            <div className="flex w-20 h-20">
              <Image
                src="/dummy-2.webp"
                alt="Pemerintah Kabupaten Hulu Sungai Selatan"
                height={24}
                width={80}
                loading="lazy"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-0 justify-center">
              <h2 className="uppercase text-xl lg:text-2xl font-bold">
                Pemerintah Kabupaten Hulu Sungai Selatan
              </h2>
              <p className="uppercase text-xs lg:text-sm font-regular text-gray-500">
                2025
              </p>
            </div>
          </div>
          {/* End Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full lg:w-8/12">
            <Image
              src="/client-pemkab-hss-1.webp"
              alt="Pemerintah Kabupaten Hulu Sungai Selatan"
              height={24}
              width={500}
              loading="lazy"
              className="object-contain"
            />
            <Image
              src="/client-pemkab-hss-2.webp"
              alt="Pemerintah Kabupaten Hulu Sungai Selatan"
              height={24}
              width={500}
              loading="lazy"
              className="object-contain"
            />
            <Image
              src="/client-pemkab-hss-3.webp"
              alt="Pemerintah Kabupaten Hulu Sungai Selatan"
              height={24}
              width={500}
              loading="lazy"
              className="object-contain"
            />
          </div>
        </div>
        {/* End Client 2 */}
        {/* Client 3 */}
        <div className="flex flex-col lg:flex-row w-full md:w-10/12 lg:w-8/12 justify-center gap-4">
          {/* Title */}
          <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-4/12">
            <div className="flex w-20 h-20">
              <Image
                src="/dummy-2.webp"
                alt="Tim Medis"
                height={24}
                width={80}
                loading="lazy"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-0 justify-center">
              <h2 className="uppercase text-xl lg:text-2xl font-bold">
                Tim Medis
              </h2>
              <p className="uppercase text-xs lg:text-sm font-regular text-gray-500">
                2025
              </p>
            </div>
          </div>
          {/* End Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full lg:w-8/12">
            <Image
              src="/client-medis-1.webp"
              alt="Tim Medis"
              height={24}
              width={500}
              loading="lazy"
              className="object-contain"
            />
            <Image
              src="/client-medis-2.webp"
              alt="Tim Medis"
              height={24}
              width={500}
              loading="lazy"
              className="object-contain"
            />
            <Image
              src="/client-medis-3.webp"
              alt="Tim Medis"
              height={24}
              width={500}
              loading="lazy"
              className="object-contain"
            />
          </div>
        </div>
        {/* End Client 3 */}
        {/* Client 4 */}
        <div className="flex flex-col lg:flex-row w-full md:w-10/12 lg:w-8/12 justify-center gap-4">
          {/* Title */}
          <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-4/12">
            <div className="flex w-20 h-20">
              <Image
                src="/dummy-2.webp"
                alt="Dinas Sosial Kabupaten Muara Enim"
                height={24}
                width={80}
                loading="lazy"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-0 justify-center">
              <h2 className="uppercase text-xl lg:text-2xl font-bold">
                Dinas Sosial Kabupaten Muara Enim
              </h2>
              <p className="uppercase text-xs lg:text-sm font-regular text-gray-500">
                2025
              </p>
            </div>
          </div>
          {/* End Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full lg:w-8/12">
            <Image
              src="/client-dinsos-1.webp"
              alt="Dinas Sosial Kabupaten Muara Enim"
              height={24}
              width={500}
              loading="lazy"
              className="object-contain"
            />
            <Image
              src="/client-dinsos-2.webp"
              alt="Dinas Sosial Kabupaten Muara Enim"
              height={24}
              width={500}
              loading="lazy"
              className="object-contain"
            />
            <Image
              src="/client-dinsos-3.webp"
              alt="Dinas Sosial Kabupaten Muara Enim"
              height={24}
              width={500}
              loading="lazy"
              className="object-contain"
            />
          </div>
        </div>
        {/* End Client 4 */}
      </div>
      {/* Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
}
