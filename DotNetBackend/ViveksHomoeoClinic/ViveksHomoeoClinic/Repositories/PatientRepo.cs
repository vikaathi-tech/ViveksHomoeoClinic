using Microsoft.EntityFrameworkCore;
using ViveksHomoeoClinic.Data;
using ViveksHomoeoClinic.Models.DTO;
using ViveksHomoeoClinic.Repositories.Interfaces;

namespace ViveksHomoeoClinic.Repositories
{
    public class PatientRepo : IPatientRepo
    {
        private readonly AppDBContext _dbContext;
        public PatientRepo(AppDBContext dBContext)
        {
            _dbContext = dBContext;
        }

        public async Task<List<PatientDTO>> GetAllPatients()
        {

            try
            {
                var patientList = _dbContext.Patients.Select(g => new PatientDTO
                {
                    PatientId = g.PatientId,
                    FirstName = g.FirstName,
                    LastName = g.LastName,
                    AddressLine1 = g.AddressLine1,
                    AddressLine2 = g.AddressLine2,
                    PinCode = g.PinCode,
                    DOB = g.DOB,
                    GenderId = g.GenderId,
                    GenderName = g.Gender.Sex,
                    PrimaryContactNo = g.PrimaryContactNo,
                    SecondaryContactNumber = g.SecondaryContactNumber,
                    MaritalStatusId = g.MaritalStatusId,
                    MaritalStatus = g.MaritalStatus.Status,
                    AttenderName = g.AttenderName,
                    AttenderRelationship = g.AttenderRelationship
                });
                return await patientList.ToListAsync();

            }

            catch (Exception ex)
            {
                return null;
            }
            

        }
    }
}
