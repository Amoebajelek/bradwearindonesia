import Image from "next/image";
import Carousel1 from "@/public/Carousel-1.jpg";

export default function Order() {
  return (
    <div className="flex w-full justify-center items-center p-6 lg:px-20 lg:py-10 gap-5">
      <Image
        src={Carousel1}
        alt="How to order"
        width={240}
        height={24}
        className="hidden lg:flex w-1/5"
        loading="lazy"
      />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-0">
          <p className="uppercase text-xs lg:text-sm font-regular text-gray-500">
            Let &apos;s see
          </p>
          <h2 className="uppercase text-2xl lg:text-4xl font-bold">
            How to order
          </h2>
        </div>
        <ol className="list-decimal ms-6">
          <li>Select the product you want to purchase</li>
          <li>Click the Order button</li>
          <li>Complete your order through our Admin via Whatsapp</li>
        </ol>
      </div>
    </div>
  );
}
