using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class Prescription
    {
        [Key]
        public int PrescriptionId { get; set; }
        [Required]
        public int PatientId { get; set; }

        [ForeignKey(nameof(PatientId))]
        public Patient Patient { get; set; }
        [Required]
        public string Description { get; set; }
        public DateOnly PrescriptionDate { get; set; }
    }
}
