import ProductDetailsPage from "@/pages/productDetailsPage";

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="">
      <ProductDetailsPage slug={params.slug} />
    </div>
  );
}
