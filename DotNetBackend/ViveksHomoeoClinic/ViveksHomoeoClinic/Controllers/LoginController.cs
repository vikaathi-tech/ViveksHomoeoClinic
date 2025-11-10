using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ViveksHomoeoClinic.Models.DTO;
using ViveksHomoeoClinic.Services;

namespace ViveksHomoeoClinic.Controllers
{
    public class LoginController : Controller
    {
        private readonly JWTService _jwtService;
        public LoginController(JWTService jwtService) =>
            _jwtService = jwtService;

        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<ActionResult<LoginResponseDTO>> Login(LoginRequestDTO loginRequest)
        {
            var result = await _jwtService.Authenticate(loginRequest);
            if (result == null) {
                return Unauthorized();
            }
            return result;
        }
    }
}
