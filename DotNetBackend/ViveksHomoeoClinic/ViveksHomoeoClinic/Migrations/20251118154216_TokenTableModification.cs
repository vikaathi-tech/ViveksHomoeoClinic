using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ViveksHomoeoClinic.Migrations
{
    /// <inheritdoc />
    public partial class TokenTableModification : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Token",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "RefreshToken",
                table: "Login",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Token");

            migrationBuilder.DropColumn(
                name: "RefreshToken",
                table: "Login");
        }
    }
}
