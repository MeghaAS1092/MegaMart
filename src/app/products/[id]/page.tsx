interface ProductPageProps {
  params: Promise<{
    id: string;
    title: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const productParams = await params;
  console.log(productParams);
  return <h1>Product Details for ID: {productParams.id}, {productParams.title}</h1>;
}
