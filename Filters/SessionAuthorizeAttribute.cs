using System.Web;
using System.Web.Mvc;
using COM5005.Web.Services;

namespace COM5005.Web.Filters
{
    public class SessionAuthorizeAttribute : AuthorizeAttribute
    {
        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            var auth = new SessionAuthService();
            return auth.IsLogged();
        }

        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            var back = filterContext.HttpContext.Request.RawUrl;
            filterContext.Result = new RedirectResult("/Account/Login?returnUrl=" + HttpUtility.UrlEncode(back));
        }
    }
}
