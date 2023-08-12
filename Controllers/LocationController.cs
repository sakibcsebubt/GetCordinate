using Microsoft.AspNetCore.Mvc;

namespace GeolocationMvc.Controllers
{
    public class LocationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
