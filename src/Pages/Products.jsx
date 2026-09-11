import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import {
  mobileProducts,
  laptopProducts,
  headphoneProducts,
  smartwatchProducts,
  accessoryProducts,
} from "../data/products";
function Products() {
  
  return (
    <>
      <Navbar />

      <main dir="rtl" className="mx-6 mt-10">
        <h1 className="text-3xl font-bold text-[#1F1F1F]">همه محصولات</h1>

        <p className="mt-2 text-gray-500">محصولات دیجیتال فروشگاه</p>

        <section className="mt-10">
          <h2 className="mb-6 text-2xl font-bold text-[#1F1F1F]">موبایل</h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {mobileProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-[#1F1F1F]">لپ‌تاپ</h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {laptopProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-[#1F1F1F]">هدفون</h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {headphoneProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-[#1F1F1F]">
            ساعت هوشمند
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {smartwatchProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-[#1F1F1F]">
            لوازم جانبی
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {accessoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Products;
