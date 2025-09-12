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
            Get to know
          </h2>
          <div className="flex flex-col gap-2 w-full md:w-8/12 lg:w-4/12">
            <p className="text-xs lg:text-sm/6 font-regular">
              CV. ASTHAJAYA BRADERINDO is a licensed company specializing in the
              production of official uniforms, operating under the BRADWEAR
              brand, which is officially registered with DJKI KEMENKUMHAM. We
              are strongly committed to delivering only the highest quality
              products.
            </p>
            <p className="text-xs lg:text-sm/6 font-regular">
              We provide custom uniform solutions for government institutions,
              private companies, schools, and various organizations. With years
              of experience in the industry, we continue to grow and innovate to
              ensure the best service and satisfaction for our customers.
            </p>
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
              To become the leading uniform manufacturing company in Indonesia
              by prioritizing quality, innovation, timeliness, and customer
              satisfaction.
            </p>
            <ul className="list-decimal text-xs lg:text-sm/6 font-regular ps-4">
              <li>Providing uniforms with the highest quality standards.</li>
              <li>
                Using the best materials that are comfortable and durable.
              </li>
              <li>Delivering professional and timely services.</li>
              <li>
                Continuously innovating in design and production technology.
              </li>
              <li>
                Building long-term relationships with clients based on trust and
                satisfaction.s
              </li>
            </ul>
          </div>
        </div>
        {/* End Content 2 */}
        {/* Content 3 */}
        <div className="flex flex-col md:flex-row w-full justify-center gap-4 md:gap-6">
          <h2 className="uppercase text-2xl lg:text-4xl font-bold w-full md:w-4/12 lg:w-3/12">
            PRODUCT AND SERVICES
          </h2>
          <div className="flex flex-col gap-2 w-full md:w-8/12 lg:w-4/12">
            <ul className="list-decimal text-xs lg:text-sm/6 font-regular ps-4">
              <li>Government Uniforms (PNS, TNI, POLRI, Satpol PP, etc.)</li>
              <li>
                Work Uniforms for Companies (BUMN, private companies, startups)
              </li>
              <li>Medical Uniforms (doctors, nurses, pharmacists)</li>
              <li>School and Educational Institution Uniforms</li>
              <li>Organizational & Community Uniforms</li>
              <li>Wearpacks (industrial workwear)</li>
              <li>
                In addition, they also offer custom design services with logo
                embroidery according to client requests.
              </li>
            </ul>
          </div>
        </div>
        {/* End Content 3 */}
        {/* Content 4 */}
        <div className="flex flex-col md:flex-row w-full justify-center gap-4 md:gap-6">
          <h2 className="uppercase text-2xl lg:text-4xl font-bold w-full md:w-4/12 lg:w-3/12">
            COMPETITIVE ADVANTAGES
          </h2>
          <div className="flex flex-col gap-2 w-full md:w-8/12 lg:w-4/12">
            <ul className="list-decimal text-xs lg:text-sm/6 font-regular ps-4">
              <li> High-quality materials that are comfortable and durable</li>
              <li>Neat and precise stitching by professionals</li>
              <li>Competitive prices with maximum quality</li>
              <li>Customized design services according to client needs</li>
            </ul>
          </div>
        </div>
        {/* End Content 4 */}
        {/* Content 5 */}
        <div className="flex flex-col md:flex-row w-full justify-center gap-4 md:gap-6">
          <h2 className="uppercase text-2xl lg:text-4xl font-bold w-full md:w-4/12 lg:w-3/12">
            CLIENTS & REACH
          </h2>
          <div className="flex flex-col gap-2 w-full md:w-8/12 lg:w-4/12">
            <ul className="list-decimal text-xs lg:text-sm/6 font-regular ps-4">
              <li>
                Trusted by various client sectors throughout Indonesia,
                including:
              </li>
              <li>Local Government Agencies</li>
              <li>National Private Companies</li>
              <li>Hospitals & Clinics</li>
              <li>Schools and Universitiess</li>
              <li>Community Organizations</li>
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
            Download
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
