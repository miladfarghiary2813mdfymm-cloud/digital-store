import { ShoppingCart, User, Menu,Search } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      dir="rtl"
      className="relative mx-6 mt-6 rounded-2xl border border-[#F3E3C8] bg-[#FFF8EC] px-6 py-4 shadow-sm"
    >
      <div className="flex flex-row-reverse items-center justify-between md:flex-row">
        
        <div>
          <h1 className="text-2xl font-bold">دیجیتال شاپ</h1>
        </div>

        <ul className="hidden items-center gap-8 text-lg font-medium md:flex">
      

          <li>
            <a href="#" className="transition hover:text-[#F59E0B]">
              محصولات
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-[#F59E0B]">
              دسته‌بندی‌ها
            </a>
          </li>

            <li>
            <a href="#" className="transition hover:text-[#F59E0B]">
            درباره ما
            </a>
          </li>

            <li>
            <a href="#" className="transition hover:text-[#F59E0B]">
             تماس با ما
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
        <label className="relative"> 
          <input
          
            type="text"
            placeholder="جستجوی محصول..."
            className="hidden w-52 rounded-xl border border-[#EAD8BA] bg-[#FFFDF8] px-4 py-2.5 text-right outline-none transition focus:border-[#FFC107] md:block"
          />
          <Search className="absolute left-3 top-3 hidden md:flex"/>
        </label> 
          <button className="hidden rounded-xl bg-[#FFC107] px-5 py-2.5 text-[#1F1F1F] transition hover:bg-[#F59E0B] md:flex">
            <User />
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-xl transition hover:bg-[#FDF2C2] md:hidden"
          >
            <Menu />
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-xl transition hover:bg-[#FDF2C2]">
            <ShoppingCart className="-scale-x-100" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute right-0 top-full mt-2">
          <div className="w-56 rounded-xl border border-[#F3E3C8] bg-[#FFF3DD] p-4">
            <label className="relative">
            <input
              type="text"
              placeholder="جستجوی محصول.."
              className="mb-4 w-full rounded-lg border border-[#EAD8BA] bg-white px-3 py-2 text-right outline-none focus:border-[#FFC107]"
            />
            <Search className="absolute left-3 top-0.5"/>
          </label> 
            <ul className="text-right">
              <li className="py-2 hover:text-[#F59E0B]">ورود</li>
              <li className="py-2 hover:text-[#F59E0B]">خانه</li>
              <li className="py-2 hover:text-[#F59E0B]">محصولات</li>
              <li className="py-2 hover:text-[#F59E0B]">دسته‌بندی‌ها</li>
              <li className="py-2 hover:text-[#F59E0B]">درباره ما</li>
              <li className="py-2 hover:text-[#F59E0B]">تماس با ما</li>
            </ul>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;