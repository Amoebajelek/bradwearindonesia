import Image from "next/image";
import Link from "next/link";
import Db from "@/utils/db.json";

export default function Products() {
  return (
    <div className="flex flex-col gap-5">
      {/* Title */}
      <div className="flex flex-col gap-0">
        <p className="uppercase text-xs lg:text-sm font-regular text-gray-500">
          best sellers
        </p>
        <h2 className="uppercase text-2xl lg:text-4xl font-bold">
          comfort every day
        </h2>
      </div>
      {/* End Title */}

      {/* Content */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {Db.slice(0, 5).map((e) => (
          <Link href={`/products/${e.id}`} key={e.id}>
            <div className="card bg-white shadow-sm" key={e.id}>
              <figure>
                <Image
                  src={e.src}
                  alt={e.name}
                  className="w-full"
                  width={360}
                  height={24}
                  loading="lazy"
                />
              </figure>
              <div className="card-body p-4 gap-0">
                <p className="card-title uppercase text-xl lg:text-2xl font-bold text-green-500">
                  {e.name}
                </p>
                <p className="text-slate-500 text-xs font-medium">{e.sells}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/*End Content */}
    </div>
  );
}
