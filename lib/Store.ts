import CartTotal from '@/components/CartTotal';
import { create } from 'zustand';
import { devtools, persist ,createJSONStorage } from 'zustand/middleware';

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  count: number;
};

export type State = {
  products: Product[];
  added: boolean
  cartItems: Product[]
};

export type Actions = {
  increment: (index: number, qty: number) => void;
  decrement: (index: number, qty: number) => void;
  setCart: (items: Product) => void;
  deleteCart: (id: number) => void
};

const cartStore = (set: any) => ({
  cartItems: [],
  added: false,
  count: 0,
  products: [
    {
      id: 0,
      name: "Mens Gym workout short",
      price: 290,
      image: "/products/1.png",
      count: 0,
    },
    {
      id: 1,
      name: "Gym bag",
      price: 2000,
      image: "/products/2.png",
      count: 0,
    },
    {
      id: 2,
      name: "Women's Gym",
      price: 290,
      image: "/products/p5.png",
      count: 0,
    },
    {
      id: 3,
      name: "Women's Gym",
      price: 290,
      image: "/products/p3.png",
      count: 0,
    },
    {
      id: 4,
      name: "Nike | Unisex Fury Headband 3.0",
      price: 190,
      image: "/products/p4.png",
      count: 0,
    },
    {
      id: 5,
      name: "Salomon | Unisex Bonatti Aero Wind Jacket - White",
      price: 390,
      image: "/products/p6.png",
      count: 0,
    },
    {
      id: 6,
      name: "Mens Gym workout short",
      price: 190,
      image: "/products/1.png",
      count: 0,
    },
  {
    id: 7,
    name: "On | Men's Cloudultra Running Shoes",
    price: 600,
    image: "/products/1.png",
    count: 0,
  },
  {
    id: 8,
    name:"Hoka | Men's Speedgoat 5 Running Shoes -Deep Lakes",
    price: 600,
    image: "/products/1.png",
    count: 0,
  },
  {
    id: 9,
    name:"Adjustable Weights Dumbbells Set, Non-Rolling Adjustable Dumbbell Set, Free Weights Dumbbells Set Hexagon, Weights Set for Home Gym, 20 Lbs",
    price: 1000,
    image: "/products/p9.jpg",
    count: 0,
  },
  {
    id: 10,
    name:"OZELS Jump Rope, Adjustable Length Tangle-Free Segmented Soft Beaded Skipping Rope, Fitness Jump Rope for Kids, Man, and Women Weight Loss (Color : A)",
    price: 200,
    image: "/products/p10.jpg",
    count: 0,
  },
  {
    id: 11,
    name:"HolaHatha Neoprene Dumbbell Free Hand Weight Set with Storage Rack, Ideal for Home Gym Exercises to Gain Tone and Definition",
    price: 1000,
    image: "/products/p11.jpg",
    count: 0,
  },
  {
    id: 11,
    name:"LALAHIGH Push Up Board, Upgraded 15 in 1 Push Up Bar, Premium ABS Pushup Stands w/ Drawstring Bag, Professional Pushup System for Chest, Tricep, Back, & Abs Workout, Portable Home Strength Training Eq",
    price: 600,
    image: "/products/p11.jpg",
    count: 0,
  },

  ],

  increment: (index: number, qty: number) => {
    set((state: State) => {
      console.log({ state })
      const updatedProducts = [...state.products];
      updatedProducts[index].count += qty;
      const updatedState = { ...state, added: true };
      setTimeout(() => {
        set((prevState: any) => ({ ...prevState, added: false }));
      }, 3000);

      return { ...updatedState, products: updatedProducts };
    });
  },
  decrement: (index: number, qty: number) => {
    set((state: State) => {
      const updatedProducts = [...state.products];
      updatedProducts[index].count -= qty;
      state.added = true
      return { products: updatedProducts };
    });
  },

  // let cart:string|null=JSON.parse(localStorage.getItem("cart"))
  getCart: () => {

  },



  setCart: (item: Product) => {
    set((state: State) => ({
      cartItems: [item, ...state.cartItems]//Append the new item to the existing
    }))
  },

  deleteCart: (id: number) => {

    console.log('delete ', id)
    set((state: State) => ({
      cartItems: state.cartItems.filter((item, key) => key !== id)


    }));
  }


});


const useCartStore = create(
  devtools(
    persist(cartStore, {
      name: "cart",
      storage:createJSONStorage(()=>sessionStorage)
    })
  )
)

export default useCartStore