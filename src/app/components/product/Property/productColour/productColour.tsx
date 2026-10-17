import { ProductColourData } from "@/app/data/ProductColour";

const ProductColour = () => {
  return (
    <div>
      {ProductColourData.map((item) => (
        <button
          key={item.id}
          type="button"
          title={item.colourText}
          aria-label={item.colourText}
          className="h-8 w-8 shrink-0 rounded-full border border-gray-300"
          style={{ backgroundColor: item.hex }}
        />
      ))}
    </div>
  );
};

export default ProductColour;

