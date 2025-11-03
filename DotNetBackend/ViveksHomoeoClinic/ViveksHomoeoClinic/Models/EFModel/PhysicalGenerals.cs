using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class PhysicalGenerals
    {
        [Key]
        public int PhysicalGeneralsId { get; set; }
        [Required]
        public int CaseId { get; set; }

        [ForeignKey(nameof(CaseId))]
        public CaseHistory Case { get; set; }
        public string Appetite { get; set; }
        public string Thirst { get; set; }
        public string Sleep { get; set; }
        public string Stool { get; set; }
        public string Urine { get; set; }
        public string Sweat { get; set; }
    }
}
