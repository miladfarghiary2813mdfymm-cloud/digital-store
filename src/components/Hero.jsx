import { ShieldCheck, Truck, Headphones, BadgeDollarSign } from "lucide-react";
function Hero() {
  return (
    <section className="mx-6 mt-8 rounded-3xl bg-[#FFF8EC] p-8">
      <div className="flex flex-col items-center gap-8 md:flex-row-reverse">
        <div className="flex flex-col items-center md:w-1/2">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            تکنولوژی مورد نیازت، یکجا وساده
          </h2>

          <p className="mt-4 text-center text-base leading-7 text-gray-600 md:text-lg">
            بهترین محصولات دیجیتال را با قیمت مناسب پیدا کن
          </p>
          <div className="mt-6 flex gap-3">
            <button className="rounded-xl bg-[#FFC107] px-6 py-3 font-medium transition hover:bg-[#F59E0B]">
              مشاهده محصولات
            </button>

            <button className="rounded-xl border border-[#FFC107] px-4 py-2 text-sm font-medium transition hover:bg-[#FDF2C2] md:px-6 md:py-3 md:text-base">
              دسته‌بندی‌ها
            </button>
          </div>
        </div>
        <div className="flex w-full justify-center md:w-1/2">
          <img
            src="/2.png"
            alt="محصولات دیجیتال"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#F3E3C8] pt-8 md:grid-cols-4">
        <div className="flex items-center justify-center gap-2">
          <ShieldCheck className="h-5 w-5 text-[#F59E0B] md:h-6 md:w-6" />
          <span className="text-sm font-medium md:text-base">ضمانت کالا</span>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Truck className="h-5 w-5 text-[#F59E0B]" />
          <span className="text-sm font-medium">ارسال سریع</span>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Headphones className=" h-5 w-5 text-[#F59E0B]" />
          <span className="text-sm font-medium">پشتیبانی</span>
        </div>

        <div className="flex items-center justify-center gap-2">
          <BadgeDollarSign className="h-5 w-5 text-[#F59E0B]" />
          <span className="text-sm font-medium">بهترین قیمت</span>
        </div>
      </div>
    </section>
  );
}
export default Hero;
