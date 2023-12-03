using API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
    }
}
