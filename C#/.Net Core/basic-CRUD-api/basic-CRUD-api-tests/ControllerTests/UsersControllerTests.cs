using basic_CRUD_api.Controllers;
using basic_CRUD_api.Models;
using basic_CRUD_api.Services.Interfaces;
using basic_CRUD_api_tests.Helpers;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Newtonsoft.Json;
using NUnit.Framework;
using System;
using System.Collections.Generic;

namespace basic_CRUD_api_tests.ControllerTests
{
    class UsersControllerTests
    {
        private UsersController _usersController;
        private Mock<IUserService> _userServiceMock;
        [SetUp]
        public void Setup()
        {
            _userServiceMock = new Mock<IUserService>();
            _usersController = new UsersController(_userServiceMock.Object);
        }

        [Test]
        public void Test_Method_Get()
        {
            _userServiceMock.Setup(e => e.GetAll()).Returns(UsersDataHelper.GetAll());
            var result = _usersController.Get();
            Assert.AreEqual(typeof(OkObjectResult), result.GetType());
            var res = (result as OkObjectResult).Value as List<User>;
            Assert.AreEqual(2, res.Count);
            Assert.AreEqual(JsonConvert.SerializeObject(UsersDataHelper.GetUser(1)), JsonConvert.SerializeObject(res[0]));
        }

        [Test]
        public void Test_Method_Post()
        {
            _userServiceMock.Setup(e => e.AddUser(It.IsAny<User>())).Returns(3);
            var result = _usersController.Post(new User() { Id = 3 });
            Assert.AreEqual(typeof(CreatedResult), result.GetType());
            Assert.AreEqual(3, (result as CreatedResult).Value);
        }

        [Test]
        public void Test_Method_GetById_Success()
        {
            _userServiceMock.Setup(e => e.GetById(It.IsAny<int>())).Returns(UsersDataHelper.GetUser(1));
            var result = _usersController.GetById(1);
            Assert.AreEqual(typeof(OkObjectResult), result.GetType());
            Assert.AreEqual(JsonConvert.SerializeObject(UsersDataHelper.GetUser(1)), JsonConvert.SerializeObject((result as OkObjectResult).Value));
        }

        [Test]
        public void Test_Method_GetById_NotFound()
        {
            _userServiceMock.Setup(e => e.GetById(It.IsAny<int>())).Returns<User>(null);
            var result = _usersController.GetById(1);
            Assert.AreEqual(typeof(NotFoundResult), result.GetType());
        }

        [TestCase(3, typeof(OkObjectResult))]
        [TestCase(0, typeof(NotFoundResult))]
        public void Test_Method_Update(int returnVal, Type expectedType)
        {
            _userServiceMock.Setup(e => e.Update(It.IsAny<int>(), It.IsAny<User>())).Returns(returnVal);
            var result = _usersController.Update(3, new User() { });
            Assert.AreEqual(expectedType, result.GetType());
        }

        [Test]
        public void Test_Method_DeleteById()
        {
            var result = _usersController.DeleteById(1);
            Assert.AreEqual(typeof(OkResult), result.GetType());
        }

        [TestCase(1, "TestUsername1")]
        [TestCase(2, "TestUsername2")]
        public void Test_Method_Search(int id, string expectedUserName)
        {
            _userServiceMock.Setup(e => e.SearchByUsername(It.IsAny<string>())).Returns(new List<User> { UsersDataHelper.GetUser(id) });
            var result = _usersController.Search("");
            Assert.AreEqual(typeof(OkObjectResult), result.GetType());
            var res = (result as OkObjectResult).Value as List<User>;
            Assert.AreEqual(expectedUserName, res[0].Username);
        }
    }
}
