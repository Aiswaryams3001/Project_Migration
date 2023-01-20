using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project_Migration.Data;
using Project_Migration.Models;

namespace Project_Migration.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PoliceController : ControllerBase
    {
        public DataContextClass Police { get; set; }
        public PoliceController(DataContextClass contextclass)
        {
            this.Police = contextclass;
        }
        [HttpPost("LoginPolice")]
        public IActionResult LoginPolice(Login user)
        {
            var userAvailable = Police.tblPolice.Where(u => u.Username == user.UserName && u.Password == user.Password).FirstOrDefault();
            if (userAvailable == null)
            {
                return Ok("Failure");
            }
            return Ok("Success");
        }
    }
}
