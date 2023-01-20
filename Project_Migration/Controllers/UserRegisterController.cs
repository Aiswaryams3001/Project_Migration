using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project_Migration.Models;
using Project_Migration.Data;

namespace Project_Migration.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRegisterController : ControllerBase
    {
        public DataContextClass UserRegister { get; set; }
        public UserRegisterController(DataContextClass contextclass)
        {
            this.UserRegister = contextclass;

        }
        [HttpPost("InsertRegister")]

        public async Task<ActionResult> InsertRegister(UserRegister cu)
        {

            UserRegister.tblRegister.Add(cu);
            await UserRegister.SaveChangesAsync();
            return Ok(cu);
        }
        [HttpPost("LoginUser")]
        public IActionResult Login(Login user)
        {

            var userAvailable = UserRegister.tblRegister.Where(u => u.UserName == user.UserName && u.Password == user.Password).FirstOrDefault();

            System.Console.WriteLine(userAvailable);
            if (userAvailable == null)
            {
                return Ok("Failure");
            }
            
            return Ok("Success");
        }
        
        [HttpGet("CheckUser/{phone}")]
        public async Task<IActionResult> CheckUser(string phone)
        {
            var userAvailable = UserRegister.tblRegister.Where(u => u.Phone.Equals(phone)).ToList();
            return Ok(userAvailable);
        }
        [HttpGet("GetPhone/{name}")]
        public async Task<IActionResult> GetPhone(string name)
        {
            var userAvailable = UserRegister.tblRegister.Where(u => u.UserName.Equals(name)).ToList();
            return Ok(userAvailable);
        }
    }
}
