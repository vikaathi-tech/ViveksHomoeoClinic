using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class MentalGenerals
    {
        [Key]
        public int MentalGeneralsId { get; set; }
        [Required]
        public int CaseId { get; set; }

        [ForeignKey(nameof(CaseId))]
        public CaseHistory Case { get; set; }
        [Required]
        public string Description { get; set; }
    }
}
