using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ViveksHomoeoClinic.Migrations
{
    /// <inheritdoc />
    public partial class TokenTableModification_1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Token_Patients_PatientId",
                table: "Token");

            migrationBuilder.DropIndex(
                name: "IX_Token_PatientId",
                table: "Token");

            migrationBuilder.AddColumn<int>(
                name: "AppointmentId",
                table: "Token",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "IsBooked",
                table: "Token",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateIndex(
                name: "IX_Token_AppointmentId",
                table: "Token",
                column: "AppointmentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Token_Appointments_AppointmentId",
                table: "Token",
                column: "AppointmentId",
                principalTable: "Appointments",
                principalColumn: "AppointmentId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Token_Patients_AppointmentId",
                table: "Token",
                column: "AppointmentId",
                principalTable: "Patients",
                principalColumn: "PatientId",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Token_Appointments_AppointmentId",
                table: "Token");

            migrationBuilder.DropForeignKey(
                name: "FK_Token_Patients_AppointmentId",
                table: "Token");

            migrationBuilder.DropIndex(
                name: "IX_Token_AppointmentId",
                table: "Token");

            migrationBuilder.DropColumn(
                name: "AppointmentId",
                table: "Token");

            migrationBuilder.DropColumn(
                name: "IsBooked",
                table: "Token");

            migrationBuilder.CreateIndex(
                name: "IX_Token_PatientId",
                table: "Token",
                column: "PatientId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Token_Patients_PatientId",
                table: "Token",
                column: "PatientId",
                principalTable: "Patients",
                principalColumn: "PatientId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
