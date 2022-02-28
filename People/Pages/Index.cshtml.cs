using Microsoft.AspNetCore.Mvc.RazorPages;

namespace People.Pages
{
    public class IndexModel : PageModel
    {
        public IEnumerable<string> Locations { get; set; }
        public int CVCount { get; set; }

        public void OnGet()
        {
            Locations = new[] { "Tashkent, UZB", "Namangan, UZB", "Andijan, UZB" };

            Random gg = new();
            CVCount = gg.Next(50_000, 200_000);
        }
    }
}