import { getProduct } from "@/queries/getProducts";
import ProductImages from "@/components/product/productImages";
import ProductInfo from "@/components/product/productInfo";

export default async function ProductDetailsPage({
  type,
  slug,
}: {
  type: string;
  slug: string;
}) {
  const product = await getProduct(type, slug);
  const item = product[0];
  return (
    <div className=" w-[90%] sm:w-[80%] mx-auto py-10 sm:py-16">
      <div className="flex flex-col lg:flex-row gap-8">
        <ProductImages item={item} />
        <ProductInfo item={item} />
      </div>
    </div>
  );
}
