using System.Web;

namespace COM5005.Web.Services
{
    public interface IAuthService
    {
        bool IsLogged();
        string CurrentUser();
        bool Login(string userName, string password);
        void Logout();
        bool Register(string userName, string email, string password);
    }

    public class SessionAuthService : IAuthService
    {
        private const string KEY = "AUTH_USER";
        private HttpSessionStateBase S => new HttpSessionStateWrapper(HttpContext.Current.Session);

        public bool IsLogged() => S[KEY] != null;

        public string CurrentUser() => S[KEY] as string;

        public bool Login(string userName, string password)
        {
            // DEMO: Şifre kontrolü yapılmıyor.
            S[KEY] = userName;
            return true;
        }

        public void Logout() => S.Remove(KEY);

        public bool Register(string userName, string email, string password)
        {
            // DEMO: Sadece oturum aç.
            S[KEY] = userName;
            return true;
        }
    }
}
