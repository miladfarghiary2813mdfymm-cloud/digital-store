import ProductCard from "./ProductCard";

function FeaturedProducts() {
const products = [
  {
    id: 1,
    name: "گوشی موبایل iPhone 14 Pro",
    image: "6.png",
    price: "۵۲,۹۰۰,۰۰۰",
    oldPrice: "۵۷,۹۰۰,۰۰۰",
    discount: "۹٪",
    rating: "۴.۸",
    description: "دوربین حرفه‌ای، نمایشگر باکیفیت و عملکرد قدرتمند",
  },
  {
    id: 2,
    name: "ساعت هوشمند Apple Watch",
    image: "/8.png",
    price: "۱۲,۹۰۰,۰۰۰",
    oldPrice: "۱۴,۵۰۰,۰۰۰",
    discount: "۱۱٪",
    rating: "۴.۶",
    description: "پایش سلامتی، تماس و اعلان‌ها با طراحی سبک و جذاب",
  },
  {
    id: 3,
    name: "هدفون بی‌سیم AirPods Pro",
    image: "/10.png",
    price: "۷,۹۰۰,۰۰۰",
    oldPrice: "۹,۲۰۰,۰۰۰",
    discount: "۱۴٪",
    rating: "۴.۹",
    description: "صدای شفاف، حذف نویز و مناسب برای موسیقی و مکالمه",
  },
  {
    id: 4,
    name: "لپ‌تاپ MacBook Air",
    image: "/5.png",
    price: "۴۵,۹۰۰,۰۰۰",
    oldPrice: "۵۱,۰۰۰,۰۰۰",
    discount: "۱۰٪",
    rating: "۴.۷",
    description: "سبک، قدرتمند و مناسب برنامه‌نویسی و استفاده روزمره",
  },
];

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

        <button className="font-medium text-[#F59E0B]">
          مشاهده همه ←
        </button>
      </div>

    
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;