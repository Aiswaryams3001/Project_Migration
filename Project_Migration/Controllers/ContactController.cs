using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using Project_Migration.Data;
using Project_Migration.Models;


namespace Project_Migration.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        public DataContextClass Contact { get; set; }
        public ContactController(DataContextClass contextclass)
        {
            this.Contact = contextclass;
        }
        [HttpPost("InsertQuery")]
        public async Task<ActionResult> InsertQuery(Contact cu)
        {
            Contact.tblContacts.Add(cu);
            await Contact.SaveChangesAsync();
            return Ok(cu);
        }
        [HttpGet("viewquery")]
        public async Task<List<Contact>> ViewQuery()
        {
            return Contact.tblContacts.ToList();
        }
    }
}
