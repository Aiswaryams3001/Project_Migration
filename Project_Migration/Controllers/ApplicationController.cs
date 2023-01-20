using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project_Migration.Data;
using Project_Migration.Models;

namespace Project_Migration.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationController : ControllerBase
    {
        public DataContextClass Application { get; set; }
        public ApplicationController(DataContextClass contextclass)
        {
            this.Application = contextclass;

        }
        [HttpPost("InsertApplications")]

        public async Task<ActionResult> InsertUser(Application cu)
        {

            Application.tblapplications.Add(cu);
            await Application.SaveChangesAsync();
            return Ok(cu);
        }


        [HttpGet("viewapplications")]

        public async Task<List<Application>> ViewApplication()

        {

            return Application.tblapplications.ToList();

        }

        [HttpGet("ViewApplicationById/{id}")]
        public async Task<ActionResult<Application>> ViewApplicationById(int id)
        {

            var appl = Application.tblapplications.Find(id);
            if (appl == null)
            {
                return NotFound();
            }
            return appl;
        }

        [HttpPost("UpdateApplication")]
        public IActionResult UpdateApplication(Application cu)
        {

            Application.tblapplications.Update(cu);
            Application.SaveChanges();
            return Ok(cu);
        }

        [HttpGet("ViewApplicationByPolice")]
        public async Task<IActionResult> ViewApplicationByPolice()
        {
            var appl = Application.tblapplications.Where(c => c.Status == "Application Send to Police for verification").ToList();
            return Ok(appl);
        }

        [HttpGet("Userviewapplications/{phone}")]
        public async Task<IActionResult> ViewApplicationByUser(string phone)
        {
            var details = Application.tblapplications.Where(c => c.Phone.Equals(phone)).ToList();
            return Ok(details);
        }
        [HttpGet("Policeviewapplications/{district}/{status}")]
        public async Task<IActionResult> ViewApplicationByPolice(string district,string status)
        {
            var details = Application.tblapplications.Where(c => c.District.Equals(district) && c.Status.Equals(status)).ToList();
            return Ok(details);
        }
        [HttpGet("viewapplicationsbystatus/{status}")]
        public async Task<IActionResult> ViewApplicationBystatus(string status)
        {
            var details = Application.tblapplications.Where(c => c.Status.Equals(status)).ToList();
            return Ok(details);
        }
    }
}