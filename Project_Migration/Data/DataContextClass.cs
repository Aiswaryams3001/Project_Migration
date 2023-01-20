using Microsoft.EntityFrameworkCore;
using Project_Migration.Models;

namespace Project_Migration.Data
{
    public class DataContextClass: DbContext
    {
        public DataContextClass(DbContextOptions<DataContextClass> options) : base(options)
        {

        }
        public DbSet<UserRegister> tblRegister { get; set; }
        public DbSet<Application> tblapplications { get; set; }
        public DbSet<Contact> tblContacts { get; set; }
        public DbSet<Police> tblPolice { get; set; }
    }

}
