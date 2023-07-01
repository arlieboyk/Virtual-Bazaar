"use client";
import useCartStore, { Product } from "@/lib/Store";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
export default function Page() {
  const cartItems: Product[] = useCartStore((state) => state.cartItems);
  const deleteCart = useCartStore((state) => state.deleteCart);
  console.log("items on cart ", cartItems);
  return (
    <div
      className={`${
        cartItems.length > 0 ? "grid " : "flex"
      }  relative py-6  grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 w-full`}
    >
      {cartItems.length > 0 ? (
        cartItems?.map((items, key) => {
          return (
            <div
              key={key}
              className="group relative flex flex-col mx-auto justify-center items-center w-[80%] md:w-2/3 lg:w-3/4 rounded shadow py-4 px-5"
            >
              <button
                onClick={() => deleteCart(key)}
                className="absolute right-4 top-4 z-[99] bg-blue-500 px-2 py-1 rounded-full h-8 w-8 text-white font-bold"
              >
                <AiOutlineClose />
              </button>

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
                <div className="flex space-x-4">
                  <button
                    onClick={() => {}}
                    className="bg-blue-500 px-2 py-1 rounded text-white font-bold"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="relative flex items-center w-full h-[50vh]">
          <div className="absolute flex flex-col items-center justify-center  mx-auto font-bold text-center w-full ">
            No cart available.
          <Image alt="cart" src={'/shopping-cart.gif'} height={200} width={200}/>
          </div>

        </div>
      )}
    </div>
  );
}
