using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class PhysicalExamination
    {
        [Key]
        public int PhysicalExaminationId { get; set; }
        [Required]
        public int PatientId { get; set; }

        [ForeignKey(nameof(PatientId))]
        public Patient Patient { get; set; }
        public string Appearance { get; set; }
        public int Pulse { get; set; }
        public string BP { get; set; }
        public double Temperature { get; set; }
        public string Chest { get; set; }
        public string RespiratoryNote { get; set; }
        public string SystemicExamination { get; set; }
    }
}
