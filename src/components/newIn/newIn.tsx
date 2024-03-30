import ProductCard from "../productCard";
import { getNewInProducts } from "@/queries/getProducts";

// export const revalidate = 60;

export default async function NewIn() {
  const newInItems = await getNewInProducts();
  // console.log(newInItems)
  return (
    <section className="py-12">
      <div className="w-[70%] mx-auto space-y-8">
        <h1 className="text-4xl">BUBE NEW IN & MUST HAVE!</h1>
        <div className="grid grid-cols-12 gap-4">
          {newInItems.map((item, index) => {
            return <ProductCard newInItems={item} key={item._id} />;
          })}
        </div>
      </div>
    </section>
  );
}
