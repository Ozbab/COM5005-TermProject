using System.Collections.Generic;
using System.Linq;
using System.Web;
using COM5005.Web.Models;

namespace COM5005.Web.Services
{
    public interface ICartService
    {
        IList<CartItem> Items();
        void Add(Product p, int qty = 1);
        void Update(int id, int qty);
        void Remove(int id);
        void Clear();
        decimal Total();
    }

    public class SessionCartService : ICartService
    {
        private const string KEY = "CART_SESSION";
        private HttpSessionStateBase S => new HttpSessionStateWrapper(HttpContext.Current.Session);

        private IList<CartItem> Get()
        {
            var list = S[KEY] as IList<CartItem>;
            if (list == null) { list = new List<CartItem>(); S[KEY] = list; }
            return list;
        }

        public IList<CartItem> Items() => Get();

        public void Add(Product p, int qty=1)
        {
            var list = Get();
            var it = list.FirstOrDefault(x => x.ProductId == p.Id);
            if (it == null) list.Add(new CartItem{ ProductId = p.Id, Name = p.Name, Price = p.Price, Quantity = qty, Emoji = p.Emoji });
            else it.Quantity += qty;
        }

        public void Update(int id, int qty)
        {
            var it = Get().FirstOrDefault(x => x.ProductId == id);
            if (it != null) it.Quantity = qty < 1 ? 1 : qty;
        }

        public void Remove(int id) => Get().Remove(Get().FirstOrDefault(x => x.ProductId == id));

        public void Clear() => S[KEY] = new List<CartItem>();

        public decimal Total() => Get().Sum(x => x.Price * x.Quantity);
    }
}
