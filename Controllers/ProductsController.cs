using System.Web.Mvc;
using COM5005.Web.Services;

namespace COM5005.Web.Controllers
{
    public class ProductsController : Controller
    {
        private readonly IProductRepository repo = new InMemoryProductRepository();
        private readonly ICartService cart = new SessionCartService();
        private readonly IFavoritesService fav = new SessionFavoritesService();
        private readonly IAuthService auth = new SessionAuthService();

        public ActionResult Index(string q, string category, string sort)
        {
            var items = repo.Filter(q, category, sort);
            ViewBag.Q = q; ViewBag.Category = category; ViewBag.Sort = sort;
            ViewBag.IsLogged = auth.IsLogged();
            ViewBag.Favs = fav.Get();
            return View(items);
        }

        public ActionResult Details(int id)
        {
            var p = repo.Find(id);
            if (p == null) return HttpNotFound();
            ViewBag.IsLogged = auth.IsLogged();
            ViewBag.HasFav = fav.Has(id);
            return View(p);
        }

        [HttpPost]
        public ActionResult AddToCart(int id)
        {
            if (!auth.IsLogged()) return RedirectToAction("Login", "Account", new { returnUrl = Url.Action("Index", "Cart") });
            var p = repo.Find(id);
            if (p == null) return HttpNotFound();
            cart.Add(p, 1);
            return RedirectToAction("Index", "Cart");
        }

        [HttpPost]
        public ActionResult ToggleFav(int id)
        {
            if (!auth.IsLogged()) return RedirectToAction("Login", "Account", new { returnUrl = Url.Action("Index", "Favorites") });
            fav.Toggle(id);
            return RedirectToAction("Index", new { id = "" });
        }
    }
}
