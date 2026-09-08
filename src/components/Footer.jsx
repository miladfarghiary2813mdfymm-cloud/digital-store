function Footer() {
  return (
    <footer
      dir="rtl"
      className="mt-12 border-t border-[#F3E3C8] bg-[#FFF8EC] px-6 py-10"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

        <div>
          <h2 className="text-xl font-bold text-[#1F1F1F]">
            دیجیتال شاپ
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            فروشگاه آنلاین محصولات دیجیتال  
          </p>
        </div>

        <div>
          <h3 className="font-bold text-[#1F1F1F]">
            دسترسی سریع
          </h3>

          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>خانه</li>
            <li>محصولات</li>
            <li>دسته‌بندی‌ها</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[#1F1F1F]">
            پشتیبانی
          </h3>

          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>تماس با ما</li>
            <li>سؤالات متداول</li>
            <li>قوانین و مقررات</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[#1F1F1F]">
            تماس با ما
          </h3>

          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>📞 ۰۲۱-۱۲۳۴۵۶۷۸</li>
            <li>📧 info@digitalshop.ir</li>
            <li>📍 تهران، ایران</li>
          </ul>
        </div>

      </div>

      <div className="mt-8 border-t border-[#F3E3C8] pt-5 text-center text-sm text-gray-500">
        © ۱۴۰۵ دیجیتال شاپ — تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}

export default Footer;