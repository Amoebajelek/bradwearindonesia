import Image from "next/image";
import Link from "next/link";

import Db from "@/utils/db.json"

export default function AllProducts() {
  return (
    <div className="flex flex-col gap-5">
      {/* Title */}
      <div className="flex flex-col gap-0">
        <p className="uppercase text-xs lg:text-sm font-regular text-gray-500">
          Comfortable and stylish uniforms for daily performance.
        </p>
        <h2 className="uppercase text-2xl lg:text-4xl font-bold">
          Elevate Workplace Standards
        </h2>
      </div>
      {/* End Title */}

      {/* Categories */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap w-full gap-2">
          <div className="flex w-fit px-6 py-3 bg-white border border-solid border-gray-100">
            <p className="uppercase text-xs lg:text-sm font-regular text-black">
              ALL
            </p>
          </div>
          <div className="flex w-fit px-6 py-3 bg-black">
            <p className="uppercase text-xs lg:text-sm font-medium text-white">
              WORKSHIRT
            </p>
          </div>
          <div className="flex w-fit px-6 py-3 bg-white border border-solid border-gray-100">
            <p className="uppercase text-xs lg:text-sm font-regular text-black">
              JACKET
            </p>
          </div>
          <div className="flex w-fit px-6 py-3 bg-white border border-solid border-gray-100">
            <p className="uppercase text-xs lg:text-sm font-regular text-black">
              VEST
            </p>
          </div>
          <div className="flex w-fit px-6 py-3 bg-white border border-solid border-gray-100">
            <p className="uppercase text-xs lg:text-sm font-regular text-black">
              PANTS
            </p>
          </div>
          <div className="flex w-fit px-6 py-3 bg-white border border-solid border-gray-100">
            <p className="uppercase text-xs lg:text-sm font-regular text-black">
              POLO
            </p>
          </div>
        </div>
        <p className="text-xs lg:text-sm font-regular text-gray-500">
          11 Products listed
        </p>
      </div>
      {/* End Categories */}

      {/* Content */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {Db.map((e) => (
          <Link href={`/products/${e.id}`} key={e.id}>
            <div className="card bg-white shadow-sm">
              <figure>
                <Image
                  src={e.image}
                  alt="Product 1"
                  className="w-full"
                  width={360}
                  height={24}
                  loading="lazy"
                />
              </figure>
              <div className="card-body p-4 pt-0 gap-0">
                <p className="card-title uppercase text-xl lg:text-2xl font-bold text-green-500">
                  {e.name}
                </p>
                <p className="text-slate-500 text-xs font-medium">
                  {e.sells}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/*End Content */}
    </div>
  );
}
