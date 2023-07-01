import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center">
      <div className="flex w-[80%] justify-between items-center">
        <h1 className="text-4xl font-bold text-black/70">
          {" "}
          <span className="text-gray-600">Welcome to our </span>Cashback Rewards
          Program!
        </h1>
        <p className="  w-[50%]">
          Earn cashback on every purchase! Shop and get rewarded at our
          e-commerce store. 
        </p>
      </div>
      <div className="relative h-[400px] w-full">
        <Image src={"/sapiens.svg"} alt="" className="z-0 opacity-30" fill />
      </div>
    </div>
  );
}
