import ProductDetailsPage from "@/pages/productDetailsPage";

export default async function ProductDetails({
  params,
}: {
  params: { slug: string[] };
}) {
  return <ProductDetailsPage type={params.slug[0]} slug={params.slug[1]} />;
}
