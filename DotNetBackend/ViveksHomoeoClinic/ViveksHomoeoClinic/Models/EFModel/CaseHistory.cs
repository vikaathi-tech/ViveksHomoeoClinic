using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class CaseHistory
    {
        [Key]
        public int CaseId { get; set; }
        public int PatientId { get; set; }
        [ForeignKey(nameof(PatientId))]
        public Patient Patient { get; set; }
        public string PresentingComplaints { get; set; }
        public string PastHistory { get; set; }
        public string FamilyHistory { get; set; }
        public string OccupationalHistory { get; set; }
        public string Modalities { get; set; }
        public string Desires { get; set; }
        public string Aversions { get; set; }
        public string Thermal { get; set; }
        public string Others { get; set; }
    }
}
