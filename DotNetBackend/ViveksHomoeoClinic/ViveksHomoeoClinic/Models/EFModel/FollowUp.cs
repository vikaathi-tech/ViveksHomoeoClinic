using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class FollowUp
    {
        [Key]
        public int FollowUpId { get; set; }
        [Required]
        public int PrescriptionId { get; set; }

        [ForeignKey(nameof(PrescriptionId))]
        public Prescription Prescription { get; set; }
        public string Description { get; set; }
        public DateOnly FollowUpDate { get; set; }
    }
}
