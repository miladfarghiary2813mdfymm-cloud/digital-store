import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  Headset,
  Search,
  CreditCard,
  PackageCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#FFF8EC] px-6 py-16 text-[#1F1F1F]"
    >
      <div className="mx-auto max-w-6xl">

        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <div className="flex flex-col items-center gap-8 md:flex-row">

            <div className="flex-1">
              <p className="mb-3 font-bold text-[#F59E0B]">
                درباره دیجیتال شاپ
              </p>

              <h1 className="text-3xl font-black leading-relaxed md:text-5xl">
                خرید محصولات دیجیتال،
                <br />
                سریع، مطمئن و راحت
              </h1>

              <p className="mt-5 leading-8 text-[#6F665B]">
                دیجیتال شاپ یک فروشگاه اینترنتی برای خرید محصولات دیجیتال
                است که تلاش می‌کند تجربه‌ای ساده و مطمئن از خرید آنلاین
                را برای شما فراهم کند.
                <br />
                از انتخاب محصول تا دریافت سفارش، کنار شما هستیم.
              </p>
            </div>


         <div className="hidden h-52 w-52 items-center justify-center rounded-full bg-[#FFC107] md:flex">
  <ShoppingBag size={90} />
</div>

          </div>
        </section>



  
        <section className="mt-10 grid gap-5 md:grid-cols-4">

          <Feature
            icon={<Truck />}
            title="ارسال سریع"
            text="سفارش شما در کوتاه‌ترین زمان ارسال می‌شود"
          />

          <Feature
            icon={<ShieldCheck />}
            title="خرید امن"
            text="پرداخت مطمئن و تجربه خرید بدون نگرانی"
          />

          <Feature
            icon={<Headset />}
            title="پشتیبانی"
            text="همیشه برای پاسخگویی کنار شما هستیم"
          />

          <Feature
            icon={<PackageCheck />}
            title="محصولات با کیفیت"
            text="ارائه محصولات دیجیتال منتخب"
          />

        </section>



        <section className="mt-14 rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="text-center text-2xl font-black">
            خرید از دیجیتال شاپ چطور انجام می‌شود؟
          </h2>


          <div className="mt-10 grid gap-6 md:grid-cols-4">


            <Step
              number="1"
              icon={<Search />}
              title="انتخاب محصول"
              text="محصول موردنظر خود را جستجو و بررسی کنید"
            />


            <Step
              number="2"
              icon={<ShoppingBag />}
              title="افزودن به سبد"
              text="محصول را به سبد خرید خود اضافه کنید"
            />


            <Step
              number="3"
              icon={<CreditCard />}
              title="پرداخت امن"
              text="سفارش خود را با خیال راحت ثبت کنید"
            />


            <Step
              number="4"
              icon={<Truck />}
              title="دریافت سفارش"
              text="محصول در سریع‌ترین زمان به شما می‌رسد"
            />


          </div>

        </section>



       
        <section className="mt-10 rounded-3xl bg-[#FFC107] p-10 text-center">

          <h2 className="text-3xl font-black">
            آماده خرید هستید؟
          </h2>

          <p className="mt-3">
            جدیدترین محصولات دیجیتال را با خیال راحت انتخاب کنید.
          </p>


  <Link
  to="/products"
  className="mt-6 inline-flex items-center justify-center rounded-2xl bg-[#1F1F1F] px-8 py-4 font-bold text-white transition duration-200 hover:-translate-y-1 hover:bg-[#333333]"
>
  مشاهده محصولات
</Link>


        </section>


      </div>
    </main>
  );
}



function Feature({icon,title,text}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1">

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FDF2C2]">
        {icon}
      </div>

      <h3 className="font-black">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#7A7166]">
        {text}
      </p>

    </div>
  )
}



function Step({number,icon,title,text}) {
  return (
    <div className="relative rounded-2xl border border-[#F3E3C8] p-5">

      <span className="absolute -top-3 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFC107] text-sm font-black">
        {number}
      </span>


      <div className="mt-3 mb-4 text-[#F59E0B]">
        {icon}
      </div>


      <h3 className="font-black">
        {title}
      </h3>


      <p className="mt-2 text-sm leading-6 text-[#7A7166]">
        {text}
      </p>

    </div>
  )
}