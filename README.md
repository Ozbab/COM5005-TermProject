# COM5005-TermProject
TermProject çalışma alanı
## 📂 Proje Yapısı
<details>
  <summary><span style="color:#1d4ed8; font-weight:700;">📘 Proje Yapısı (buraya tıkla)</span></summary>

```text
COM5005-TermProject/
├─ index.html               # ANA SAYFA
├─ products.html            # ÜRÜN LİSTELEME + FİLTRELEME/SIRALAMA
├─ product.html             # ÜRÜN DETAYI (ID)
├─ cart.html                # SEPET (LOCAL STORAGE DA TUTULCAK)
├─ checkout.html            # ÖDEME/SEPET ÖZETİ
├─ about.html               # HAKKINDA/İLETİŞİM
├─ assets/
│ ├─ css/
│ │ └─ styles.css           # ORTAK CSS
│ ├─ img/                   # ÜRÜN GÖRSELLERİ
│ └─ icons/                 # İKONLAR
└─ js/
├─ data.js                  # ÜRÜN VERİLERİ (JS)
├─ app.js                   # ORTAK FONKSYONLAR (RENDER, QUERY, HELPERS)
├─ products.js              # LİSTELEME + (FILTER / SORT)
├─ product.js               # ÜRÜNÜN DETAYLARI (JS)
└─ cart.js                  # SEPET(EKLEME/ÇIKARMA), FİYAT TOPLAMLARI (LOCAL STORAGE DAN)
```
</details> 

## Görev Dağılımı
```text
 Oğuzhan - (Lider / Full Dev)
Sepet + Genel JS Altyapı
cart.html, checkout.html, js/cart.js, js/app.js, assets/css/styles.css (genel stiller)
LocalStorage sepet sistemi, miktar artır/azalt, toplam hesaplama, ortak yardımcı fonksiyonlar (getCart, setCart, formatPrice, renderCard), ödeme özeti, hata yönetimi, projenin genel entegrasyonu
Yiğit – Ürün Listeleme (Frontend JS + DOM)
Ürün Listesi + Filtreleme + Arama
products.html, js/products.js, assets/css/products.css
Filtreleme, sıralama, kategori butonları, arama kutusu, ürün kartlarının dinamik olarak render edilmesi (data.js’ten)
Sıla – Ürün Detay (Dinamik Sayfa + Event Handling)
Ürün Detay + Sepete Ekle
product.html, js/product.js, assets/css/product.css
?id= parametresine göre ürün bulma, detay gösterme, “Sepete Ekle” butonunu ile cart.js fonksiyonuna bağlama, benzer ürünler kısmı (opsiyonel)
Melih – UI / Ana Sayfa + Responsive Düzen + Sepet
Ana Sayfa + Navbar/Footer
index.html, assets/css/styles.css, assets/icons/, minik js/ui.js
Navbar, hero alanı, kategori kartları, alt bilgi, tüm sitenin responsive görünümü, tema renkleri, görsel denge
Esra – Data & Statik Sayfalar (Acemi)
Veri + Hakkında Sayfası
js/data.js, about.html, assets/img/, assets/css/about.css
Ürün verilerini düzenleme (isim, fiyat, görsel yolları), Hakkında/İletişim sayfası, form doğrulama (basit JS), placeholder image ve test
```