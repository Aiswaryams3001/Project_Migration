using System.ComponentModel.DataAnnotations;

namespace Project_Migration.Models
{
    public class Contact
    {
        [Key]
        public int Contactid { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; }= string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string Message { get; set; } = string.Empty;
    }
}
