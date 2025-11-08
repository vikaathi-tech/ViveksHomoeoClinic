using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using System;
using ViveksHomoeoClinic.Models.EFModel;

namespace ViveksHomoeoClinic.Data
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options)
            : base(options)
        {
        }

        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<Billing> Billings { get; set; }
        public DbSet<CaseHistory> CaseHistories { get; set; }
        public DbSet<Designation> Designations { get; set; }
        public DbSet<Diagnosis> Diagnosis { get; set; }
        public DbSet<FollowUp> FollowUps { get; set; }
        public DbSet<Gender> Gender { get; set; }
        public DbSet<Investigation> Investigations { get; set; }
        public DbSet<Login> Login { get; set; }
        public DbSet<MaritalStatus> MaritalStatus { get; set; }
        public DbSet<Medicine> Medicines { get; set; }
        public DbSet<MedicineBilling> MedicineBillings { get; set; }
        public DbSet<MensturalHistory> MensturalHistories { get; set; }
        public DbSet<MentalGenerals> MentalGenerals { get; set; }
        public DbSet<ObstetricalHistory> ObstetricalHistories { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<PhysicalExamination> PhysicalExaminations { get; set; }
        public DbSet<PhysicalGenerals> PhysicalGenerals { get; set; }
        public DbSet<Prescription> Prescriptions { get; set; }
        public DbSet<Report> Reports { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Specialization> Specializations { get; set; }
        public DbSet<Staff> Staff { get; set; }
        public DbSet<Stock> Stocks { get; set; }
        public DbSet<Visit> Visits { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Appointment>()
                .HasOne(a => a.Doctor)
                .WithMany()
                .HasForeignKey(a => a.DoctorId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Appointment>()
                .HasOne(a => a.Patient)
                .WithMany()
                .HasForeignKey(a => a.PatientId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Billing>()
                .HasOne(a => a.Patient)
                .WithMany()
                .HasForeignKey(a => a.PatientId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Designation>();

            modelBuilder.Entity<CaseHistory>()
               .HasOne(a => a.Patient)
               .WithOne()
               .HasForeignKey<CaseHistory>(a => a.PatientId)
               .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Diagnosis>()
               .HasOne(a => a.Patient)
               .WithMany()
               .HasForeignKey(a => a.PatientId)
               .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<FollowUp>()
               .HasOne(a => a.Prescription)
               .WithOne()
               .HasForeignKey<FollowUp>(a => a.PrescriptionId)
               .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Gender>();

            modelBuilder.Entity<Investigation>()
              .HasOne(a => a.Patient)
              .WithOne()
              .HasForeignKey<Investigation>(a => a.PatientId)
              .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Login>();

            modelBuilder.Entity<RoleMapping>()
             .HasOne(a => a.Login)
             .WithMany()
             .HasForeignKey(a => a.LoginId)
             .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<RoleMapping>()
            .HasOne(a => a.Role)
            .WithMany()
            .HasForeignKey(a => a.RoleId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<MaritalStatus>();

            modelBuilder.Entity<Medicine>();

            modelBuilder.Entity<MensturalHistory>()
              .HasOne(a => a.Case)
              .WithOne()
              .HasForeignKey<MensturalHistory>(a => a.CaseId)
              .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<MentalGenerals>()
             .HasOne(a => a.Case)
             .WithOne()
             .HasForeignKey<MentalGenerals>(a => a.CaseId)
             .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<ObstetricalHistory>()
             .HasOne(a => a.Case)
             .WithOne()
             .HasForeignKey<ObstetricalHistory>(a => a.CaseId)
             .OnDelete(DeleteBehavior.Restrict);


            modelBuilder.Entity<Patient>()
             .HasOne(a => a.MaritalStatus)
             .WithOne()
             .HasForeignKey<Patient>(a => a.MaritalStatusId)
             .OnDelete(DeleteBehavior.Restrict);


            modelBuilder.Entity<PhysicalExamination>()
            .HasOne(a => a.Patient)
            .WithMany()
            .HasForeignKey(a => a.PatientId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<PhysicalGenerals>()
             .HasOne(a => a.Case)
             .WithOne()
             .HasForeignKey<PhysicalGenerals>(a => a.CaseId)
             .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Prescription>()
            .HasOne(a => a.Patient)
            .WithMany()
            .HasForeignKey(a => a.PatientId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Report>()
           .HasOne(a => a.Investigation)
           .WithMany()
           .HasForeignKey(a => a.InvestigationId)
           .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Role>();

            modelBuilder.Entity<Specialization>();

            modelBuilder.Entity<Staff>()
            .HasOne(a => a.Gender)
            .WithMany()
            .HasForeignKey(a => a.GenderId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Staff>()
            .HasOne(a => a.Gender)
            .WithMany()
            .HasForeignKey(a => a.GenderId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Staff>()
            .HasOne(a => a.MaritalStatus)
            .WithMany()
            .HasForeignKey(a => a.MaritalStatusId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Staff>()
            .HasOne(a => a.Designation)
            .WithMany()
            .HasForeignKey(a => a.DesignationId)
            .OnDelete(DeleteBehavior.Restrict);


            modelBuilder.Entity<Staff>()
            .HasOne(a => a.Specialization)
            .WithMany()
            .HasForeignKey(a => a.SpecializationId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Visit>()
            .HasOne(a => a.Patient)
            .WithMany()
            .HasForeignKey(a => a.PatientId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Token>()
            .HasOne(a => a.Patient)
            .WithOne()
            .HasForeignKey<Token>(a => a.PatientId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Vitals>()
            .HasOne(a => a.Patient)
            .WithOne()
            .HasForeignKey<Vitals>(a => a.PatientId)
            .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
