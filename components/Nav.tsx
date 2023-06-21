import Image from "next/image";
import React from "react";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
export default function Nav() {
  return (
    <div
      className="flex lg:flex justify-between  items-center shadow-sm z-10 w-full lg:px-12  font-mono text-sm 
    p-4 "
    >
      <Image src="/logo.png" alt="logo" width={300} height={200} />

      <div className="flex space-x-6 p-2">
        <div className="relative">
            <div className="absolute  -top-[14px] left-4 w-4 h-4 bg-[#e4cfae] rounded-full text-center leading-4 text-white font-bold align-middle">0</div>
          <ShoppingCartIcon className="h-6 w-6 text-[#e4cfae]" />
        </div>
        <UserIcon className="h-6 w-6 text-[#e4cfae]" />
      </div>
    </div>
  );
}
