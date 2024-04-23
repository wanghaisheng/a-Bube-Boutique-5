import ProductDetailsPage from "@/pages/productDetailsPage";

export default async function ProductDetail({
  params,
}: {
  params: { slug: string[] };
}) {
  return (
    <div className="">
      <ProductDetailsPage  type={params.slug[0]} slug={params.slug[1]} />
    </div>
  );
}
