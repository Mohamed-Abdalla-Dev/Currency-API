const apiKey = "9d61d207b2bca6bec8dcadd4";
const inputAmount = document.getElementById("usd-amount");

async function updatePrices() {
  const amount = inputAmount.value || 0;

  try {
    const response = await fetch(
      "https://v6.exchangerate-api.com/v6/9d61d207b2bca6bec8dcadd4/latest/USD",
    );
    console.log(response);
    const data = await response.json();
    const rates = data.conversion_rates;

    // تحديث النصوص في الواجهة
    document.getElementById("sdg-price").textContent =
      (amount * rates.SDG).toLocaleString() + " ج.س";
    document.getElementById("sar-price").textContent =
      (amount * rates.SAR).toFixed(2) + " ر.س";
    document.getElementById("eur-price").textContent =
      (amount * rates.EUR).toFixed(2) + " €";
    document.getElementById("egp-price").textContent =
      (amount * rates.EGP).toFixed(2) + " ج.م";
  } catch (error) {
    console.error("خطأ في البيانات", error);
  }
}
// تحديث الأسعار عند تغيير المبلغ المدخل
inputAmount.addEventListener("input", updatePrices);

// تشغيل الدالة لأول مرة عند فتح الصفحة
updatePrices();
