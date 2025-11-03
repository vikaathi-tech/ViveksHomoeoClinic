using System.ComponentModel.DataAnnotations;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class Gender
    {
        [Key]
        public int GenderId { get; set; }
        [Required]
        public string Sex { get; set; }
    }
}
