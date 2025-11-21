using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class Token
    {
        [Key]
        public int TokenId { get; set; }
        [Required]
        public int PatientId { get; set; }

        [ForeignKey(nameof(PatientId))]
        public Patient Patient { get; set; }
        public int TokenNumber { get; set; }
        public string ModeOfToken { get; set; }
        public bool IsActive { get; set; }
        public bool IsBooked { get; set; }

        public int AppointmentId { get; set; }
        [ForeignKey(nameof(AppointmentId))]
        public Appointment Appointment { get; set; }
    }
}
