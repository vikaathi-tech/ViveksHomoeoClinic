using ViveksHomoeoClinic.Models.DTO;

namespace ViveksHomoeoClinic.Services.Interfaces
{
    public interface IPatientService
    {
        public Task<List<PatientDTO>> GetAllPatients();
        public bool AddPatient();
    }
}
