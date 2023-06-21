"use client";
import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface Product {
  name: string;
  price: number;
  image: string;
}

export default function Products() {
  const { products, increment } = cartStore();
  // console.log(count)
  //   const products = [

  //   ];

  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto  flex flex-col items-center justify-center">
        <h2 className="self-start text-2xl font-bold ml-7 mb-5">Products</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 w-full">
          {products.map((items, key) => {
            return (
              <div
                key={key}
                className="group relative  flex flex-col mx-auto justify-center items-center  w-[80%] md:w-2/3 lg:w-3/4   rounded shadow py-4 px-5"
              >
                {items?.count}
                {/* product image */}
                <Image
                  src={items.image}
                  alt={items.name}
                  height={200}
                  width={200}
                  className="hover:scale-105 transition-all duration-150"
                />
                <div className="self-start">
                  <strong>Mens Gym Workout Short</strong>
                  <p className="text-rose-800">
                    Price: <span className="font-bold">{items.price}</span>{" "}
                  </p>
                  {/* starts */}
                  <div className="flex space-x-1">
                    <StarIcon className="w-5 h-5" />
                    <StarIcon className="w-5 h-5" />
                    <StarIcon className="w-5 h-5" />
                    <StarIcon className="w-5 h-5" />
                    <StarIcon className="w-5 h-5" />
                  </div>
                </div>
                <ToolTip index={key} increment={increment} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import {
  ShoppingCartIcon,
  HeartIcon,
  ShoppingBagIcon
} from "@heroicons/react/24/solid";
import { useStore } from "zustand";
import { cartStore } from "@/lib/Store";

const ToolTip = ({ increment, index }: any) => {
  return (
    <div className="flex flex-col opacity-0 duration-100 translate-x-[100px] group-hover:opacity-100 group-hover:-translate-x-0 group-hover:flex space-y-2 absolute right-0 transition-all ease-linear ">
      <button
        onClick={() => increment(index, 1)}
        className="hover:scale-[1.05]  rounded-full  w-12 h-12 shadow bg-white group-hover:-translate-x-4 duration-150 p-2 text-center align-middle transition-all ease-linear"
      >
        <ShoppingCartIcon className="w-[29px] h-[29px] text-[#e4cfae]" />
      </button>
      <button className="hover:scale-[1.05] rounded-full w-12 h-12 bg-[#e4cfae] group-hover:-translate-x-4  duration-150 p-2 text-center align-middle transition-all ease-linear">
        <HeartIcon className="w-[29px] h-[29px] text-white" />
      </button>
      <button className="hover:scale-[1.05] rounded-full w-12 h-12 bg-[#e4cfae] group-hover:-translate-x-4  duration-150 p-2 text-center align-middle transition-all ease-linear">
        <ShoppingBagIcon className="w-[29px] h-[29px] text-white" />
      </button>
    </div>
  );
};
