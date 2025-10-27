<summary>
<storng>Proje Yapısı</storng>

COM5005-TermProject/
├─ COM5005.Web-YeniVersiyon.sln        # Çözüm dosyası (Visual Studio ile aç)
├─ COM5005.Web.csproj                  # Web projesi
├─ Global.asax                         # Uygulama başlangıç noktası
├─ Global.asax.cs
├─ Web.config                          # Uygulama ayarları
│
├─ App_Start/
│  ├─ RouteConfig.cs                   # URL yönlendirme kuralları (MVC routes)
│  └─ FilterConfig.cs                  # Global filtreler (HandleError vb.)
│
├─ Controllers/                        # Controller katmanı (iş akışı & yönlendirme)
│  ├─ HomeController.cs                # Ana sayfa
│  ├─ ProductsController.cs            # Ürün listesi & detay
│  ├─ CartController.cs                # Sepet işlemleri
│  ├─ CheckoutController.cs            # Ödeme/özet (mock)
│  ├─ FavoritesController.cs           # Favoriler (session)
│  └─ AccountController.cs             # Login/Register (session tabanlı)
│
├─ Views/                              # Razor View’lar (UI)
│  ├─ Shared/
│  │  ├─ _Layout.cshtml                # Ana layout (navbar/footer)
│  │  └─ _LoginPartial.cshtml          # Kullanıcı durumu (giriş/çıkış)
│  ├─ Home/Index.cshtml                # Ana sayfa
│  ├─ Products/Index.cshtml            # Ürün listeleme + arama/filtre/sıralama
│  ├─ Products/Details.cshtml          # Ürün detay
│  ├─ Cart/Index.cshtml                # Sepet
│  ├─ Checkout/Index.cshtml            # Ödeme/özet (mock)
│  ├─ Favorites/Index.cshtml           # Favoriler
│  └─ Account/{Login,Register}.cshtml  # Giriş/Kayıt
│
├─ Models/                             # Temel veri modelleri
│  ├─ Product.cs
│  └─ CartItem.cs
│
├─ ViewModels/                         # View’a özel tipler (Formlar/DTO)
│  └─ AuthViewModels.cs                # Login/Register formları
│
├─ Services/                           # Uygulama servisleri (iş kuralları)
│  ├─ SessionCartService.cs            # Sepet yönetimi (Session)
│  ├─ SessionFavoritesService.cs       # Favoriler (Session)
│  └─ SessionAuthService.cs            # Login/Register (Session)
│
├─ Repositories/                       # Veri erişimi (mock/sonra DB’ye hazır)
│  └─ InMemoryProductRepository.cs     # Ürün verisi (InMemory; sonra EF’e geçilebilir)
│
├─ Filters/
│  └─ SessionAuthorizeAttribute.cs     # Giriş gerektiren sayfalar için attribute
│
├─ Content/
│  └─ site.css                         # Basit tema/stiller
│
├─ Scripts/
│  └─ README.md                        # (İsteğe bağlı: küçük JS yardımcıları)
│
└─ Areas/                              # Admin vb. ayrı alanlar için iskelet (opsiyonel)
   └─ README.md

</summary> 
<summary>
<strong>Görev Dağılımı ve Sorumluluklar</strong>

| Üye                                                                   | Sorumluluklar (Özet)                                                                                                        | İlgili Dosyalar / Klasörler                                                                                                                                                                                     |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| **Oğuzhan – Lider / Full Dev**                                        | **Mimari & entegrasyon**, route/filter, **Sepet & Ödeme akışının çekirdeği**, layout/tema, kod inceleme & merge             | `App_Start/*`, `Views/Shared/_Layout.cshtml`, `Controllers/CartController.cs` (çekirdek), `Controllers/CheckoutController.cs` (çekirdek), `Services/SessionCartService.cs` (çekirdek), `Services/*` entegrasyon |
| **Melih – Sepet & Ödeme (iş kuralları)**                              | Oğuzhan’la birlikte **sepet/checkout** iş kuralları: ekle/çıkar/güncelle, toplam/vergiler, doğrulamalar, boş sepet akışları | `Controllers/CartController.cs`, `Controllers/CheckoutController.cs`, `Services/SessionCartService.cs`, `Views/Cart/Index.cshtml`, `Views/Checkout/Index.cshtml`                                                | 
| **Yiğit – Ürün Listeleme (Frontend + Controller)**                    | Ürün **listeleme, arama, filtre, sıralama, sayfalama**                                                                      | `Controllers/ProductsController.cs` (Index), `Views/Products/Index.cshtml`, `Repositories/InMemoryProductRepository.cs`, `Content/site.css` (liste/grid)                                                        |
| **Sıla – Ürün Detay (Routing + Model Binding)**                       | Ürün **detay sayfası**, benzer ürünler, **“Sepete Ekle”** akışı (servise çağrı), hata durumları                             | `Controllers/ProductsController.cs` (Details), `Views/Products/Details.cshtml`, `Services/SessionCartService.cs` (kullanım)                                                                                     | 
| **Esra – Statik & Basit Formlar (Auth giriş sayfalarına dokunmadan)** | **About / Contact** sayfaları, basit form doğrulama (JS/Razor), küçük UI düzeltmeleri                                       | `Views/Shared/_Layout.cshtml` (linkler), `Views/Home/Index.cshtml` (hero/CTA), `Views/Static/About.cshtml` *(istersen eklersin)*, `Views/Static/Contact.cshtml` *(istersen eklersin)*, `Content/site.css`       |
</summary>

                                                                                                                          