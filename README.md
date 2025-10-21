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

- 🧠 **Oğuzhan (Lider / Full Dev)** — Sepet + Genel JS Altyapı ⭐⭐⭐⭐  
  Dosyalar: `cart.html`, `checkout.html`, `js/cart.js`, `js/app.js`, `assets/css/styles.css`  
  İş: LocalStorage sepet, miktar ±, toplam/vergiler, ortak helper’lar (`getCart`,`setCart`,`formatPrice`,`renderCard`), checkout özeti, hata yönetimi.

- 🧩 **Üye 2 – Ürün Listeleme (Frontend JS + DOM)** ⭐⭐⭐  
  Dosyalar: `products.html`, `js/products.js`, `assets/css/products.css`  
  İş: Arama, kategori filtresi, fiyat/isim sıralama, kart render (data.js), “Ekle” → `cart.addItem`.

- 🧾 **Üye 3 – Ürün Detay (Dinamik Sayfa + Event Handling)** ⭐⭐⭐  
  Dosyalar: `product.html`, `js/product.js`, `assets/css/product.css`  
  İş: `?id=` ile ürün bulma, detay, galeri, “Sepete Ekle” → `cart.addItem`, benzer ürünler (ops.).

- 🎨 **Üye 4 – UI / Ana Sayfa + Responsive Düzen** ⭐⭐  
  Dosyalar: `index.html`, `assets/css/styles.css`, `assets/icons/`, `js/ui.js`  
  İş: Navbar/footer, hero, kategori kartları, tema/typografi, responsive düzen.

- 🐣 **Üye 5 – Data & Statik Sayfalar (Acemi)** ⭐  
  Dosyalar: `js/data.js`, `about.html`, `assets/img/`, `assets/css/about.css`  
  İş: Ürün verileri (id, name, price, image, category), Hakkımızda/İletişim + basit doğrulama, placeholder ve test.
