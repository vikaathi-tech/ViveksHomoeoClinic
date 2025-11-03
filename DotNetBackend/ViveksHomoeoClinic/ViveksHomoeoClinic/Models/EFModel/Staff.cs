using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViveksHomoeoClinic.Models.EFModel
{
    public class Staff
    {
        [Key]
        public int StaffId {  get; set; }
        [Required]
        public string FirstName  { get; set;}
        public string LastName { get; set;}
        [Required]
        public string AddressLine1 { get; set;}
        public string AddressLine2 { get; set;}
        public int PinCode { get; set;}
        [Required]
        public DateOnly DOB { get; set;}
        [Required]
        public int GenderId { get; set;}

        [ForeignKey(nameof(GenderId))]
        public Gender Gender { get; set;}
        [Required]
        public string PrimaryContactNo { get; set;}
        public string SecondaryContactNumber { get; set;}
        public int MaritalStatusId { get; set;}

        [ForeignKey(nameof(MaritalStatusId))]
        public MaritalStatus MaritalStatus { get; set;}
        [Required]
        public string EducationQualification { get; set;}
        [Required]
        public int PassOutYear { get; set;}
        [Required]
        public string CertificateNo { get; set;}
        [Required]
        public int YearOfExperience { get; set;}
        public int DesignationId { get; set; }

        [ForeignKey(nameof(DesignationId))]
        public Designation Designation { get; set; }
        public int SpecializationId { get; set; }

        [ForeignKey(nameof(SpecializationId))]
        public Specialization Specialization { get; set; }


    }
}
