using ViveksHomoeoClinic.Models.DTO;

namespace ViveksHomoeoClinic.Repositories.Interfaces
{
    public interface IPatientRepo
    {
        public Task<List<PatientDTO>> GetAllPatients();
        public bool AddPatient();
    }
}
