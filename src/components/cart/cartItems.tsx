"use client";
import { useAppSelector } from "@/lib/hook";
import CartItem from "./cartItem";

export default function CartItems() {
  const cart = useAppSelector((state) => state.cart.cart);
  return (
    <div className="w-full flex flex-col gap-y-4 py-8">
      {cart.map((item, idx) => (
        <CartItem item={item} key={`${item.id}${item.color}`} />
      ))}
    </div>
  );
}
