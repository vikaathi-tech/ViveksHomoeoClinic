using System.ComponentModel.DataAnnotations;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class Specialization
    {
        [Key]
        public int SpecializationId {  get; set; }
        [Required]
        public string SpecializationName { get; set; }
    }
}
