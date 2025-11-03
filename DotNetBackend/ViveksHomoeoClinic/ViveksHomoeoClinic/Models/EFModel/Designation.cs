using System.ComponentModel.DataAnnotations;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class Designation
    {
        [Key]
        public int DesignationId { get; set; }
        [Required]
        public string DesignationName { get; set; }
    }
}
