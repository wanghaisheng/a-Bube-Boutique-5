import Image from "next/image";
import { NewInItems } from "../../typings";

import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";

export const revalidate = 60;

export default function ProductCard({
  newInItems,
}: {
  newInItems: NewInItems;
}) {
  const { name, images, imageTest, slug, cardText, description } = newInItems;

  return (
    <div className="col-span-4 bg-gray-100">
      <div className="relative w-full h-[22rem]">
        <Image src={urlForImage(images[0])} alt={name} className="" fill />
      </div>
      <div className="text-center py-4 px-4 space-y-2">
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="text-sm text-[#737070]">{cardText}</p>
       
          <Link href="#" className="group w-full flex items-center gap-2 justify-center text-center">
            <p className="group-hover:underline">Buy Now</p>
            <FaArrowRightLong size={15} />
          </Link>
      </div>
    </div>
  );
}
