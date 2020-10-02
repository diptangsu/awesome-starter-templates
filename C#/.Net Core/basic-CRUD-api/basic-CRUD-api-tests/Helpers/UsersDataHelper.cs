using basic_CRUD_api.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace basic_CRUD_api_tests.Helpers
{
    static class UsersDataHelper
    {
        public static IEnumerable<User> GetAll()
        {
            return new List<User>() {
                GetUser(1),
                GetUser(2)
            };
        }
        public static User GetUser(int id)
        {
            return new User()
            {
                Id = id,
                Name = "Test" + id,
                Username = "TestUsername" + id,
                Age = 10 + id
            };
        }
    }
}
