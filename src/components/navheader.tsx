"use client";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function NavHeader() {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full hidden lg:flex">
      <ul className="w-[50%] mx-auto flex justify-between items-end">
        <li>
          <div className="relative">
            <div
              className="flex items-center gap-1 cursor-pointer hover:underline"
              onClick={() => setOpen(!open)}
            >
              <span>Products</span> <IoIosArrowDown size={15} className={`transition-all duration-300 ${open ? "rotate-180": ""}`} />
            </div>
            <ul
              className={`w-48 absolute top-8 py-4 gap-y-3 border-[1px] border-[#c8c6c6] ${
                open ? "flex flex-col" : "hidden"
              }`}
            >
              <li className="px-8 text-sm">Stargirl</li>
              <li className="px-8 text-sm">Eternal</li>
              <li className="px-8 text-sm">Wellness</li>
              <li className="px-8 text-sm">Jewelry</li>
              <li className="px-8 text-sm">Clothing</li>
              <li className="px-8 text-sm">Accessories</li>
              <li className="px-8 text-sm">Cover</li>
              <li className="px-8 text-sm">Costumi</li>
              <li className="px-8 text-sm">#hotmoresummer</li>
            </ul>
          </div>
        </li>
        <li>Last Call</li>
        <li>Social Responsibility</li>
        <li>Concept</li>
        <li>FAQ</li>
        <li>How to find your ring size</li>
      </ul>
    </div>
  );
}
