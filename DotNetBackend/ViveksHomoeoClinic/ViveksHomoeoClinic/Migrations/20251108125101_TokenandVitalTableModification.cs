using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ViveksHomoeoClinic.Migrations
{
    /// <inheritdoc />
    public partial class TokenandVitalTableModification : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BP",
                table: "Vitals",
                newName: "BP_Sys");

            migrationBuilder.AddColumn<string>(
                name: "BP_Dia",
                table: "Vitals",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<double>(
                name: "Weight",
                table: "Vitals",
                type: "double",
                nullable: false,
                defaultValue: 0.0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BP_Dia",
                table: "Vitals");

            migrationBuilder.DropColumn(
                name: "Weight",
                table: "Vitals");

            migrationBuilder.RenameColumn(
                name: "BP_Sys",
                table: "Vitals",
                newName: "BP");
        }
    }
}
