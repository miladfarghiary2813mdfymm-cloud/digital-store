import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { products } from "../data/products";

function FeaturedProducts() {
  const featuredIds = [1, 21, 17, 9];

  const featuredProducts = products.filter((product) =>
    featuredIds.includes(product.id)
  );

  return (
    <section dir="rtl" className="mx-6 mt-10">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#1F1F1F] md:text-3xl">
            محصولات ویژه
          </h2>

          <p className="mt-2 text-sm text-gray-500 md:text-base">
            محبوب‌ترین محصولات با بهترین قیمت‌ها
          </p>
        </div>

        <Link
          to="/products"
          className="whitespace-nowrap rounded-xl border border-[#FFC107] px-2 py-2 text-sm font-medium text-[#1F1F1F] transition hover:bg-[#FDF2C2] md:px-5 md:py-2.5 md:text-base"
        >
          مشاهده همه ←
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;