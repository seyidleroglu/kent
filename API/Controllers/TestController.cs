using API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public TestController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public Task<IActionResult> UsersList()
        {
            var list = _appDbContext.Users.ToList();
            return Task.FromResult<IActionResult>(Ok(list));
        }
        [HttpPost("Add")]
        public IActionResult Post(Models.User m)
        {
            _appDbContext.Users.Add(m);
            try
            {
                _appDbContext.SaveChanges();
                return Ok(new { message = "Kayıt Edildi." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Hata Oldu." });
            }
           
        }
        [HttpPost("Update")]
        public IActionResult PostUpdate(Models.User m)
        {

            var r = _appDbContext.Users.Find(m.Id);
            r.FirstName=m.FirstName;
            r.LastName = m.LastName;
            try
            {
                _appDbContext.SaveChanges();
                return Ok(new { message = "Güncellendi Edildi." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Hata Oldu." });
            }

        }

        [HttpDelete("{id}")]
        public IActionResult PostUpdate(int id)
        {

            var r = _appDbContext.Users.Find(id);
            _appDbContext.Remove(r);

            try
            {
                _appDbContext.SaveChanges();
                return Ok(new { message = "Güncellendi Edildi." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Hata Oldu." });
            }

        }
    }
}
