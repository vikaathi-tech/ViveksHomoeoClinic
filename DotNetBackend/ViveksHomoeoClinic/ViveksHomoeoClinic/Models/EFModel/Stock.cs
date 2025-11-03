using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class Stock
    {
        [Key]
        public int StockId { get; set; }
        [Required]
        public int MedicineId { get; set; }

        [ForeignKey(nameof(MedicineId))]
        public Medicine Medicine { get; set; }
        public int Quantity { get; set; }
    }
}
