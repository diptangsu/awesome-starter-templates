using basic_CRUD_api;
using basic_CRUD_api.Database;
using basic_CRUD_api.Models;
using basic_CRUD_api.Services.Implementations;
using basic_CRUD_api.Services.Interfaces;
using basic_CRUD_api_tests.Helpers;
using basic_CRUD_api_tests.TestBase;
using Microsoft.EntityFrameworkCore;
using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace basic_CRUD_api_tests.ServiceTests
{
    class UserServiceTests : DbContextTestBase
    {
        private IUserService _userService;
        private ApplicationDbContext context;

        [SetUp]
        public void Setup()
        {
            context = CreateInMemoryContext();
            SeedData();
            _userService = new UserService(context);
        }

        private void SeedData()
        {
            context.Users.AddRange(UsersDataHelper.GetAll());
            SaveAndDetachContext(context);
        }

        [Test]
        public void Test_Method_AddUser()
        {
            var res = _userService.AddUser(new User()
            {
                Age = 10,
                Name = "Add",
                Username = "AddUsername"
            });
            Assert.AreEqual(3, res);
        }

        [Test]
        public void Test_Method_AddUser_Exception()
        {
            void res() => _userService.AddUser(new User()
            {
                Age = 10,
                Name = "Test1",
                Username = "TestUsername1"
            });
            Assert.Throws<Exception>(res);
        }

        [Test]
        public void Test_Method_DeleteById()
        {
            void res() => _userService.DeleteById(3);
            Assert.DoesNotThrow(res);
        }

        [Test]
        public void Test_Method_GetAll()
        {
            var res = _userService.GetAll();
            Assert.IsTrue(JsonSerializeAndCompare(UsersDataHelper.GetAll(), res.ToList()));
        }

        [Test]
        public void Test_Method_GetById()
        {
            var res = _userService.GetById(1);
            Assert.IsTrue(JsonSerializeAndCompare(UsersDataHelper.GetUser(1), res));
        }

        [Test]
        public void Test_Method_SearchByUsername()
        {
            var res = _userService.SearchByUsername("TestUsername");
            Assert.IsTrue(JsonSerializeAndCompare(UsersDataHelper.GetAll(), res.ToList()));
        }

        [Test]
        public void Test_Method_Update()
        {
            var res = _userService.Update(1, new User()
            {
                Age = 35,
                Name = "UpdatedName",
                Username = "UpdatedUsername",
            });
            Assert.AreEqual(1, res);
        }
    }
}
