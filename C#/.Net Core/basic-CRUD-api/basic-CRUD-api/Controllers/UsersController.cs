using basic_CRUD_api.Models;
using basic_CRUD_api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
namespace basic_CRUD_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_userService.GetAll());
        }

        [HttpPost]
        public IActionResult Post(User user)
        {
            return Created("", _userService.AddUser(user));
        }

        [HttpGet("{userId}")]
        public IActionResult GetById(int userId)
        {
            var res = _userService.GetById(userId);
            if (res == null)
                return NotFound();
            return Ok(res);
        }

        [HttpPut("{userId}")]
        public IActionResult Update(int userId, User user)
        {
            var res = _userService.Update(userId, user);
            if (res == 0)
                return NotFound();
            return Ok(res);
        }

        [HttpDelete("{userId}")]
        public IActionResult DeleteById(int userId)
        {
            _userService.DeleteById(userId);
            return Ok();
        }

        [HttpGet("search")]
        public IActionResult Search([FromQuery] string username)
        {
            return Ok(_userService.SearchByUsername(username));
        }
    }
}
