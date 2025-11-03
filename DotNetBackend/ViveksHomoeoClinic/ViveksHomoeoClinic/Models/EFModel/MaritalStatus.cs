using System.ComponentModel.DataAnnotations;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class MaritalStatus
    {
        [Key]
        public int MaritalStatusId { get; set; }
        [Required]
        public string Status { get; set; }
    }
}
