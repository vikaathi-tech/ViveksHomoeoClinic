using System;

namespace ViveksHomoeoClinic.Extensions
{
    public class ServiceExtensions
    {
        public static void AddApplicationServices(this IServiceCollection services)
        {
            // Register your services here
            services.AddScoped<IPatientService, PatientService>();
            services.AddScoped<IOrderService, OrderService>();
        }

        public static void AddDatabaseConfiguration(this IServiceCollection services, IConfiguration config)
        {
            var connectionString = config.GetConnectionString("DefaultConnection");
            services.AddDbContext<AppDbContext>(options =>
                options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));
        }
    }
}
