"use client";
import { NewInItems } from "../../../typings";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { useState } from "react";

export default function ProductImages({ item }: { item: NewInItems }) {
  const [current, setCurrent] = useState(0);
  return (
    <div className="flex gap-x-4">
      <div className="space-y-4">
        {item.images?.map((image, index) => {
          return (
            <div
              className="relative w-[8rem] h-[8rem] border-[0.5px] border-gray-200 cursor-pointer"
              key={index}
              onClick={() => setCurrent(index)}
            >
              <Image
                src={urlForImage(image)}
                alt={item.name}
                className=""
                loading="lazy"
                fill
              />
            </div>
          );
        })}
      </div>
      <div className="relative w-[30rem] h-[35rem] border-[0.5px] border-gray-200">
        <Image
          src={urlForImage(item.images[current])}
          alt={item.name}
          className=""
          loading="lazy"
          fill
        />
      </div>
    </div>
  );
}
