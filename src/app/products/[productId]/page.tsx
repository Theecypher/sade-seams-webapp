import { BrandData } from "@/app/sections/brand/brand";
import formatAmount from "@/app/utils/formatAmoount";

type ProductPageProps = {
  params: Promise<{
    productId: string;
  }>;
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const { productId } = await params;

  console.log(productId);

  const product = BrandData.find((item) => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  if (!product.otherImages) {
    return;
  }

  const images = product.otherImages

  console.log(images);

  return (
    <div className="flex flex-col w-full">

      <div className="flex w-full">
      {images.map((item) => (
        <div key={item.id} className=" w-full">
          <img className="w-fulll  h-[300px]" src={item.img} alt="" />
        </div>
      ))}
      </div>

      <img src={product.img} alt={product.name} />

      <h1>{product.name}</h1>

      <p>{formatAmount(Number(product.price))}</p>

      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;
