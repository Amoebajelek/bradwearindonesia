import Image from "next/image";
import Bradwear from "@/public/bradwear.jpeg";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-black">
      <div className="flex flex-col items-center">
        <Image src={Bradwear} alt="Logo Bradwear" width={360}/>
        <p>Under construction ...</p>
      </div>
    </div>
  );
}
