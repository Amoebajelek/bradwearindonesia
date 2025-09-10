import Footer from "./_components/Footer";
import HeroBanner from "./_components/HeroBanner";
import Navbar from "./_components/Navbar";
import Order from "./_components/Order";
import Products from "./_components/Products";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex flex-col h-fit w-full p-6 lg:p-20 justify-start gap-5">
        <Products />
        <div className="card-actions justify-center">
          <Link href="#">
            <button className="btn border-none bg-green-500 text-white">
              View more
            </button>
          </Link>
        </div>
      </div>
      <HeroBanner />
      <Order />
      <Footer />
    </div>
  );
}
