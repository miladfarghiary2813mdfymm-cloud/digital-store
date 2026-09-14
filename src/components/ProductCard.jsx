import { ShoppingCart, Heart, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useFavorite } from "../context/FavoriteContext";
function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorite();
  return (
    <div className="overflow-hidden rounded-2xl border border-[#F3E3C8] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative flex h-52 items-center justify-center bg-[#FFF8EC] p-6">
        <Link to={`/products/${product.id}`} className="h-full w-full">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain"
          />
        </Link>

        <button
          onClick={() => toggleFavorite(product)}
          className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition hover:bg-[#FDF2C2]"
        >
          <Heart
            className={`h-5 w-5 transition ${
              isFavorite(product.id)
                ? "fill-red-500 text-red-500"
                : "text-[#1F1F1F]"
            }`}
          />
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-[#FFC107] text-[#FFC107]" />
          <span className="text-sm">{product.rating}</span>
        </div>

        <Link
          to={`/products/${product.id}`}
          className="mt-3 block text-lg font-bold text-[#1F1F1F] transition hover:text-[#F59E0B]"
        >
          {product.name}
        </Link>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        <div className="mt-5">
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-red-100 px-2 py-1 text-xs font-bold text-red-500">
              {product.discount}
            </span>

            <span className="text-sm text-gray-400 line-through">
              {product.oldPrice}
            </span>
          </div>

          <div className="mt-2">
            <span className="text-lg font-bold text-[#1F1F1F]">
              {product.price}
            </span>

            <span className="mr-1 text-sm text-gray-500">تومان</span>
          </div>
        </div>

        <button
          onClick={() => {
            addToCart(product, 1);
            setIsAdded(true);
          }}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFC107] py-3 font-medium text-[#1F1F1F] transition hover:bg-[#F59E0B]"
        >
          <ShoppingCart className="h-5 w-5 -scale-x-100" />

          {isAdded ? "به سبد اضافه شد ✓" : "افزودن به سبد خرید"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
