import Navbar from "@/app/_components/Navbar";

export default function page() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-col text-black px-20 py-12">
        <p>products page</p>
      </div>
    </div>
  );
}
