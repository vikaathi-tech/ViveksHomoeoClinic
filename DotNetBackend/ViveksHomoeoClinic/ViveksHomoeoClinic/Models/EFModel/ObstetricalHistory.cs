using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class ObstetricalHistory
    {
        [Key]
        public int ObstetricalHistoryId { get; set; }
        [Required]
        public int CaseId { get; set; }

        [ForeignKey(nameof(CaseId))]
        public CaseHistory Case { get; set; }
        [Required]
        public string Description { get; set; }
    }
}
