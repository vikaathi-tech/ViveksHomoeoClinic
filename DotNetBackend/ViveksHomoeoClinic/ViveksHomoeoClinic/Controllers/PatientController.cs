using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ViveksHomoeoClinic.Models.DTO;
using ViveksHomoeoClinic.Services.Interfaces;

namespace ViveksHomoeoClinic.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[Authorize]
    public class PatientController : ControllerBase
    {
        private readonly IPatientService _patientService;
        public PatientController(IPatientService patientService)
        {
            _patientService = patientService;
        }

        [Route("GetAll")]
        [HttpGet]
        public async Task<List<PatientDTO>> GetAllPatients()
        {
            return await _patientService.GetAllPatients();
        }
    }
}
