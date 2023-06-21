import { create } from 'zustand';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  count: number;
};

type State = {
  products: Product[];
  added:boolean
};

type Actions = {
  increment: (index: number, qty: number) => void;
  decrement: (index: number, qty: number) => void;
};

export const cartStore = create<State & Actions>((set) => ({
  added:false,
  products: [
    {
      id: 0,
      name: "sample1",
      price: 90,
      image: "/products/1.png",
      count: 0,
    },
    {
      id: 2,
      name: "sample2",
      price: 90,
      image: "/products/1.png",
      count: 0,
    },
    {
      id: 3,
      name: "sample3",
      price: 90,
      image: "/products/1.png",
      count: 0,
    },
    {
      id: 4,
      name: "sample4",
      price: 90,
      image: "/products/1.png",
      count: 0,
    },
    {
      id: 5,
      name: "sample5",
      price: 90,
      image: "/products/1.png",
      count: 0,
    },
  ],
  increment: (index: number, qty: number) => {
    set((state) => {
      console.log({state})
      const updatedProducts = [...state.products];
      updatedProducts[index].count += qty;
      const updatedState = { ...state, added: true };
    setTimeout(() => {
      set((prevState) => ({ ...prevState, added: false }));
    }, 3000);
    
      return { ...updatedState ,products: updatedProducts };
    });
  },
  decrement: (index: number, qty: number) => {
    set((state) => {
      const updatedProducts = [...state.products];
      updatedProducts[index].count -= qty;
      state.added = true
      return { products: updatedProducts };
    });
  },
}));
