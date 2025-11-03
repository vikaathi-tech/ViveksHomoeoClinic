using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class Billing
    {
        [Key]
        public int BillingId { get; set; }
        [Required]
        public int PatientId { get; set; }
        [ForeignKey(nameof(PatientId))]
        public Patient Patient { get; set; }

    }
}
