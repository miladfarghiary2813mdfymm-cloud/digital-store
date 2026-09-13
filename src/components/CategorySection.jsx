
function CategorySection() {
  const categories = [
    {
      name: "لپ‌تاپ",
      image: "/5.png",
    },
    {
      name: "موبایل",
      image: "/66.png",
    },
    {
      name: "هدفون",
      image: "/7.png",
    },
    {
      name: "ساعت هوشمند",
      image: "/8.png",
    },
    {
      name: "لوازم جانبی",
      image: "/9.png",
    },
  ];
  return (
    <section dir="rtl" className="mx-6 mt-8">
      <h2 className="text-2xl font-bold text-[#1F1F1F] md:text-3xl">
        دسته‌بندی محصولات
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
        {categories.map((category, index) => {
        

          return (
            <div
              key={category.name}
              className={`flex h-28 flex-col items-center justify-center rounded-2xl bg-[#FFF8EC] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md     ${index === 4 ? "col-span-2 md:col-span-1" : ""}
  `}
            >
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF8EC] p-2">
                <img
                  src={category.image}
                  alt={category.name}
                      className="h-16 w-16 scale-125 object-contain md:h-20 md:w-20 md:scale-150"
                />
              </div>
              <span className="font-medium">{category.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CategorySection;
