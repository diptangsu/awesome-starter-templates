using basic_CRUD_api.Models;
using basic_CRUD_api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace basic_CRUD_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController
    {
        private readonly IUserService _userService;
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _userService.GetAll();
        }

        [HttpPost]
        public IActionResult Post(User user)
        {
            return new CreatedResult("", _userService.AddUser(user));
        }

        [HttpGet("{userId}")]
        public IActionResult GetById(int userId)
        {
            var res = _userService.GetById(userId);
            if (res == null)
                return new NotFoundResult();
            return new OkObjectResult(res);
        }

        [HttpPut("{userId}")]
        public IActionResult Update(int userId, User user)
        {
            var res = _userService.Update(userId, user);
            if (res == 0)
                return new NotFoundResult();
            return new OkObjectResult(res);
        }

        [HttpDelete("{userId}")]
        public IActionResult DeleteById(int userId)
        {
            _userService.DeleteById(userId);
            return new OkResult();
        }

        [HttpGet("search")]
        public IActionResult GetById([FromQuery] string username)
        {
            return new OkObjectResult(_userService.SearchByUsername(username));
        }
    }
}
