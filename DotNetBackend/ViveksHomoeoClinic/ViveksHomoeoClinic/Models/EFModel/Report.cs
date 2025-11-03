using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class Report
    {
        [Key]
        public int ReportId { get; set; }
        [Required]
        public int InvestigationId { get; set; }

        [ForeignKey(nameof(InvestigationId))]
        public Investigation Investigation { get; set; }
        public string Attachment { get; set; }
    }
}
