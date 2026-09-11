import { Link } from "react-router-dom";
function DiscountBanner() {
  return (
    <section dir="rtl" className="mx-6 mt-10">
      <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-[#FDF2C2] p-8 md:flex-row">
        
        <div>
          <span className="text-sm font-medium text-[#B77900]">
            🔥 پیشنهاد ویژه
          </span>

          <h2 className="mt-2 text-2xl font-bold text-[#1F1F1F] md:text-3xl">
            تا ۳۰٪ تخفیف روی محصولات منتخب
          </h2>

          <p className="mt-3 text-sm text-gray-600 md:text-base">
            فرصت محدودی برای خرید با قیمت ویژه
          </p>
        </div>
<Link
  to="/products"
  className="shrink-0 rounded-xl bg-[#FFC107] px-7 py-3 font-medium text-[#1F1F1F] transition hover:bg-[#F59E0B]"
>
  مشاهده تخفیف‌ها
</Link>

      </div>
    </section>
  );
}

export default DiscountBanner;