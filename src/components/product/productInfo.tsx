"use client";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { NewInItems } from "../../../typings";

export default function ProductInfo({ item }: { item: NewInItems }) {
  const [value, setValue] = useState(1);
  const [showDesc, setShowDesc] = useState(false);
  return (
    <div className="basis-[50%]">
      <div className="space-y-2">
        <p className="text-red-600 font-semibold">SALE</p>
        <h4 className="text-5xl font-medium">BUBE {item.name}</h4>
        <p className="text-xl">&#8358; {item.price.toLocaleString()}</p>
        <p className="text-sm">
          Tax included. <span className="underline">Shipping</span> calculated
          at checkout.
        </p>
      </div>
      <div className="space-y-2 mt-4">
        <p>Material</p>
        <div className="flex gap-x-2">
          {item.colors.map((color, index) => (
            <div
              key={index}
              className="border-2 text-black w-20 h-10 flex items-center justify-center rounded-full cursor-pointer"
            >
              <p className="">{color}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2 mt-4">
        <p className="">Quantity</p>
        <div className="w-40 h-12 flex border-[1px] border-black">
          <button
            className={`basis-[50%] w-full h-full flex justify-center items-center ${
              value === 1 ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => {
              if (value === 1) return;
              setValue(value - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              className="w-4"
              fill="none"
              viewBox="0 0 10 2"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <div className="basis-[50%] flex justify-center items-center">
            <span className="text-lg">{value}</span>
          </div>
          <button
            className="text-3xl basis-[50%] w-full h-full"
            onClick={() => setValue(value + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="w-full mt-8">
        <button className="border-[1px] border-black hover:ring-black hover:ring-[1px] w-full py-2 duration-200 transition-all ease-linear">
          Add To Cart
        </button>
      </div>
      <div className="mt-8 w-full border-b-[1px] border-stone-500 pb-2 space-y-2">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setShowDesc(!showDesc)}
        >
          <p className="text-lg font-medium">Description</p>
          <FaAngleDown
            size={15}
            className={`transition-all duration-150 ease-linear ${showDesc ? "rotate-180" : "rotate-0"}`}
          />
        </div>
        <p className={`text-sm px-2 pb-2 ${showDesc ? "block" : "hidden"}`}>
          {item.description}
        </p>
      </div>
    </div>
  );
}
