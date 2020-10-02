using basic_CRUD_api.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using NUnit.Framework;

namespace basic_CRUD_api_tests.ControllerTests
{
    class HomeControllerTests
    {
        private HomeController _homeController;
        [SetUp]
        public void Setup()
        {
            var mockService = new Mock<ILogger<HomeController>>();
            _homeController = new HomeController(mockService.Object);
        }

        [Test]
        public void Test_Method_Get()
        {
            var result = _homeController.Get();
            Assert.AreEqual(typeof(OkObjectResult), result.GetType());
            Assert.AreEqual("{ status = Running }", (result as OkObjectResult).Value.ToString());
        }
    }
}
