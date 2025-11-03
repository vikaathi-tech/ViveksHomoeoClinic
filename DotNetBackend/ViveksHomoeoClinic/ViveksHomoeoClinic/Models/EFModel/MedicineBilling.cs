using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class MedicineBilling
    {
        [Key]
        public int MedicineBillingId { get; set; }
        [Required]
        public int BillingId { get; set; }

        [ForeignKey(nameof(BillingId))]
        public Billing Billing { get; set; }
        [Required]
        public int MedicineId { get; set; }

        [ForeignKey(nameof(MedicineId))]
        public Medicine Medicine { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
    }
}
