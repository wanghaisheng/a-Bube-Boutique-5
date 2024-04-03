import { getProduct } from "@/queries/getProducts";
import ProductImages from "@/components/product/productImages";
import ProductInfo from "@/components/product/productInfo";

export default async function ProductDetailsPage({ slug }: { slug: string }) {
  const product = await getProduct(slug);
  const item = product[0];
  return (
    <div className="w-full flex gap-8 py-16">
      <ProductImages item={item} />
      <ProductInfo item={item} />
    </div>
  );
}
