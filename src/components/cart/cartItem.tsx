"use client";
import Image from "next/image";
import { CartType } from "../../../typings";
import { urlForImage } from "../../../sanity/lib/image";
import Quantity from "../product/quantity";
import { useState } from "react";
import { setItemQuantity } from "@/lib/features/cartSlice";
import { useAppDispatch } from "@/lib/hook";

export default function CartItem({ item }: { item: CartType }) {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(item.quantity);

  const changeValue = (action: string) => {
    if (action === "increase") {
      dispatch(
        setItemQuantity({ id: item.id, color: item.color, quantity: value + 1 })
      );
      setValue(value + 1);
    } else {
      if (value === 1) {
        return;
      } else {
        dispatch(
          setItemQuantity({
            id: item.id,
            color: item.color,
            quantity: value - 1,
          })
        );
        setValue(value - 1);
      }
    }
  };

  return (
    <div className="grid grid-cols-12 border-b-[1px] border-gray-200">
      <div className="relative w-full h-[6rem] row-span-2 col-span-1">
        <Image src={urlForImage(item.image)} alt={item.name} fill />
      </div>
      <div className="col-span-9 grid grid-cols-12">
        <div className="col-span-8 p-4">
          <p>BUBE {item.name}</p>
          <p>&#8358; {item.price.toLocaleString()}</p>
          <p>Color: {item.color}</p>
        </div>
        <div className="col-span-4 p-4">
          <Quantity value={value} changeValue={changeValue} />
        </div>
      </div>
      <div className="col-span-2 p-4">
        &#8358; {item.total.toLocaleString()}
      </div>
    </div>
  );
}
