using basic_CRUD_api.Database;
using basic_CRUD_api.Models;
using basic_CRUD_api.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace basic_CRUD_api.Services.Implementations
{
    internal class UserService : IUserService
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
            try
            {
                user.Id = userId;
                _context.Users.Update(user);
                _context.SaveChanges();
                return user.Id;
            }
            catch (DbUpdateException)
            {
                return 0;
            }
        }
    }
}
