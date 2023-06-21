'use client'
import useCartStore, { Product } from "@/lib/Store";
import Image from "next/image";

export default function Page() {
  const cartItems: Product[] = useCartStore((state) => state.cartItems);
  const deleteCart = useCartStore((state) => state.deleteCart);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 w-full">
      {cartItems.map((items, key) => {
        return (
          <div
            key={key}
            className="group relative flex flex-col mx-auto justify-center items-center w-[80%] md:w-2/3 lg:w-3/4 rounded shadow py-4 px-5"
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
              <button onClick={()=>deleteCart(items.id)}>Romve items</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}