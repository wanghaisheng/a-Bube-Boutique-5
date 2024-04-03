import ProductDetailsPage from "@/pages/productDetailsPage";

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="w-[70%] mx-auto">
      <ProductDetailsPage slug={params.slug} />
    </div>
  );
}
