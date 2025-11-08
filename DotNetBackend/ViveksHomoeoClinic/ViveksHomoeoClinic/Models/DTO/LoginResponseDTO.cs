namespace ViveksHomoeoClinic.Models.DTO
{
    public class LoginResponseDTO
    {
        public string UserName { get; set; }
        public string AccessToken { get; set; }
        public int ExpiresIn { get; set; }
    }
}
