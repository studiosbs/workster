using Microsoft.AspNetCore.Mvc.RazorPages;

namespace People.Pages
{
    public class IndexModel : PageModel
    {
        public IEnumerable<string> Locations { get; set; }

        public IEnumerable<string> Currencies { get; set; }
        public string ChosenCurrency { get; set; }

        public IEnumerable<string> Languages { get; set; }
        public string ChosenLanguage { get; set; }

        public int CVCount { get; set; }

        public void OnGet()
        {
            Locations = new[] { "Tashkent, UZB", "Namangan, UZB", "Andijan, UZB" };

            Currencies = new[] { "UZS", "USD", "EUR", "CHF" };
            ChosenCurrency = Currencies.First();

            Languages = new[] { "English", "Uzbek", "Russian" };
            ChosenLanguage = Languages.First();

            Random gg = new();
            CVCount = gg.Next(50_000, 200_000);
        }

        public void OnGetChangeLanguage(string language) => ChosenLanguage = language;
    }
}