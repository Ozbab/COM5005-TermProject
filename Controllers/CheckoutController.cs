using System.Web.Mvc;
using COM5005.Web.Filters;
using COM5005.Web.Services;

namespace COM5005.Web.Controllers
{
    [SessionAuthorize]
    public class CheckoutController : Controller
    {
        private readonly ICartService cart = new SessionCartService();

        public ActionResult Index()
        {
            ViewBag.Total = cart.Total();
            return View(cart.Items());
        }

        [HttpPost]
        public ActionResult Place(string name, string phone, string address)
        {
            // DEMO: sadece temizle ve teşekkür mesajı göster
            cart.Clear();
            TempData["Thanks"] = "Siparişiniz alındı. Teşekkürler!";
            return RedirectToAction("Index", "Home");
        }
    }
}
