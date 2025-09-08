import Navbar from "./_components/Navbar";
import Products from "./_components/Products";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex flex-col w-full px-20 justify-center">
        <div className="flex flex-col">
          <p className="uppercase text-base font-regular text-gray-500">
            best sellers
          </p>
          <h2 className="uppercase text-4xl font-bold">comfort every day</h2>
        </div>
        <Products />
      </div>
    </div>
  );
}
