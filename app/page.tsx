import Carousel from "@/components/Carousel";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Carousel />
      <Products />


      <div className="relative flex justify-center items-center border min-h-[300px] max-h-[300px] bg-[#fcaf3c] my-12">
      {/* <Image src="/banner.svg" alt="banner" layout="responsive" width={1080} height={1080} className="max-h-[500px] h-[500px] w-full" /> */}
        <h1 className="absolute top-1/2 bottom-0 my-auto left-[100px] text-white font-bold text-5xl">Your One-Stop Shopping Destination</h1>
      </div>


    </main>
  );
}
