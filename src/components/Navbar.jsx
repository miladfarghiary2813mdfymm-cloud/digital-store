import { ShoppingCart, User, Menu, Search, ShoppingBag } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
function Navbar() {
const { cartItems } = useCart();

const cartCount = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav
      ref={menuRef}
      dir="rtl"
      className="relative z-50 mx-6 mt-6 rounded-2xl border border-[#F3E3C8] bg-[#FFF8EC] px-6 py-4 shadow-sm"
    >
      <div className="flex flex-row-reverse items-center justify-between md:flex-row">
        <div className="flex items-center gap-1">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFC107] shadow-sm md:h-12 md:w-12 ">
            <ShoppingBag className="h-6 w-6 text-[#1F1F1F] md:h-7 md:w-7 cursor-pointer" />
          </div>

          <h1 className=" hidden md:flex whitespace-nowrap text-xl font-bold text-[#1F1F1F] md:text-2xl cursor-pointer">
            دیجیتال شاپ
          </h1>
        </div>

        <ul className="hidden items-center gap-8 text-lg font-medium md:flex">
          <li>
            <Link to="/products" className="transition hover:text-[#F59E0B]">
              محصولات
            </Link>
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

        <div className="flex items-center gap-1">
          <label className="relative">
            <input
              type="text"
              placeholder="جستجوی محصول..."
              className="hidden w-52 rounded-xl border border-[#EAD8BA] bg-[#FFFDF8] px-4 py-2.5 text-right outline-none transition focus:border-[#FFC107] md:block"
            />
            <Search className="absolute left-3 top-3 hidden md:flex" />
          </label>
          <button className="hidden rounded-xl bg-[#FFC107] px-5 py-2.5 text-[#1F1F1F] transition hover:bg-[#F59E0B] md:flex cursor-pointer">
            <User />
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-xl transition hover:bg-[#FDF2C2] md:hidden"
          >
            <Menu />
          </button>

          <Link
            to="/cart"
            className="relative flex h-12 w-12 items-center justify-center rounded-xl transition hover:bg-[#FDF2C2]"
          >
            <ShoppingCart className="-scale-x-100 cursor-pointer" />

         <span className="absolute left-0 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#F59E0B] text-xs font-bold text-white">
  {cartCount}
</span>
          </Link>
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
              <Search className="absolute left-3 top-0.5" />
            </label>
            <ul className="text-right">
              <li className="py-2 hover:text-[#F59E0B] cursor-pointer">ورود</li>
              <li>
                <Link to="/" className="transition hover:text-[#F59E0B]">
                  خانه
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="block py-2 transition hover:text-[#F59E0B]"
                >
                  محصولات
                </Link>
              </li>
              <li className="py-2 hover:text-[#F59E0B] cursor-pointer">
                دسته‌بندی‌ها
              </li>
              <li className="py-2 hover:text-[#F59E0B] cursor-pointer">
                درباره ما
              </li>
              <li className="py-2 hover:text-[#F59E0B] cursor-pointer">
                تماس با ما
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
