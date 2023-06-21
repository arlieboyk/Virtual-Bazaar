import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface Product {
  name: string;
  price: number;
  image: string;
}

export default function Products() {
  const products = [
    {
      name: "sample1",
      price: 90,
      image: "/products/1.png"
    },
    {
      name: "sample1",
      price: 90,
      image: "/products/1.png"
    },
    {
      name: "sample1",
      price: 90,
      image: "/products/1.png"
    }
  ];

  return (
    <div className="w-screen">
      <h2>Products</h2>
      <div className="grid grid-cols-3"></div>

      {products.map((items, key) => {
        return (
          <div key={key}>
            {/* product image */}
            <Image src={items.image} alt={items.name} height={100} width={100} />
            <div>
              <strong>Mens Gym Workout Short</strong>
              <p>Price: <span className="font-bold">{items.price}</span> </p>
              {/* starts */}
              <div className="flex space-x-1">
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}

const ProductsMap = () => {
  const products = [
    {
      name: "sample1",
      price: 90,
      image: "/products/1.png"
    },
    {
      name: "sample1",
      price: 90,
      image: "/products/1.png"
    },
    {
      name: "sample1",
      price: 90,
      image: "/products/1.png"
    }
  ];
};
