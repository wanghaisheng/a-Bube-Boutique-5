"use client";
import { useAppSelector } from "@/lib/hook";
import CartItem from "./cartItem";

export default function CartItems() {
  const { cart, total } = useAppSelector((state) => state.cart);
  return (
    <>
      <div className="w-full flex flex-col gap-y-4 py-6 sm:py-8">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className="w-full flex flex-col items-end gap-y-4">
        <div>
          <p className="text-lg font-semibold">
            <span className="mr-4 text-base font-normal">Estimated total</span>{" "}
            <span className="font-normal">&#8358;</span>{" "}
            {total.toLocaleString()}
          </p>
        </div>
        <button className="w-72 py-2 bg-black text-white hover:scale-[1.02] transition-all duration-300">
          Checkout
        </button>
      </div>
    </>
  );
}
