using System.Web.Mvc;
using COM5005.Web.Filters;
using COM5005.Web.Services;

namespace COM5005.Web.Controllers
{
    [SessionAuthorize]
    public class CartController : Controller
    {
        private readonly ICartService cart = new SessionCartService();
        private readonly IProductRepository repo = new InMemoryProductRepository();

        public ActionResult Index()
        {
            return View(cart.Items());
        }

        [HttpPost] public ActionResult Incr(int id){ cart.Update(id, (cart.Items().Find(x=>x.ProductId==id)?.Quantity ?? 0) + 1); return RedirectToAction("Index"); }
        [HttpPost] public ActionResult Decr(int id){ var q = (cart.Items().Find(x=>x.ProductId==id)?.Quantity ?? 1) - 1; cart.Update(id, q<1?1:q); return RedirectToAction("Index"); }
        [HttpPost] public ActionResult Remove(int id){ cart.Remove(id); return RedirectToAction("Index"); }
        [HttpPost] public ActionResult Clear(){ cart.Clear(); return RedirectToAction("Index"); }
        [HttpPost] public ActionResult Add(int id){ var p = repo.Find(id); if(p!=null) cart.Add(p,1); return RedirectToAction("Index"); }
    }
}
