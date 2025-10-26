using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace COM5005.Web.Services
{
    public interface IFavoritesService
    {
        IList<int> Get();
        bool Has(int id);
        void Toggle(int id);
    }

    public class SessionFavoritesService : IFavoritesService
    {
        private const string KEY = "FAVS";
        private HttpSessionStateBase S => new HttpSessionStateWrapper(HttpContext.Current.Session);

        public IList<int> Get()
        {
            var list = S[KEY] as IList<int>;
            if (list == null) { list = new List<int>(); S[KEY] = list; }
            return list;
        }

        public bool Has(int id) => Get().Contains(id);

        public void Toggle(int id)
        {
            var list = Get();
            if (list.Contains(id)) list.Remove(id);
            else list.Add(id);
        }
    }
}
