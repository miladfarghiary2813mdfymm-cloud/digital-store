import {
  Mail,
  LockKeyhole,
  UserRound,
  Eye,
  EyeOff,
  ArrowLeft,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();
  function handleRegister(event) {
    event.preventDefault();

    if (!acceptedTerms) {
      alert("لطفاً قوانین و شرایط را قبول کنید");
      return;
    }
    const formData = new FormData(event.currentTarget);

    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (!name || !email || !password || !confirmPassword) {
      alert("لطفاً همه فیلدها را پر کنید.");
      return;
    }

    if (password !== confirmPassword) {
      alert("رمز عبور و تکرار آن یکسان نیست.");
      return;
    }

    if (password.length < 8) {
      alert("رمز عبور باید حداقل ۸ کاراکتر باشد.");
      return;
    }

    const success = register({
      name,
      email,
      password,
    });

    if (!success) {
      alert("این ایمیل قبلاً ثبت‌نام کرده است.");
      return;
    }

    navigate("/");
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#FFF8EC] px-4 py-6 text-[#1F1F1F] sm:px-6 sm:py-10"
    >
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-[#F3E3C8] bg-white shadow-[0_25px_80px_rgba(31,31,31,0.09)] lg:grid-cols-[0.9fr_1.1fr]">
          <section className="order-1 p-6 sm:p-10 lg:order-2 lg:p-12">
            <div className="mx-auto max-w-md">
              <div className="mb-8">
                <h1 className="mb-3 text-3xl font-black tracking-tight sm:text-4xl">
                  ساخت حساب کاربری
                </h1>

                <p className="text-sm leading-7 text-[#1F1F1F]/55">
                  چند قدم کوچیک مونده تا وارد دنیای دیجیتال شاپ بشی.
                </p>
              </div>

              <form onSubmit={handleRegister} noValidate className="space-y-4">
                <div className="mb-5 rounded-2xl border border-yellow-200 bg-yellow-50 p-4 text-sm leading-6 text-yellow-800">
                  ⚠️ این نسخه آزمایشی است. لطفاً از ایمیل و رمز عبور واقعی خود
                  استفاده نکنید. اطلاعات کاربران فقط برای نمایش عملکرد سایت در
                  مرورگر ذخیره می‌شود.
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold"
                  >
                    نام و نام خانوادگی
                  </label>

                  <div className="group relative">
                    <UserRound className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1F1F1F]/35 transition group-focus-within:text-[#F59E0B]" />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="مثلاً علی رضایی"
                      className="w-full rounded-2xl border border-[#EAD8BA] bg-[#FFFDF8] py-3.5 pr-12 pl-4 text-sm outline-none transition placeholder:text-[#1F1F1F]/30 focus:border-[#FFC107] focus:bg-white focus:ring-4 focus:ring-[#FFC107]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold"
                  >
                    ایمیل
                  </label>

                  <div className="group relative">
                    <Mail className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1F1F1F]/35 transition group-focus-within:text-[#F59E0B]" />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@email.com"
                      className="w-full rounded-2xl border border-[#EAD8BA] bg-[#FFFDF8] py-3.5 pr-12 pl-4 text-left text-sm outline-none transition placeholder:text-right placeholder:text-[#1F1F1F]/30 focus:border-[#FFC107] focus:bg-white focus:ring-4 focus:ring-[#FFC107]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-bold"
                  >
                    رمز عبور
                  </label>

                  <div className="group relative">
                    <LockKeyhole className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1F1F1F]/35 transition group-focus-within:text-[#F59E0B]" />

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="حداقل ۸ کاراکتر"
                      className="w-full rounded-2xl border border-[#EAD8BA] bg-[#FFFDF8] py-3.5 pr-12 pl-12 text-right text-sm outline-none transition placeholder:text-[#1F1F1F]/30 focus:border-[#FFC107] focus:bg-white focus:ring-4 focus:ring-[#FFC107]/10"
                    />

                    <button
                      type="button"
                      aria-label={showPassword ? "مخفی کردن رمز" : "نمایش رمز"}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#1F1F1F]/40 transition hover:text-[#F59E0B]"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-bold"
                  >
                    تکرار رمز عبور
                  </label>

                  <div className="group relative">
                    <LockKeyhole className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1F1F1F]/35 transition group-focus-within:text-[#F59E0B]" />

                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="رمز عبور را دوباره وارد کنید"
                      className="w-full rounded-2xl border border-[#EAD8BA] bg-[#FFFDF8] py-3.5 pr-12 pl-12 text-right text-sm outline-none transition placeholder:text-[#1F1F1F]/30 focus:border-[#FFC107] focus:bg-white focus:ring-4 focus:ring-[#FFC107]/10"
                    />

                    <button
                      type="button"
                      aria-label={
                        showConfirmPassword ? "مخفی کردن رمز" : "نمایش رمز"
                      }
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#1F1F1F]/40 transition hover:text-[#F59E0B]"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <label className="flex cursor-pointer items-start gap-2 pt-1 text-xs leading-6 text-[#1F1F1F]/55">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="h-4 w-4 accent-[#FFC107]"
                  />

                  <span>
                    با ساخت حساب، با{" "}
                    <span className="font-bold text-[#F59E0B]">
                      قوانین و شرایط
                    </span>{" "}
                    دیجیتال شاپ موافقم.
                  </span>
                </label>

                <button
                  type="submit"
                  className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#FFC107] py-4 font-black shadow-[0_10px_25px_rgba(255,193,7,0.22)] transition hover:-translate-y-0.5 hover:bg-[#F59E0B] hover:shadow-[0_14px_30px_rgba(245,158,11,0.25)]"
                >
                  ساخت حساب
                  <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                </button>
              </form>

              <p className="mt-7 text-center text-sm text-[#1F1F1F]/55">
                قبلاً حساب ساختی؟{" "}
                <Link
                  to="/login"
                  className="font-black text-[#F59E0B] transition hover:text-[#1F1F1F]"
                >
                  وارد شو
                </Link>
              </p>
            </div>
          </section>

          <section className="relative order-2 hidden overflow-hidden bg-[#FFC107] lg:order-1 lg:flex">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/20" />
            <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-white/15" />

            <div className="relative flex w-full flex-col items-center justify-center p-12">
              <div className="mb-8 flex h-24 w-24 rotate-[-4deg] items-center justify-center rounded-[2rem] bg-[#1F1F1F] shadow-[0_18px_35px_rgba(31,31,31,0.2)]">
                <ShoppingBag className="h-12 w-12 text-[#FFC107]" />
              </div>

              <div className="text-center">
                <div className="mb-3 flex items-center justify-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-sm font-bold">خوش اومدی به</span>
                </div>

                <h2 className="text-4xl font-black tracking-tight">
                  دیجیتال شاپ
                </h2>

                <p className="mx-auto mt-5 max-w-sm text-base leading-8 text-[#1F1F1F]/70">
                  جایی برای پیدا کردن محصولاتی که
                  <br />
                  دنیای دیجیتال رو برات ساده‌تر می‌کنن.
                </p>
              </div>

              <div className="mt-10 w-full max-w-sm space-y-3">
                <div className="flex items-center gap-3 rounded-2xl bg-white/45 p-4 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-black">خرید راحت و مطمئن</p>
                    <p className="mt-1 text-xs text-[#1F1F1F]/60">
                      تجربه‌ای ساده و بدون دردسر
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white/45 p-4 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
                    <ShoppingBag className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-black">دسترسی به محصولات</p>
                    <p className="mt-1 text-xs text-[#1F1F1F]/60">
                      همه‌چیز در یک جای ساده
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
