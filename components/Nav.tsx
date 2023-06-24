import Image from "next/image";
import React from "react";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import CartTotal from "./CartTotal";
import Link from "next/link";
export default function Nav() {
  return (
    <div
      className="flesx lg:flex justify-between  items-center shadow-sm z-10 w-full lg:px-12  text-sm 
    p-4 "
    >
      <Link href={'/'}>
      <Image src="/logo.png" alt="logo" width={300} height={200} />
      </Link>

     <CartTotal/>

    </div>  
  );
}
