import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-col text-black px-20 py-12">
        <p>homepage</p>
      </div>
    </div>
  );
}
