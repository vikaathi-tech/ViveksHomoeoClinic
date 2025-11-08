using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using ViveksHomoeoClinic.Data;
using ViveksHomoeoClinic.Models.DTO;

namespace ViveksHomoeoClinic.Services
{
    public class JWTService
    {   
        private readonly AppDBContext _appDBContext;
        private readonly IConfiguration _configuration;
        public JWTService(AppDBContext appDBContext,IConfiguration configuration) { 
            _appDBContext = appDBContext;
            _configuration = configuration;
        }

        public async Task<LoginResponseDTO> Authenticate(LoginRequestDTO loginRequest)
        {
            try
            {
                if (string.IsNullOrEmpty(loginRequest.UserName) || string.IsNullOrEmpty(loginRequest.Password))
                    return null;

                var userDetails = _appDBContext.Login.Select(g => g.UserName == loginRequest.UserName && g.Password == loginRequest.Password);
                if (userDetails == null)
                    return null;

                var issuer = _configuration["JWTSettings:Issuer"];
                var audience = _configuration["JWTSettings:Audience"];
                var key = _configuration["JWTSettings:Key"];
                var tokenValidityMins = int.Parse(_configuration["JWTSettings:TokenValidityInMin"]);
                var tokenExpiryTimestamp = DateTime.UtcNow.AddMinutes(tokenValidityMins);


                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new[]
                    {
                    new Claim(JwtRegisteredClaimNames.Name,loginRequest.UserName)
                }),
                    Issuer = issuer,
                    Audience = audience,
                    Expires = tokenExpiryTimestamp,
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes(key)), SecurityAlgorithms.HmacSha512Signature)
                };

                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var accessToken = tokenHandler.WriteToken(securityToken);

                return new LoginResponseDTO()
                {
                    UserName = loginRequest.UserName,
                    AccessToken = accessToken,
                    ExpiresIn = (int)(tokenExpiryTimestamp.Subtract(DateTime.UtcNow).Seconds)
                };
            }
            catch(Exception ex)
            {
                return null;
            }
            

        }
    }
}
