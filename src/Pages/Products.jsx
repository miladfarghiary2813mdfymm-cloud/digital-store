import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <main dir="rtl" className="mx-6 mt-10">
        <div className="mb-8 flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`rounded-xl px-4 py-2 transition ${
              selectedCategory === "all"
                ? "bg-[#FFC107] font-bold"
                : "border border-[#F3E3C8] hover:bg-[#FDF2C2]"
            }`}
          >
            همه
          </button>

          <button
            onClick={() => setSelectedCategory("mobile")}
            className={`rounded-xl px-4 py-2 transition ${
              selectedCategory === "mobile"
                ? "bg-[#FFC107] font-bold"
                : "border border-[#F3E3C8] hover:bg-[#FDF2C2]"
            }`}
          >
            موبایل
          </button>

          <button
            onClick={() => setSelectedCategory("laptop")}
            className={`rounded-xl px-4 py-2 transition ${
              selectedCategory === "laptop"
                ? "bg-[#FFC107] font-bold"
                : "border border-[#F3E3C8] hover:bg-[#FDF2C2]"
            }`}
          >
            لپ‌تاپ
          </button>

          <button
            onClick={() => setSelectedCategory("headphone")}
            className={`rounded-xl px-4 py-2 transition ${
              selectedCategory === "headphone"
                ? "bg-[#FFC107] font-bold"
                : "border border-[#F3E3C8] hover:bg-[#FDF2C2]"
            }`}
          >
            هدفون
          </button>

          <button
            onClick={() => setSelectedCategory("smartwatch")}
            className={`rounded-xl px-4 py-2 transition ${
              selectedCategory === "smartwatch"
                ? "bg-[#FFC107] font-bold"
                : "border border-[#F3E3C8] hover:bg-[#FDF2C2]"
            }`}
          >
            ساعت هوشمند
          </button>

          <button
            onClick={() => setSelectedCategory("accessory")}
            className={`rounded-xl px-4 py-2 transition ${
              selectedCategory === "accessory"
                ? "bg-[#FFC107] font-bold"
                : "border border-[#F3E3C8] hover:bg-[#FDF2C2]"
            }`}
          >
            لوازم جانبی
          </button>
        </div>
        <h1 className="text-3xl font-bold text-[#1F1F1F]">
          {searchQuery ? `نتایج جستجو برای «${searchQuery}»` : "همه محصولات"}
        </h1>

        <p className="mt-2 text-gray-500">
          {searchQuery
            ? `${filteredProducts.length} محصول پیدا شد`
            : "محصولات دیجیتال فروشگاه"}
        </p>

        {filteredProducts.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-500">
              محصولی با این عبارت پیدا نشد.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default Products;
