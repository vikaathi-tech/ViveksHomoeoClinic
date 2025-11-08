using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ViveksHomoeoClinic.Models.EFModel;

namespace ViveksHomoeoClinic.Models.DTO
{
    public class PatientDTO
    {
        public int PatientId { get; set; }
        [Required]
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [Required]
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public int PinCode { get; set; }
        [Required]
        public DateOnly DOB { get; set; }
        [Required]
        public int GenderId { get; set; }
        public string GenderName { get; set; }
        [Required]
        public string PrimaryContactNo { get; set; }
        public string SecondaryContactNumber { get; set; }
        public int MaritalStatusId { get; set; }
        public string MaritalStatus { get; set; }
        public string AttenderName { get; set; }
        public string AttenderRelationship { get; set; }
    }
}
