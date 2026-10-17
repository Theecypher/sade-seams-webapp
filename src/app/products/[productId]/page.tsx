import SizeRuler from "@/app/components/product/Property/sizeChart";
import { BrandData } from "@/app/sections/brand/brand";
import formatAmount from "@/app/utils/formatAmoount";
import Image from "next/image";

type ProductPageProps = {
  params: Promise<{
    productId: string;
  }>;
};

type ProductProp = {
  img: string;
  id: string;
  description: string;
  name: string;
  price: string;
  deal?: string | null;
  discount?: string | null;
  otherImages?: otherImageProps[];
};

type otherImageProps = {
  img: string;
  id: string;
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const { productId } = await params;

  // console.log(productId);

  const product = BrandData.find((item) => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  if (!product.otherImages) {
    return;
  }

  const images = product.otherImages;

  const formattedAmount = Number(product.price);

  const discountedPrice =
    formattedAmount - formattedAmount * (Number(product.discount) / 100);

  console.log(discountedPrice);

  return (
    <div className="flex flex-col">
      <div>
        <div className="flex gap-1 scrollbar-none animation duration-1000 ease-out motion-reduce:transition-none w-full overflow-x-auto shrink-0 ">
          {images.map((item) => (
            // <img className="w-[450px] h-[450px] " src={item.img} alt="" />
            <Image
              src={item.img}
              key={item.id}
              width={300}
              height={400}
              alt=""
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col px-3 py-0.5">
        {/* Product Name */}
        <div className="">
          <p className="text-[12px] font-semibold">{product.name}</p>
        </div>

        {/* PRODUCT PRICE  */}
        <div>
          <div className="flex items-center gap-1">
            <p className="text-red-700 font-semibold text-base">
              {formatAmount(discountedPrice)}
            </p>
            <p className="text-black line-through text-sm">
              {formatAmount(Number(product.price))}
            </p>
          </div>
        </div>

        {/* PRODUCT DEAL */}
        <div>
          <p className="text-[12px] text-red-700 font-semibold">
            {product.deal}
          </p>
        </div>

        <SizeRuler />
      </div>
    </div>

    // <div className="flex flex-col w-full overflow-hidden">
    //   <div className="flex gap-1 w-full overflow-x-auto shrink-0 ">
    //     {images.map((item) => (
    //       <img className="w-[450px] h-[450px] " src={item.img} alt="" />
    //     ))}
    //   </div>

    //   <h1>{product.name}</h1>

    //   <p>{formatAmount(Number(product.price))}</p>

    //   <p>{product.description}</p>
    // </div>
  );
};

export default ProductPage;
