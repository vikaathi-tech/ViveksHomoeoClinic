using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class Login
    {
        [Key]
        public int LoginId {  get; set; }
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int LoginFailureCount { get; set; }
        [Required]
        public string Email { get; set; }
        public bool IsLocked { get; set; }
        public bool IsActive { get; set; }
        public byte[] Image { get; set; }
        public string RefreshToken { get; set; }
    }
}
