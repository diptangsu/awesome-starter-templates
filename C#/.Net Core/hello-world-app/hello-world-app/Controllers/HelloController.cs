using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace hello_world_app.Controllers
{
    [Route("hello")]
    [Route("hello/Index")]
    public class HelloController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
