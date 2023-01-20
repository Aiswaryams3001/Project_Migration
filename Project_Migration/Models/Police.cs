using System.ComponentModel.DataAnnotations;

namespace Project_Migration.Models
{
    public class Police
    {
        [Key]
        public int Policeid { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; }= string.Empty;

    }
}
