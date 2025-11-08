using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class Vitals
    {
        [Key]
        public int VitalsId { get; set; }
        [Required]
        public int PatientId { get; set; }

        [ForeignKey(nameof(PatientId))]
        public Patient Patient { get; set; }
        public int Pulse { get; set; }
        public string BP_Dia { get; set; }
        public string BP_Sys { get; set; }
        public double Temperature { get; set; }
        public double Sugar { get; set; }
        public double Weight { get; set; }
    }
}
