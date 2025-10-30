## 📁 Proje Yapısı

```text

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
```
## 🫱🏻‍🫲🏿 Görev Dağılımı ve Sorumluluklar

| Üye                                                | Sorumluluklar (Özet)                                                                                                        | İlgili Dosyalar / Klasörler                                                                                                                                                                                     |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Oğuzhan – Lider / Full Dev**                     | **Mimari & entegrasyon**, route/filter, **Sepet & Ödeme çekirdeği**, layout/tema, kod inceleme & merge                      | `App_Start/*`, `Views/Shared/_Layout.cshtml`, `Controllers/CartController.cs` (çekirdek), `Controllers/CheckoutController.cs` (çekirdek), `Services/SessionCartService.cs` (çekirdek), `Services/*` entegrasyon |
| **Melih – Sepet & Ödeme (iş kuralları)**           | Oğuzhan’la birlikte **sepet/checkout** iş kuralları: ekle/çıkar/güncelle, toplam/vergiler, doğrulamalar, boş sepet akışları | `Controllers/CartController.cs`, `Controllers/CheckoutController.cs`, `Services/SessionCartService.cs`, `Views/Cart/Index.cshtml`, `Views/Checkout/Index.cshtml`                                                |
| **Yiğit – Ürün Listeleme (Frontend + Controller)** | Ürün **listeleme, arama, filtre, sıralama, sayfalama**                                                                      | `Controllers/ProductsController.cs` (Index), `Views/Products/Index.cshtml`, `Repositories/InMemoryProductRepository.cs`, `Content/site.css` (liste/grid)                                                        |
| **Sıla – Ürün Detay (Routing + Model Binding)**    | Ürün **detay sayfası**, benzer ürünler, **“Sepete Ekle”** akışı (servise çağrı), hata durumları                             | `Controllers/ProductsController.cs` (Details), `Views/Products/Details.cshtml`, `Services/SessionCartService.cs` (kullanım)                                                                                     |
| **Esra – Statik & Basit Formlar**                  | **About / Contact** sayfaları, basit form doğrulama (JS/Razor), küçük UI düzeltmeleri                                       | `Views/Shared/_Layout.cshtml` (linkler), `Views/Home/Index.cshtml` (hero/CTA), `Views/Static/About.cshtml` *(opsiyonel)*, `Views/Static/Contact.cshtml` *(opsiyonel)*, `Content/site.css`                       |

## 🧰 Kullanılan / Kullanılabilecek Araçlar ve Platformlar

### Çekirdek Teknolojiler
- **HTML5 / CSS3 / JavaScript (Vanilla)** — Temel UI ve etkileşim (Zorunlu)
- **ASP.NET MVC 5 + Razor** — Controller–View–Model, server-side render (Zorunlu)
- **C#** — Controller/Service/Model iş mantığı (Zorunlu)
- **IIS Express** — Visual Studio ile lokal çalıştırma (Önerilen)

### Geliştirme Ortamı
- **Visual Studio (Windows)** — MVC5 için birincil IDE (Zorunlu)
- **VS Code** — Markdown/README ve hızlı düzenlemeler (Opsiyonel)
- **.NET Framework Developer Pack** — MVC5 proje çalıştırma gereksinimleri

### Sürüm Kontrol ve İş Birliği
- **Git + GitHub** — Repo, branch/pull request, code review (Zorunlu)
- **GitHub Projects / Issues** — Sprint ve görev takibi (Önerilen)
- **Branch Protection** — `main` için PR zorunluluğu (Önerilen)
- **GitHub Actions** — Basit CI (build/test) (Opsiyonel)

### UI/UX ve Stil
- **Bootstrap 5 (CDN)** — Grid/form/responsive yardımcılar (Ders izinli ise Önerilen)
- **Font Awesome / Lucide** — İkon setleri (Opsiyonel)
- **Google Fonts** — Tipografi (Opsiyonel)
- **Figma / Canva** — Wireframe ve UI kılavuzu (Opsiyonel)

### Veri & Oturum
- **In-Memory Repository** — Başlangıçta ürün verisinin bellekte tutulması (Zorunlu)
- **Session State** — Sepet, favoriler, auth oturumu (Zorunlu)
- **SQL Server Express / LocalDB** — EF’e geçiş/kalıcılık için (Opsiyonel)

### Test ve Kalite
- **Chrome DevTools** — Network/Console/Responsive test (Önerilen)
- **Lighthouse** — Performans/erişilebilirlik ölçümleri (Önerilen)
- **xUnit / NUnit** — Birim test (Opsiyonel)
- **Selenium / Playwright** — Uçtan uca test (Opsiyonel)

### Diyagram ve Dokümantasyon
- **draw.io / Mermaid** — UML/akış diyagramları (Task-1 için ideal)
- **Prettier / EditorConfig** — Kod biçimlendirme ve ekipte tutarlılık
- **.gitignore** — `bin/`, `obj/`, `.vs/`, `*.user` gibi dosyaları dışlar

### Yayın (Opsiyonel)
- **Azure App Service / IIS** — ASP.NET MVC 5 uygulamasını canlıya almak
- **GitHub Pages / Vercel** — Statik dokümantasyon/önizleme (server-side çalışmaz)

---

## 📅 Ne Zaman Hangi Araç?

- **Hafta 7–8**: Visual Studio, Git/GitHub, In-Memory Repo, Session, (izinliyse) Bootstrap, draw.io/Mermaid
- **Hafta 9–10**: Auth & Guard’lar, DevTools/Lighthouse ile UI/UX ince ayar
- **Hafta 11–12**: Favoriler, Checkout mock; test/bugfix; PR ritmi
- **Hafta 13**: Refactor, README/dokümantasyon; erişilebilirlik/performans gözden geçirme
- **Hafta 14**: (Opsiyonel) Azure/IIS’e demo deploy + tag/release