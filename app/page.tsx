import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import Products from "./_components/Products";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">

      {/* Navbar */}
      <Navbar />
      {/* End Navbar */}

      {/* Contents */}
      <div className="flex flex-col h-fit w-full px-6 py-12 lg:p-20 justify-start gap-5">
        <Products />
        <div className="card-actions justify-center">
          <Link href="/products">
            <button className="btn border-none bg-green-500 text-white">
              Lihat semua
            </button>
          </Link>
        </div>
      </div>
      {/* End Content */}
      
      {/* Footer */}
      <Footer />
      {/* End Footer */}

    </div>
  );
}
