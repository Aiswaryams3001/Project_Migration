using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_Migration.Migrations
{
    public partial class MySecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AdminDate",
                table: "tblapplications",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PoliceDate",
                table: "tblapplications",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AdminDate",
                table: "tblapplications");

            migrationBuilder.DropColumn(
                name: "PoliceDate",
                table: "tblapplications");
        }
    }
}
