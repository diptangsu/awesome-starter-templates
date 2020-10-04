using basic_CRUD_app.Models;
using basic_CRUD_app.Services.Implementations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace basic_CRUD_app.Services.Interfaces
{
    public interface IUserService
    {
        IEnumerable<User> GetAll();

        int AddUser(User user);

        User GetById(int userId);

        int Update(int userId, User user);

        void DeleteById(int userId);

        IEnumerable<User> SearchByUsername(string username);
    }
}
