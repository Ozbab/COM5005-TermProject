using System.Web.Mvc;
using COM5005.Web.Models;
using COM5005.Web.Services;

namespace COM5005.Web.Controllers
{
    public class AccountController : Controller
    {
        private readonly IAuthService auth = new SessionAuthService();

        [HttpGet]
        public ActionResult Login(string returnUrl)
        {
            return View(new LoginViewModel{ ReturnUrl = string.IsNullOrWhiteSpace(returnUrl) ? Url.Action("Index","Cart") : returnUrl });
        }

        [HttpPost, ValidateAntiForgeryToken]
        public ActionResult Login(LoginViewModel vm)
        {
            if (!ModelState.IsValid) return View(vm);
            if (auth.Login(vm.UserName, vm.Password))
                return Redirect(vm.ReturnUrl ?? Url.Action("Index", "Cart"));
            ModelState.AddModelError("", "Giriş başarısız.");
            return View(vm);
        }

        [HttpGet]
        public ActionResult Register() => View(new RegisterViewModel());

        [HttpPost, ValidateAntiForgeryToken]
        public ActionResult Register(RegisterViewModel vm)
        {
            if (!ModelState.IsValid) return View(vm);
            if (auth.Register(vm.UserName, vm.Email, vm.Password))
                return RedirectToAction("Login");
            ModelState.AddModelError("", "Kayıt başarısız.");
            return View(vm);
        }

        public ActionResult Logout()
        {
            auth.Logout();
            return RedirectToAction("Index","Home");
        }
    }
}
