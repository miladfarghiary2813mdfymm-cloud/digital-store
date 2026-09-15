import {
  User,
  Mail,
  LogOut,
  ArrowRight,
  ShoppingBag,
  Package,
  Heart,
  ChevronLeft,
  ShieldCheck,
} from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";
import { Link } from "react-router-dom";
export default function Profile() {
  const { user, logout } = useAuth();
  if (!user) {
    return (
      <div className="min-h-screen bg-[#FFF8EC] px-4 flex items-center justify-center">
        <div className="w-full max-w-md rounded-[2rem] border border-[#F3E3C8] bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#FDF2C2]">
            <User size={38} className="text-[#F59E0B]" />
          </div>

          <h1 className="text-2xl font-black text-[#1F1F1F]">
            وارد حساب خود شوید
          </h1>

          <p className="mt-3 leading-7 text-gray-500">
            برای مشاهده پروفایل و مدیریت سفارش‌ها ابتدا وارد حساب کاربری شوید.
          </p>

          <Link
            to="/login"
            className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-[#1F1F1F] px-7 py-3.5 font-bold text-white transition hover:bg-[#333333]"
          >
            ورود به حساب
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  function handleLogout() {
    logout();
  }

  return (
    <div className="min-h-screen bg-[#FFF8EC] px-4 py-10 md:py-14">
      <div className="mx-auto max-w-5xl">

        <div className="mb-8">
          <Link
            to="/"
            className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-[#8A8074] transition hover:text-[#1F1F1F]"
          >
            <ArrowRight size={17} />
            بازگشت به فروشگاه
          </Link>

          <h1 className="text-3xl font-black text-[#1F1F1F] md:text-4xl">
            حساب کاربری
          </h1>

          <p className="mt-2 text-[#7A7166]">
            خوش اومدی {user.name} 👋
          </p>
        </div>

        
        <div className="relative mb-6 overflow-hidden rounded-[2rem] border border-[#F3E3C8] bg-white shadow-sm">
          <div className="absolute -left-16 -top-20 h-48 w-48 rounded-full bg-[#FDF2C2]" />
          <div className="absolute -bottom-24 right-20 h-44 w-44 rounded-full bg-[#FFF8EC]" />

          <div className="relative flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.7rem] bg-[#FFC107] text-[#1F1F1F] shadow-[0_10px_25px_rgba(255,193,7,0.25)]">
                <User size={38} strokeWidth={2.2} />
              </div>

              <div>
                <div className="mb-1 flex items-center gap-2">
                  <h2 className="text-xl font-black md:text-2xl">
                    {user.name}
                  </h2>

                  <ShieldCheck
                    size={18}
                    className="text-[#F59E0B]"
                  />
                </div>

                <p className="text-sm text-[#7A7166]">
                  عضو دیجیتال شاپ
                </p>

                <p className="mt-1 text-xs text-[#A09689]">
                  حساب کاربری فعال
                </p>
              </div>
            </div>

          
          </div>
        </div>

       
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-[#F3E3C8] bg-white p-5 shadow-sm transition hover:-translate-y-1">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FDF2C2]">
              <Package size={22} className="text-[#F59E0B]" />
            </div>

            <p className="text-sm text-[#8A8074]">
              سفارش‌های من
            </p>

            <p className="mt-1 text-2xl font-black text-[#1F1F1F]">
              ۰
            </p>
          </div>

          <Link to="/cart"
           className="rounded-3xl border border-[#F3E3C8] bg-white p-5 shadow-sm transition hover:-translate-y-1">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FDF2C2]">
              <ShoppingBag size={22} className="text-[#F59E0B]" />
            </div>

            <p className="text-sm text-[#8A8074]">
              سبد خرید
            </p>

            <p className="mt-1 text-2xl font-black text-[#1F1F1F]">
              مشاهده
            </p>
          </Link>

<Link
  to="/favorites"
  className="rounded-3xl border border-[#F3E3C8] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#FFC107]"
>
  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FDF2C2]">
    <Heart size={22} className="text-[#F59E0B]" />
  </div>

  <p className="text-sm text-[#8A8074]">علاقه‌مندی‌ها</p>

  <p className="mt-1 text-2xl font-black text-[#1F1F1F]">
    مشاهده
  </p>
</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

        
          <div className="rounded-[2rem] border border-[#F3E3C8] bg-white p-6 shadow-sm md:p-7">
            <div className="mb-6">
              <h2 className="text-xl font-black text-[#1F1F1F]">
                اطلاعات حساب
              </h2>

              <p className="mt-1 text-sm text-[#8A8074]">
                اطلاعات ثبت‌شده حساب کاربری
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4 rounded-2xl bg-[#FFF8EC] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
                  <User size={19} className="text-[#F59E0B]" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-[#8A8074]">
                    نام و نام خانوادگی
                  </p>

                  <p className="mt-1 break-words font-bold text-[#1F1F1F]">
                    {user.name}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-[#FFF8EC] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
                  <Mail size={19} className="text-[#F59E0B]" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-[#8A8074]">
                    ایمیل
                  </p>

                  <p className="mt-1 break-all font-bold text-[#1F1F1F]">
                    {user.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

        
          <div className="rounded-[2rem] border border-[#F3E3C8] bg-white p-6 shadow-sm md:p-7">
            <div className="mb-6">
              <h2 className="text-xl font-black text-[#1F1F1F]">
                دسترسی سریع
              </h2>

              <p className="mt-1 text-sm text-[#8A8074]">
                مدیریت بخش‌های حساب کاربری
              </p>
            </div>

            <div className="space-y-3">
              <Link
                to="/products"
                className="flex items-center justify-between rounded-2xl border border-[#F3E3C8] p-4 transition hover:border-[#FFC107] hover:bg-[#FFFDF8]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDF2C2]">
                    <ShoppingBag size={19} />
                  </div>

                  <div>
                    <p className="font-bold text-[#1F1F1F]">
                      مشاهده محصولات
                    </p>

                    <p className="mt-0.5 text-xs text-[#8A8074]">
                      ادامه خرید از فروشگاه
                    </p>
                  </div>
                </div>

                <ChevronLeft
                  size={19}
                  className="text-[#A09689]"
                />
              </Link>
            </div>

            <button
              onClick={handleLogout}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-[#F3E3C8] bg-[#FFF8EC] px-6 py-3.5 text-sm font-bold text-[#1F1F1F] transition hover:border-[#1F1F1F] hover:bg-white"
            >
              <LogOut size={18} />
              خروج از حساب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}