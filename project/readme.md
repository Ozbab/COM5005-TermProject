
project/
├─ index.html
├─ products.html
├─ product.html
├─ cart.html
├─ checkout.html
├─ about.html
├─ contact.html
├─ favorites.html              # (önerilen)
├─ search.html                 # (önerilen, istersen products’a göm)
├─ thank-you.html              # (önerilen)
├─ 404.html                    # (önerilen)
├─ partials/                   # (UI parçaları)
│  ├─ header.html
│  └─ footer.html
├─ assets/
│  ├─ css/
│  │  ├─ styles.css
│  │  ├─ products.css
│  │  ├─ product.css
│  │  ├─ about.css
│  │  ├─ contact.css
│  │  └─ auth.css             # (opsiyonel)
│  ├─ img/                    # kapaklar, bannerlar
│  └─ icons/
└─ js/
   ├─ app.js                  # navbar, common helpers, storage utils
   ├─ data.js                 # kitap mock verisi (id, title, price, authors…)
   ├─ products.js             # arama/filtre/sırala/pagination
   ├─ product.js              # detay sayfası (id ile veri çek)
   ├─ cart.js                 # localStorage sepet; qty ±; totals
   ├─ checkout.js             # kupon/kargo (mock) + özet
   ├─ favorites.js            # localStorage favoriler
   ├─ search.js               # ayrı sayfa kullanıyorsan
   ├─ form-validate.js        # contact form vb.
   └─ toast.js                # bildirim/toast
