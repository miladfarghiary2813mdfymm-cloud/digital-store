import { ShoppingCart, User, Search } from "lucide-react";
function Navbar() {
  return (
    <nav className="mx-6 mt-6 rounded-2xl bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">

    
        <div>
          <h1 className="text-2xl font-bold">
            دیجیتال شاپ
          </h1>
        </div>


   
        <ul className="flex items-center gap-8 text-lg font-medium">

          <li>
            <a
              href="#"
              className="transition hover:text-blue-600"
            >
              خانه
            </a>
          </li>

          <li>
            <a
              href="#"
              className="transition hover:text-blue-600"
            >
              محصولات
            </a>
          </li>

          <li>
            <a
              href="#"
              className="transition hover:text-blue-600"
            >
              دسته‌بندی‌ها
            </a>
          </li>

        </ul>


  
        <div className="flex items-center gap-3">

       
          <input
            type="text"
            placeholder="جستجوی محصول..."
            className="w-52 rounded-xl border border-gray-200 px-4 py-2.5 text-right outline-none transition focus:border-blue-500"
          />

          <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-white transition hover:bg-blue-700">
                <User />
          </button>


          <button className="flex h-12 w-12 items-center justify-center rounded-xl transition hover:bg-gray-100">
          <ShoppingCart />
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
