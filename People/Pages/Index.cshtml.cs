using Microsoft.AspNetCore.Mvc.RazorPages;

namespace People.Pages
{
    public class IndexModel : PageModel
    {
        public IEnumerable<string> Locations { get; set; }

        public void OnGet()
        {
            Locations = new[] { "Tashkent, UZB", "Namangan, UZB", "Andijan, UZB" };
        }
    }
}