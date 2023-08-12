using Microsoft.AspNetCore.Mvc;

namespace GeolocationMvc.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationApiController : ControllerBase
    {
        [HttpPost]
        [Route("getlocation")]
        public IActionResult GetLocation([FromBody] GeolocationRequest request)
        {
            if (request == null || string.IsNullOrWhiteSpace(request.Latitude) || string.IsNullOrWhiteSpace(request.Longitude))
            {
                return BadRequest(new { Message = "Invalid geolocation data." });
            }

            return Ok(new
            {
                Latitude = request.Latitude,
                Longitude = request.Longitude
            });
        }
    }

    public class GeolocationRequest
    {
        public string Latitude { get; set; }
        public string Longitude { get; set; }
    }
}
