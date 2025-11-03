using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class Appointment
    {
        [Key]
        public int AppointmentId { get; set; }
        [Required]
        public int DoctorId { get; set; }
        [Required]
        public int PatientId { get; set; }

        [ForeignKey(nameof(DoctorId))]
        public Staff Doctor { get; set; }

        [ForeignKey(nameof(PatientId))]
        public Patient Patient { get; set; }
        public DateTime AppointmentTime { get; set; }
        public bool IsClosed { get; set; }
    }
}
