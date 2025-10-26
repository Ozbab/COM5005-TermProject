namespace COM5005.Web.Models
{
    public class CartItem
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public string Emoji { get; set; }
        public decimal LineTotal => Price * Quantity;
    }
}
