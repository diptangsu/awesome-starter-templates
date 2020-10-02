using basic_CRUD_api.Database;
using basic_CRUD_api.Models;
using basic_CRUD_api.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace basic_CRUD_api.Services.Implementations
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _context;
        public UserService(ApplicationDbContext context)
        {
            _context = context;
        }

        public int AddUser(User user)
        {
            bool result = _context.Users.Any(e => e.Username.Equals(user.Username));
            if (result)
            {
                throw new Exception($"User with username {user.Username} already exists.");
            }
            _context.Users.Add(user);
            _context.SaveChanges();
            return user.Id;
        }

        public void DeleteById(int userId)
        {
            var user = _context.Users.FirstOrDefault(e => e.Id == userId);
            if (user != null)
            {
                _context.Users.Remove(user);
                _context.SaveChanges();
            }

        }

        public IEnumerable<User> GetAll()
        {
            return _context.Users.AsNoTracking().AsEnumerable();
        }

        public User GetById(int userId)
        {
            return _context.Users.AsNoTracking().FirstOrDefault(e => e.Id == userId);
        }

        public IEnumerable<User> SearchByUsername(string username)
        {
            return _context.Users.AsNoTracking().Where(e => e.Username.Contains(username));
        }

        public int Update(int userId, User user)
        {
            var currUser = GetById(userId);
            if (currUser == null)
            {
                return 0;
            }

            currUser.Id = userId;
            currUser.Name = user.Name;
            currUser.Age = user.Age;
            currUser.Username = user.Username;
            _context.Update(currUser);
            _context.SaveChanges();
            return currUser.Id;
        }
    }
}
