using System.ComponentModel.DataAnnotations;

namespace Project_Migration.Models
{
    public class Application
    {
        [Key]
        public int ApplicationId { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Gender { get; set; } = string.Empty;
        public string Date { get; set; } = string.Empty;
        public string Address1 { get; set; } = string.Empty;
        public string Address2 { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string District { get; set; } = string.Empty;
        public string State { get; set; } = string.Empty;
        public string Pincode { get; set; } = string.Empty;
        public string Place_to_Migrate { get; set; } = string.Empty;
        public string Purpose_to_Migrate { get; set; } = string.Empty;
        public string AadharNumber { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public string Remarks { get; set; } = string.Empty;
        public string FromDate { get; set; } = string.Empty;
        public string AdminDate { get; set; } = string.Empty;
        public string PoliceDate { get; set; }= string.Empty;

    }
}
