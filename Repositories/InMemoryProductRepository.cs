using System.Collections.Generic;
using System.Linq;
using COM5005.Web.Models;

namespace COM5005.Web.Services
{
    public interface IProductRepository
    {
        IEnumerable<Product> All();
        Product Find(int id);
        IEnumerable<Product> Filter(string q, string category, string sort);
    }

    public class InMemoryProductRepository : IProductRepository
    {
        private static readonly List<Product> _data = new List<Product>
        {
            new Product{ Id=1, Name="Kenya AA Filtre Kahve 250g", Category="coffee", Price=179.9m, Emoji="☕", Description="Narenciye notaları, orta kavrum."},
            new Product{ Id=2, Name="Espresso Blend 250g", Category="coffee", Price=159.9m, Emoji="☕", Description="Yoğun gövdeli, dengeli asidite."},
            new Product{ Id=3, Name="Cheesecake Dilim", Category="dessert", Price=89.9m, Emoji="🍰", Description="Klasik New York tarzı."},
            new Product{ Id=4, Name="Tiramisu", Category="dessert", Price=99.9m, Emoji="🍮", Description="Kakaolu, mascarpone kremalı."},
            new Product{ Id=5, Name="French Press", Category="accessory", Price=249.9m, Emoji="🫙", Description="Isıya dayanıklı cam."},
            new Product{ Id=6, Name="V60 Dripper", Category="accessory", Price=219.9m, Emoji="🔻", Description="2 cup, konik tasarım."},
            new Product{ Id=7, Name="Cold Brew Şişe 500ml", Category="coffee", Price=69.9m, Emoji="🧊", Description="Soğuk demleme, yumuşak içim."},
            new Product{ Id=8, Name="Brownie", Category="dessert", Price=79.9m, Emoji="🍫", Description="Yoğun kakao, cevizli."},
            new Product{ Id=9, Name="Mocha 300ml", Category="coffee", Price=64.9m, Emoji="🍫", Description="Espresso + çikolata + süt."},
            new Product{ Id=10, Name="Chemex Filtre Kağıdı (100lü)", Category="accessory", Price=159.0m, Emoji="📄", Description="Kalın kesim kağıt filtre."},
        };

        public IEnumerable<Product> All() => _data;

        public Product Find(int id) => _data.FirstOrDefault(x => x.Id == id);

        public IEnumerable<Product> Filter(string q, string category, string sort)
        {
            var list = _data.AsEnumerable();
            if (!string.IsNullOrWhiteSpace(q))
            {
                var lq = q.ToLowerInvariant();
                list = list.Where(p => p.Name.ToLowerInvariant().Contains(lq) || (p.Description ?? "").ToLowerInvariant().Contains(lq));
            }
            if (!string.IsNullOrWhiteSpace(category))
            {
                list = list.Where(p => p.Category == category);
            }
            switch (sort)
            {
                case "price_asc": list = list.OrderBy(p => p.Price); break;
                case "price_desc": list = list.OrderByDescending(p => p.Price); break;
                case "name_asc": list = list.OrderBy(p => p.Name); break;
            }
            return list;
        }
    }
}
