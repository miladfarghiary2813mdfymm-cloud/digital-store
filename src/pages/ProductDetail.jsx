import { useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = products.find((product) => product.id === Number(id));
  const { addToCart } = useCart();
  if (!product) {
    return (
      <>
        <Navbar />
        <main dir="rtl" className="mx-6 mt-16 text-center">
          <h1 className="text-2xl font-bold text-[#1F1F1F]">محصول پیدا نشد</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main dir="rtl" className="mx-6 mt-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex min-h-96 items-center justify-center rounded-2xl border border-[#F3E3C8] bg-[#FFF8EC] p-10">
            <img
              src={product.image}
              alt={product.name}
              className="h-56 w-56 object-contain sm:h-72 sm:w-72"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-[#FFC107] text-[#FFC107]" />
              <span>{product.rating}</span>
            </div>

            <h1 className="mt-4 text-2xl font-bold text-[#1F1F1F]">
              {product.name}
            </h1>

            <p className="mt-4 leading-8 text-gray-500">
              {product.description}
            </p>

            <div className="mt-8">
              <span className="text-2xl font-bold text-[#1F1F1F]">
                {product.price}
              </span>
              <span className="mr-2 text-gray-500">تومان</span>
            </div>
            <div className="mt-8 flex w-fit items-center rounded-xl border border-[#F3E3C8]">
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 text-xl hover:bg-[#FDF2C2] rounded-xl"
              >
                +
              </button>

              <span className="px-5 py-2 font-bold">{quantity}</span>

              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 text-xl hover:bg-[#FDF2C2] rounded-xl "
              >
                -
              </button>
            </div>
            <button
              onClick={() => addToCart(product, quantity)}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFC107] py-4 font-medium text-[#1F1F1F] transition hover:bg-[#F59E0B]"
            >
              <ShoppingCart className="h-5 w-5" />
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductDetail;
