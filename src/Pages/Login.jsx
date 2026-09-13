import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ShoppingBag,
  ArrowLeft,
  Truck,
  ShieldCheck,
  Headset,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Face({ mood, mousePosition = { x: 0, y: 0 } }) {
  const isSurprised = mood === "surprised";
  const isPassword = mood === "password";
  const isHappy = mood === "happy";

  const eyeDirectionX = isPassword ? -4 : mousePosition.x * 8;

  const eyeDirectionY = isPassword
    ? mousePosition.y * 1.5
    : mousePosition.y * 6;

  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-[27%] top-[35%]">
        <div
          className={`relative h-7 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
            isSurprised ? "scale-110" : ""
          }`}
        >
          <div
            className="absolute left-1/2 top-1/2 h-3.5 w-3.5 rounded-full bg-[#1F1F1F] transition-transform duration-10"
            style={{
              transform: `translate(calc(-50% + ${eyeDirectionX}px), calc(-50% + ${eyeDirectionY}px))`,
            }}
          >
            <span className="absolute left-1 top-0.5 h-1 w-1 rounded-full bg-white" />
          </div>
        </div>
      </div>

      <div className="absolute right-[27%] top-[35%]">
        <div
          className={`relative h-7 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
            isSurprised ? "scale-110" : ""
          }`}
        >
          <div
            className="absolute left-1/2 top-1/2 h-3.5 w-3.5 rounded-full bg-[#1F1F1F] transition-transform duration-75"
            style={{
              transform: `translate(calc(-50% + ${eyeDirectionX}px), calc(-50% + ${eyeDirectionY}px))`,
            }}
          >
            <span className="absolute left-1 top-0.5 h-1 w-1 rounded-full bg-white" />
          </div>
        </div>
      </div>

      <div
        className={`absolute left-[25%] top-[29%] h-1 w-6 rounded-full bg-[#1F1F1F] ${
          isSurprised ? "-rotate-6" : ""
        }`}
      />

      <div
        className={`absolute right-[25%] top-[29%] h-1 w-6 rounded-full bg-[#1F1F1F] ${
          isSurprised ? "rotate-6" : ""
        }`}
      />

      <div
        className={`absolute left-[17%] top-[52%] h-3 w-6 rounded-full bg-[#F59E0B]/20 ${
          isHappy ? "opacity-100" : "opacity-60"
        }`}
      />

      <div
        className={`absolute right-[17%] top-[52%] h-3 w-6 rounded-full bg-[#F59E0B]/20 ${
          isHappy ? "opacity-100" : "opacity-60"
        }`}
      />

      <div className="absolute left-1/2 top-[65%] -translate-x-1/2">
        {isHappy ? (
          <div className="relative h-5 w-9">
            <div className="absolute left-1/2 top-0.5 h-4 w-9 -translate-x-1/2 rounded-b-full border-b-[5px] border-[#1F1F1F]" />
          </div>
        ) : isSurprised ? (
          <div className="h-5 w-4 rounded-full bg-[#1F1F1F]" />
        ) : isPassword ? (
          <div className="h-2 w-5 rounded-full bg-[#1F1F1F]" />
        ) : (
          <div className="h-1.5 w-6 rounded-full bg-[#1F1F1F]" />
        )}
      </div>
    </div>
  );
}

function Character({ type, mood, mousePosition, className = "" }) {
  const faceProps = {
    mood,
    mousePosition,
  };

  if (type === "phone") {
    return (
      <div
        className={`relative h-64 w-40 rounded-[2.5rem] border-[7px] border-[#1F1F1F] bg-[#FFC107] shadow-[0_18px_40px_rgba(31,31,31,0.16)] ${className}`}
      >
        <div className="absolute left-1/2 top-3 h-1.5 w-12 -translate-x-1/2 rounded-full bg-[#1F1F1F]" />

        <div className="absolute inset-[13px] overflow-hidden rounded-[1.9rem] bg-[#FFF8EC]">
          <div className="absolute left-4 right-4 top-4 h-2 rounded-full bg-[#F3E3C8]" />

          <div className="absolute bottom-5 left-1/2 h-40 w-32 -translate-x-1/2">
            <Face {...faceProps} />
          </div>

          <div className="absolute bottom-3 left-1/2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-[#EAD8BA]" />
        </div>

        <div className="absolute -right-[8px] top-20 h-10 w-2 rounded-r-full bg-[#1F1F1F]" />
      </div>
    );
  }

  if (type === "laptop") {
    return (
      <div className={`relative w-72 ${className}`}>
        <div className="relative h-48 rounded-[1.5rem] border-[7px] border-[#1F1F1F] bg-[#1F1F1F] p-2 shadow-[0_18px_40px_rgba(31,31,31,0.14)]">
          <div className="relative h-full overflow-hidden rounded-[1rem] bg-[#FFF8EC]">
            <div className="absolute left-5 right-5 top-4 flex gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FFC107]" />
              <span className="h-2 w-2 rounded-full bg-[#F3E3C8]" />
              <span className="h-2 w-2 rounded-full bg-[#EAD8BA]" />
            </div>

            <div className="absolute bottom-0 left-1/2 h-36 w-40 -translate-x-1/2">
              <Face {...faceProps} />
            </div>
          </div>
        </div>

        <div className="relative -mt-1 h-5">
          <div className="absolute left-1/2 top-0 h-5 w-[19rem] -translate-x-1/2 rounded-b-2xl bg-[#1F1F1F]" />
          <div className="absolute left-1/2 top-1 h-1.5 w-16 -translate-x-1/2 rounded-full bg-[#FFC107]" />
        </div>
      </div>
    );
  }

  if (type === "watch") {
    return (
      <div
        className={`relative flex h-56 w-32 flex-col items-center justify-center ${className}`}
      >
        <div className="absolute top-0 h-20 w-14 rounded-t-3xl bg-[#1F1F1F]" />
        <div className="absolute bottom-0 h-20 w-14 rounded-b-3xl bg-[#1F1F1F]" />

        <div className="relative z-10 h-36 w-28 rounded-[2rem] border-[6px] border-[#1F1F1F] bg-[#FFC107] p-2 shadow-[0_15px_30px_rgba(31,31,31,0.15)]">
          <div className="relative h-full overflow-hidden rounded-[1.4rem] bg-[#FFF8EC]">
            <div className="absolute bottom-0 left-1/2 h-28 w-24 -translate-x-1/2">
              <Face {...faceProps} />
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 z-20 h-8 w-2 -translate-y-1/2 rounded-r-full bg-[#1F1F1F]" />
      </div>
    );
  }

  return (
    <div className={`relative h-44 w-52 ${className}`}>
      <div className="absolute left-1/2 top-0 h-28 w-36 -translate-x-1/2 rounded-t-full border-[10px] border-b-0 border-[#1F1F1F]" />

      <div className="absolute left-1 top-24 h-24 w-14 rounded-2xl bg-[#1F1F1F]">
        <div className="absolute inset-2 rounded-xl bg-[#FFC107]" />
      </div>

      <div className="absolute right-1 top-24 h-24 w-14 rounded-2xl bg-[#1F1F1F]">
        <div className="absolute inset-2 rounded-xl bg-[#FFC107]" />
      </div>

      <div className="absolute left-1/2 top-12 h-36 w-40 -translate-x-1/2 rounded-[2.2rem] border-[6px] border-[#1F1F1F] bg-[#FFF8EC] shadow-[0_15px_35px_rgba(31,31,31,0.14)]">
        <Face {...faceProps} />
      </div>
    </div>
  );
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [mood, setMood] = useState("normal");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: (event.clientX - rect.left) / rect.width - 0.5,
      y: (event.clientY - rect.top) / rect.height - 0.5,
    });
  }

  function handleTogglePassword() {
    setShowPassword((current) => !current);
    setMood("password");
  }

  function handlePasswordBlur() {
    if (mood !== "happy") {
      setMood(showPassword ? "password" : "normal");
    }
  }

  function handleLogin(event) {
    event.preventDefault();
    setMood("happy");

    setTimeout(() => {
      setMood("normal");
    }, 2200);
  }

  return (
    <main
      dir="rtl"
      onMouseMove={handleMouseMove}
      className="min-h-screen overflow-x-hidden bg-[#FFF8EC] text-[#1F1F1F]"
    >
      <div
        className="grid min-h-screen lg:grid-cols-2"
        style={{ direction: "ltr" }}
      >
        <section
          className="relative hidden min-h-screen overflow-hidden bg-[#FFF8EC] lg:block"
          dir="rtl"
        >
          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#FDF2C2]" />
          <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#FDF2C2]" />

          <div className="absolute left-10 top-10 z-20">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFC107]">
                <ShoppingBag size={23} strokeWidth={2.3} />
              </div>

              <span className="text-lg font-black"> دیجیتال شاپ</span>
            </div>

            <h2 className="text-3xl font-black leading-tight">
              خرید دیجیتال،
              <br />
              <span className="text-[#F59E0B]">ساده و دوست‌داشتنی.</span>
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-7 text-[#6F665B]">
              وارد حساب کاربری خودت شو و دنیای محصولات دیجیتال رو ادامه بده.
            </p>
          </div>

          <div className="absolute inset-x-8 bottom-32 top-56">
            <div className="relative h-full w-full">
              <div className="absolute left-1/2 top-0 -translate-x-1/2">
                <Character
                  type="laptop"
                  mood={mood}
                  mousePosition={mousePosition}
                  className="scale-[0.68]"
                />
              </div>

              <div className="absolute bottom-24 left-0">
                <Character
                  type="phone"
                  mood={mood}
                  mousePosition={mousePosition}
                  className="scale-[0.62]"
                />
              </div>

              <div className="absolute bottom-24 right-0">
                <Character
                  type="watch"
                  mood={mood}
                  mousePosition={mousePosition}
                  className="scale-[0.62]"
                />
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <Character
                  type="headphone"
                  mood={mood}
                  mousePosition={mousePosition}
                  className="scale-[0.55]"
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-8 right-8 z-30 flex items-center justify-between rounded-3xl border border-[#F3E3C8] bg-white/90 px-5 py-3 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDF2C2]">
                <Truck size={19} />
              </div>

              <div>
                <p className="text-xs font-black">ارسال سریع</p>
                <p className="mt-0.5 text-[11px] text-[#8A8074]">
                  به سراسر کشور
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDF2C2]">
                <ShieldCheck size={19} />
              </div>

              <div>
                <p className="text-xs font-black">خرید امن</p>
                <p className="mt-0.5 text-[11px] text-[#8A8074]">
                  پرداخت مطمئن
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDF2C2]">
                <Headset size={19} />
              </div>

              <div>
                <p className="text-xs font-black">پشتیبانی</p>
                <p className="mt-0.5 text-[11px] text-[#8A8074]">
                  همیشه کنار شما
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 py-10 sm:px-8"
          dir="rtl"
        >
          <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-[5rem] bg-[#FDF2C2]" />
          <div className="absolute bottom-0 left-0 h-24 w-24 rounded-tr-[4rem] bg-[#FFF8EC]" />

          <div className="relative z-10 w-full max-w-md">
            <div className="mb-10 flex items-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFC107]">
                <ShoppingBag size={23} />
              </div>

              <div>
                <p className="font-black">دیجیتال شاپ</p>
              </div>
            </div>

            <div className="mb-8">
              <p className=" mb-3 text-sm font-black text-[#F59E0B]">
                خوش آمدید
              </p>

              <h1 className="text-3xl font-black leading-tight sm:text-4xl">
                ورود به حساب کاربری
              </h1>

              <p className="mt-3 text-sm leading-7 text-[#7A7166]">
                اطلاعاتت رو وارد کن تا به حساب کاربری خودت دسترسی پیدا کنی.
              </p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="mb-5">
                <label htmlFor="email" className="mb-2 block text-sm font-bold">
                  ایمیل
                </label>

                <div className="group relative">
                  <Mail
                    size={20}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9B9184] group-focus-within:text-[#F59E0B]"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="example@gmail.com"
                    onFocus={() => setMood("surprised")}
                    onBlur={() => setMood("normal")}
                    className="w-full rounded-2xl border border-[#EAD8BA] bg-[#FFFDF8] py-4 pl-4 pr-12 text-sm outline-none placeholder:text-[#B8AEA1] focus:border-[#FFC107] focus:ring-4 focus:ring-[#FFC107]/10"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-bold"
                >
                  رمز عبور
                </label>

                <div className="group relative">
                  <LockKeyhole
                    size={20}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9B9184] group-focus-within:text-[#F59E0B]"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="رمز عبور خود را وارد کنید"
                    onFocus={() => setMood("password")}
                    onBlur={handlePasswordBlur}
                    className="w-full rounded-2xl border border-[#EAD8BA] bg-[#FFFDF8] py-4 pl-12 pr-12 text-sm outline-none placeholder:text-[#B8AEA1] focus:border-[#FFC107] focus:ring-4 focus:ring-[#FFC107]/10"
                  />

                  <button
                    type="button"
                    onClick={handleTogglePassword}
                    aria-label={
                      showPassword ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9B9184] hover:text-[#1F1F1F]"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="mb-7 flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2 text-xs text-[#6F665B]">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#EAD8BA] accent-[#FFC107]"
                  />
                  مرا به خاطر بسپار
                </label>

                <button
                  type="button"
                  className="text-xs font-bold text-[#F59E0B] hover:text-[#1F1F1F]"
                >
                  رمز عبور را فراموش کردم؟
                </button>
              </div>

              <button
                type="submit"
                onMouseDown={() => setMood("happy")}
                className="group mb-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FFC107] py-4 text-sm font-black shadow-[0_12px_25px_rgba(255,193,7,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#F59E0B]"
              >
                ورود به حساب
                <ArrowLeft
                  size={18}
                  className="transition-transform duration-200 group-hover:-translate-x-1"
                />
              </button>

              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-[#F3E3C8]" />
                <span className="text-xs text-[#A09689]">یا ورود با</span>
                <div className="h-px flex-1 bg-[#F3E3C8]" />
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[#EAD8BA] bg-white py-4 text-sm font-bold hover:border-[#FFC107] hover:bg-[#FFFDF8]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#EAD8BA] text-xs font-black">
                  G
                </span>
                ادامه با Google
              </button>

              <p className="mt-7 text-center text-sm text-[#7A7166]">
                هنوز حساب کاربری نداری؟
                <Link
                  to="/register"
                  className="font-bold text-[#F59E0B] transition hover:text-[#1F1F1F]"
                >
                  ثبت‌نام
                </Link>
              </p>
            </form>

            <div className="mt-8 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#8A8074] hover:text-[#1F1F1F]"
              >
                <ArrowLeft size={15} />
                بازگشت به فروشگاه
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
