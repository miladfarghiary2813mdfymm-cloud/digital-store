import { Trash2 } from "lucide-react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total +
      Number(
        item.price
          .replace(/[۰-۹]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹".indexOf(digit))
          .replace(/,/g, ""),
      ) *
        item.quantity,
    0,
  );

  return (
    <>
      <Navbar />

      <main dir="rtl" className="mx-6 mt-10">
        <h1 className="text-3xl font-bold text-[#1F1F1F]">سبد خرید</h1>

        {cartItems.length === 0 ? (
          <p className="mt-10 text-center text-gray-500">
            سبد خرید شما خالی است.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="space-y-4 md:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-2xl border border-[#F3E3C8] bg-white p-4 sm:flex-row sm:items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-32 w-full object-contain sm:h-24 sm:w-24"
                  />

                  <div className="flex-1">
                    <h2 className="font-bold text-[#1F1F1F]">{item.name}</h2>

                    <div className="mt-2 flex w-fit items-center rounded-lg border border-[#F3E3C8]">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-1 text-lg hover:bg-[#FDF2C2]"
                      >
                        +
                      </button>

                      <span className="px-4 py-1 font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-3 py-1 text-lg hover:bg-[#FDF2C2]"
                      >
                        -
                      </button>
                    </div>

                    <p className="mt-2 font-bold">
                      {Number(
                        item.price
                          .replace(/[۰-۹]/g, (digit) =>
                            "۰۱۲۳۴۵۶۷۸۹".indexOf(digit),
                          )
                          .replace(/,/g, ""),
                      ).toLocaleString("fa-IR")}{" "}
                      تومان
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="rounded-xl p-3 transition hover:bg-red-100"
                  >
                    <Trash2 className="text-red-500" />
                  </button>
                </div>
              ))}
            </div>

          <div className="h-fit rounded-2xl border border-[#F3E3C8] bg-[#FFF8EC] p-6 md:sticky md:top-6">
              <h2 className="text-xl font-bold">خلاصه سفارش</h2>

              <div className="mt-6 flex justify-between">
                <span>مبلغ کل</span>
                <span className="font-bold">
                  {totalPrice.toLocaleString("fa-IR")} تومان
                </span>
              </div>

              <button className="mt-6 w-full rounded-xl bg-[#FFC107] py-3 font-bold transition hover:bg-[#F59E0B]">
                ادامه فرایند خرید
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default Cart;
