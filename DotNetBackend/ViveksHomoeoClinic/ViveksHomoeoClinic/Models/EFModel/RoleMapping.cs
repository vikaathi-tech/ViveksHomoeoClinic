using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class RoleMapping
    {
        [Key]
        [Required]
        public int RoleMapId { get; set; }
        [Required]
        public int RoleId { get; set; }
        [Required]
        public int LoginId { get; set; }
        [ForeignKey(nameof(RoleId))]
        public Role Role { get; set; }
        [ForeignKey(nameof(LoginId))]
        public Login Login { get; set; }
    }
}
