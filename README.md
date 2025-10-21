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

<details>
## Görev Dağılımı

- **Oğuzhan - (Lider / Full Dev)** — Sepet + Genel JS Altyapı  
  Dosyalar: `index.html`,`cart.html`, `checkout.html`, `js/cart.js`, `js/app.js`, `assets/css/styles.css`,`assets/icons/`
  İş: LocalStorage sepet, miktar ±, toplam/vergiler, ortak helper’lar (`getCart`,`setCart`,`formatPrice`,`renderCard`), checkout özeti, hata yönetimi.Navbar/footer, hero, kategori kartları, tema/typografi, responsive düzen

- **Yiğit – Ürün Listeleme (Frontend JS + DOM)**  
  Dosyalar: `products.html`, `js/products.js`, `assets/css/products.css`  
  İş: Arama, kategori filtresi, fiyat/isim sıralama, kart render (data.js), “Ekle” → `cart.addItem`.

- **Sıla 3 - Ürün Detay (Dinamik Sayfa + Event Handling)**  
  Dosyalar: `product.html`, `js/product.js`, `assets/css/product.css`  
  İş: `?id=` ile ürün bulma, detay, galeri, “Sepete Ekle” → `cart.addItem`, benzer ürünler (ops.).

- **Melih 4 - Ödeme + Sepet**  
  Dosyalar: , `assets/css/styles.css`, , `js/ui.js` ,`checkout.html`,`cart.html`
  İş: LocalStorage sepet, miktar ±, toplam/vergiler, ortak helper’lar (`getCart`,`setCart`,`formatPrice`,`renderCard`)

- **Esra 5 - Data & Statik Sayfalar**  
  Dosyalar: `js/data.js`, `about.html`, `assets/img/`, `assets/css/about.css`  
  İş: Ürün verileri (id, name, price, image, category), Hakkımızda/İletişim + basit doğrulama, placeholder ve test.

  </details>
