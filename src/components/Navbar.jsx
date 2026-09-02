import { ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav
      dir="rtl"
      className=" relative mx-6 mt-6 rounded-2xl bg-white px-6 py-4 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">دیجیتال شاپ</h1>
        </div>

        <ul className="hidden items-center gap-8 text-lg font-medium md:flex">
          <li>
            <a href="#" className="transition hover:text-blue-600">
              خانه
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-blue-600">
              محصولات
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-blue-600">
              دسته‌بندی‌ها
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="جستجوی محصول..."
            className=" hidden md:block w-52 rounded-xl border border-gray-200 px-4 py-2.5 text-right outline-none transition focus:border-blue-500"
          />

          <button className=" hidden md:flex rounded-xl bg-blue-600 px-5 py-2.5 text-white transition hover:bg-blue-700">
            <User />
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-xl transition hover:bg-gray-100">
            <ShoppingCart className="-scale-x-100" />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-xl transition hover:bg-gray-100 md:hidden"
          >
            <Menu />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className=" absolute left-0 top-full mt-2">
          <div className="w-56 rounded-xl bg-gray-100 p-4">
            <input
              type="text"
              placeholder="جستجوی محصول..."
              className="mb-4 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-right outline-none focus:border-blue-500 "
            />
            <ul className="text-right">
              <li className="hover:text-blue-700">ورود</li>
              <li className="hover:text-blue-700">خانه</li>
              <li className="hover:text-blue-700">محصولات</li>
              <li className="hover:text-blue-700">دسته‌بندی‌ها</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
