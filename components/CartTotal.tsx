"use client";
import { cartStore } from "@/lib/Store";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";

function CartTotal() {
  const { products, cartItems, increment } = cartStore();
  console.log({ products });

  let total: number = 0;
  products.forEach((element) => {
    console.log(element.count);
    total += element.count;
  });

  console.log({ total });
  console.log({ cartItems });
  // useEffect(()=>{
  // })

  return (
    <div className="flex items-center space-x-6 p-2">
      <button className="flex items-center space-x-2">
        <p className="font-semibold text-[#e4cfae]"> cart</p>
        <div className="relative">
          <div className="absolute  -top-[14px] left-4 w-4 h-4 bg-[#e4cfae] rounded-full text-center leading-4 text-white font-bold align-middle">
          <small>  {total}</small>
          </div>

          <ShoppingCartIcon className="h-6 w-6 text-[#e4cfae]" />
        </div>
      </button>

      <button className="flex items-center space-x-2">
        <p className="font-semibold text-[#e4cfae]">Account</p>

        <UserIcon className="h-6 w-6 text-[#e4cfae]" />
      </button>
    </div>
  );
}

export default CartTotal;
