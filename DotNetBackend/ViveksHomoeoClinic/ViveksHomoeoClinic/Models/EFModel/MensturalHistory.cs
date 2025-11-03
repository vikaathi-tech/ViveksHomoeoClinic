using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class MensturalHistory
    {
        [Key]
        public int MensturalHistoryId { get; set; }
        [Required]
        public int CaseId { get; set; }

        [ForeignKey(nameof(CaseId))]
        public CaseHistory Case { get; set; }
        public string LMP { get; set; }
        public string Duration { get; set; }
        public string Flow { get; set; }
        public string Clots { get; set; }
        public string Cycle { get; set; }
        public string Others { get; set; }
    }
}
