import Image from "next/image";
import Link from "next/link";

import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";

const clients = [
  {
    id: 1,
    name: "client 1",
    src: "/client-1.png",
  },
  {
    id: 2,
    name: "client 2",
    src: "/client-2.png",
  },
  {
    id: 3,
    name: "client 3",
    src: "/client-3.png",
  },
  {
    id: 4,
    name: "client 4",
    src: "/client-4.png",
  },
  {
    id: 5,
    name: "client 5",
    src: "/client-5.png",
  },
  {
    id: 6,
    name: "client 6",
    src: "/client-6.png",
  },
  {
    id: 7,
    name: "client 7",
    src: "/client-7.png",
  },
  {
    id: 8,
    name: "client 8",
    src: "/client-8.png",
  },
  {
    id: 9,
    name: "client 9",
    src: "/client-9.png",
  },
  {
    id: 10,
    name: "client 10",
    src: "/client-10.png",
  },
];

export default function page() {
  return (
    <div className="flex flex-col w-full min-h-lvh bg-slate-50">
      {/* Navbar */}
      <Navbar />
      {/* End Navbar */}

      {/* Contents */}
      <div className="flex flex-col h-full w-full px-6 py-12 lg:p-20 justify-start gap-12">
        {/* Content 1 */}
        <div className="flex flex-col md:flex-row w-full justify-center gap-4 md:gap-6">
          <h2 className="uppercase text-2xl lg:text-4xl font-bold w-full md:w-4/12 lg:w-3/12">
            Tentang kami
          </h2>
          <div className="flex flex-col gap-2 w-full md:w-8/12 lg:w-4/12">
            <p className="text-xs lg:text-sm/6 font-regular">
              CV. ASTHAJAYA BRADERINDO adalah konveksi resmi penyedia seragam
              dinas di Indonesia, beroperasi di bawah merek Bradwear yang
              terdaftar di DJKI KEMENKUMHAM. Perusahaan ini berkomitmen kuat
              dalam menyajikan produk berkualitas tinggi dan melayani berbagai
              kebutuhan seragam dinas untuk instansi pemerintah, perusahaan
              swasta, sekolah, dan organisasi lainnya.
            </p>
            {/* <p className="text-xs lg:text-sm/6 font-regular">
              We provide custom uniform solutions for government institutions,
              private companies, schools, and various organizations. With years
              of experience in the industry, we continue to grow and innovate to
              ensure the best service and satisfaction for our customers.
            </p> */}
          </div>
        </div>
        {/* End Content 1 */}
        {/* Content 2 */}
        <div className="flex flex-col md:flex-row w-full justify-center gap-4 md:gap-6">
          <h2 className="uppercase text-2xl lg:text-4xl font-bold w-full md:w-4/12 lg:w-3/12">
            Vision and Missions
          </h2>
          <div className="flex flex-col gap-2 w-full md:w-8/12 lg:w-4/12">
            <p className="text-xs lg:text-sm/6 font-regular">
              Menjadi perusahaan konveksi seragam dinas terdepan di Indonesia
              dengan prioritas pada kualitas, inovasi, ketepatan waktu, dan
              kepuasan pelanggan.
            </p>
            <ul className="list-decimal text-xs lg:text-sm/6 font-regular ps-4">
              <li>Menyediakan seragam dinas dengan standar kualitas tinggi.</li>
              <li>Menggunakan bahan nyaman dan tahan lama.</li>
              <li>Memberikan pelayanan profesional dan tepat waktu</li>
              <li>Terus berinovasi dalam desain dan teknologi produksi.</li>
              <li>
                Menjalin hubungan jangka panjang berdasarkan kepercayaan dan
                kepuasan-klien.
              </li>
            </ul>
          </div>
        </div>
        {/* End Content 2 */}
        {/* Content 3 */}
        <div className="flex flex-col md:flex-row w-full justify-center gap-4 md:gap-6">
          <h2 className="uppercase text-2xl lg:text-4xl font-bold w-full md:w-4/12 lg:w-3/12">
            Produk dan jasa
          </h2>
          <div className="flex flex-col gap-2 w-full md:w-8/12 lg:w-4/12">
            <ul className="list-decimal text-xs lg:text-sm/6 font-regular ps-4">
              <li>Seragam Pemerintah (PNS, TNI, POLRI, Satpol PP, etc.)</li>
              <li>
                Seragam Kerja untuk Perusahaan (BUMN, private companies,
                startups)
              </li>
              <li>Seragam Medis (doctors, nurses, pharmacists)</li>
              <li>Seragam Sekolah dan Institusi Pendidikan</li>
              <li>Seragam Organisasi dan komunitas</li>
              <li>Wearpacks (Seragam Kerja Industrir)</li>
              <li>
                Selain itu, mereka juga menawarkan layanan custom desain dengan
                bordir logo sesuai permintaan klien
              </li>
            </ul>
          </div>
        </div>
        {/* End Content 3 */}
        {/* Content 4 */}
        <div className="flex flex-col md:flex-row w-full justify-center gap-4 md:gap-6">
          <h2 className="uppercase text-2xl lg:text-4xl font-bold w-full md:w-4/12 lg:w-3/12">
           Keunggulan Kompetitif
          </h2>
          <div className="flex flex-col gap-2 w-full md:w-8/12 lg:w-4/12">
            <ul className="list-decimal text-xs lg:text-sm/6 font-regular ps-4">
              <li>Bahan berkualitas tinggi yang nyaman dan tahan lama</li>
              <li>Jahitan rapi dan presisi oleh tenaga ahli</li>
              <li>Harga kompetitif dengan kualitas maksimal</li>
              <li>Layanan kustomasi desain sesuai kebutuhan klien</li>
            </ul>
          </div>
        </div>
        {/* End Content 4 */}
        {/* Content 5 */}
        <div className="flex flex-col md:flex-row w-full justify-center gap-4 md:gap-6">
          <h2 className="uppercase text-2xl lg:text-4xl font-bold w-full md:w-4/12 lg:w-3/12">
           Klien dan Jangkauan
          </h2>
          <div className="flex flex-col gap-4 w-full md:w-8/12 lg:w-4/12">
            <ul className="list-decimal text-xs lg:text-sm/6 font-regular ps-4">
              <li>
                Telah dipercaya oleh berbagai sektor klien di seluruh indonesia, termasuk :
              </li>
              <li>Instansi Pemerintah Daerah</li>
              <li>Perusahaan Swasta Nasional</li>
              <li>Rumah Sakit dan Klinik</li>
              <li>Sekolah dan Universitas</li>
              <li>Organisasi Kemasyarakatan</li>
            </ul>
            <div className="flex flex-wrap w-full gap-4">
              {clients.map((e) => (
                <div className="flex w-20 h-20" key={e.id}>
                  <Image
                    src={e.src}
                    alt={e.name}
                    height={24}
                    width={80}
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Content 4 */}
        <Link
          href="https://ugc.production.linktr.ee/523dfb34-230c-4930-a976-75f404e3615f_COMPANY-PROFILE-CV.-ASTHAJAYA-BRADERINDO-.pdf"
          target="_blank"
        >
          <button className="btn border-none bg-green-500 text-white w-full">
            Unduh
          </button>
        </Link>
      </div>
      {/* End Content */}

      {/* Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
}
