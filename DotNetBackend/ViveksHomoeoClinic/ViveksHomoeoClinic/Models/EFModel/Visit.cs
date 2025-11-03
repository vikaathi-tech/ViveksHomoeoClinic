using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class Visit
    {
        [Key]
        public int VisitId { get; set; }
        [Required]
        public int PatientId { get; set; }

        [ForeignKey(nameof(PatientId))]
        public Patient Patient { get; set; }
        public DateTime DateOfVisit { get; set; }
    }
}
