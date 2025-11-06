using Microsoft.EntityFrameworkCore;
using System;
using ViveksHomoeoClinic.Data;
using ViveksHomoeoClinic.Repositories;
using ViveksHomoeoClinic.Repositories.Interfaces;
using ViveksHomoeoClinic.Services;
using ViveksHomoeoClinic.Services.Interfaces;

namespace ViveksHomoeoClinic.Extensions
{
    public static class ServiceExtensions
    {
        public static void AddApplicationServices(this IServiceCollection services)
        {
            // Register your services here
            services.AddScoped<IPatientService, PatientService>();
            services.AddScoped<IPatientRepo, PatientRepo>();
        }

        public static void AddDatabaseConfiguration(this IServiceCollection services, IConfiguration config)
        {
            var connectionString = config.GetConnectionString("MySQLConnection");
            services.AddDbContext<AppDBContext>(options =>
                options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));
        }
    }
}
