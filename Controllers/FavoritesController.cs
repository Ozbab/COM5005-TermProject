using System.Web.Mvc;
using COM5005.Web.Filters;
using COM5005.Web.Services;

namespace COM5005.Web.Controllers
{
    [SessionAuthorize]
    public class FavoritesController : Controller
    {
        private readonly IFavoritesService fav = new SessionFavoritesService();
        private readonly IProductRepository repo = new InMemoryProductRepository();

        public ActionResult Index()
        {
            var ids = fav.Get();
            var items = System.Linq.Enumerable.Where(repo.All(), p => ids.Contains(p.Id));
            return View(items);
        }

        [HttpPost]
        public ActionResult Toggle(int id)
        {
            fav.Toggle(id);
            return RedirectToAction("Index");
        }
    }
}
