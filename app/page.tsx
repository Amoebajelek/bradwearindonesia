import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import Products from "./_components/Products";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex flex-col min-h-lvh w-full p-6 lg:p-20 justify-start gap-5">
        <div className="flex flex-col gap-0">
          <p className="uppercase text-xs lg:text-sm font-regular text-gray-500">
            best sellers
          </p>
          <h2 className="uppercase text-2xl lg:text-4xl font-bold">comfort every day</h2>
        </div>
        <Products />
        <div className="card-actions justify-center">
          <Link href="#">
            <button className="btn border-none bg-green-500 text-white">
              View more
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
