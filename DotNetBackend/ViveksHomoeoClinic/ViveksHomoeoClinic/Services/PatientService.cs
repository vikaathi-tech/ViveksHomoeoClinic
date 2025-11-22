using ViveksHomoeoClinic.Models.DTO;
using ViveksHomoeoClinic.Repositories.Interfaces;
using ViveksHomoeoClinic.Services.Interfaces;

namespace ViveksHomoeoClinic.Services
{
    public class PatientService : IPatientService
    {
        private readonly IPatientRepo _patientRepo;
        public PatientService(IPatientRepo patientRepo) {
            _patientRepo = patientRepo;
        }
        public async Task<List<PatientDTO>> GetAllPatients()
        {
            return await _patientRepo.GetAllPatients();
        }

        public async bool AddPatient()
        {
            return await _patientRepo.AddPatient();
        }
    }
}
