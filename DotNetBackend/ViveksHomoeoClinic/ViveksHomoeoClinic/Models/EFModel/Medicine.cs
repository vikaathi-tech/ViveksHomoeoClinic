using System.ComponentModel.DataAnnotations;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class Medicine
    {
        [Key]
        public int MedicineId { get; set; }
        [Required]
        public string MedicineName { get; set; }
        public int Potency { get; set; }
        public double price { get; set; }
        public DateOnly PurchaseDate { get; set; }
    }
}
