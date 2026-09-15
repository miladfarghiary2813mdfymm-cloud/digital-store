import { Link } from "react-router-dom";
import { Heart, ArrowRight, Trash2 } from "lucide-react";
import { useFavorite } from "../context/FavoriteContext";

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorite();

  return (
    <div className="min-h-screen bg-[#FFF8EC] px-4 py-10 md:py-14">
      <div className="mx-auto max-w-5xl">

        <Link
          to="/profile"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#8A8074] transition hover:text-[#1F1F1F]"
        >
          <ArrowRight size={17} />
          بازگشت به حساب کاربری
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-black text-[#1F1F1F] md:text-4xl">
            علاقه‌مندی‌های من
          </h1>

          <p className="mt-2 text-[#7A7166]">
            محصولاتی که برای بعد ذخیره کرده‌اید
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="rounded-[2rem] border border-[#F3E3C8] bg-white p-10 text-center shadow-sm">
            <Heart className="mx-auto h-12 w-12 text-gray-300" />

            <h2 className="mt-5 text-xl font-black text-[#1F1F1F]">
              هنوز محصولی در علاقه‌مندی‌ها ندارید
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              روی قلب محصولات بزنید تا آن‌ها را ذخیره کنید.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#FFC107] px-6 py-3.5 font-bold text-[#1F1F1F] transition hover:bg-[#F59E0B]"
            >
              مشاهده محصولات
            </Link>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-[1.7rem] border border-[#F3E3C8] bg-white shadow-sm"
              >
                <Link to={`/products/${product.id}`}>
                  <div className="flex h-48 items-center justify-center bg-[#FFF8EC] p-5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </Link>

                <div className="p-4">
                  <Link to={`/products/${product.id}`}>
                    <h2 className="font-bold text-[#1F1F1F]">
                      {product.name}
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                      {product.price} تومان
                    </p>
                  </Link>

                  <button
                    onClick={() => toggleFavorite(product)}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-[#F3E3C8] bg-[#FFF8EC] py-3 text-sm font-bold text-[#1F1F1F] transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                  >
                    <Trash2 size={17} />
                    حذف از علاقه‌مندی‌ها
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}