import Image from "next/image";

type CollectionsType = {
  text: string;
  image: string;
};

const collections: CollectionsType[] = [
  {
    text: "BUBE Wellness",
    image: "/collections/post-1.jpg",
  },
  {
    text: "Accessories",
    image: "/collections/post-2.jpg",
  },
  {
    text: "Clothing",
    image: "/collections/post-3.jpg",
  },
  {
    text: "Jewelry",
    image: "/collections/post-4.jpg",
  },
  {
    text: "Swimsuit",
    image: "/collections/post-5.jpg",
  },
  {
    text: "BUBE Enternal",
    image: "/collections/post-6.jpg",
  },
];

export default function Collections() {
  return (
    <section className="py-8 sm:py-12 bg-[#F3F3F3]">
      <div className="w-[95%] sm:w-[90%] lg:w-[70%] mx-auto space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl uppercase">Collections</h1>

        <div className="grid grid-cols-12 gap-y-8 gap-x-4">
          {collections.map((collection, idx) => {
            const { text, image } = collection;
            return (
              <div
                key={idx}
                className="group col-span-12 lg:col-span-4 cursor-pointer space-y-4"
              >
                <div className="relative w-full h-[75vh] lg:h-96 overflow-hidden">
                  <Image
                    src={image}
                    alt={text}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in"
                  />
                </div>
                <p className="text-xl lg:text-lg">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
