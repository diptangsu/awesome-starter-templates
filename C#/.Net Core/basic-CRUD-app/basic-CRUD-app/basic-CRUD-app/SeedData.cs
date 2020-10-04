using basic_CRUD_app.Database;
using basic_CRUD_app.Models;
using System;
using System.Collections.Generic;

namespace basic_CRUD_app
{
    public static class SeedData
    {
        public static void Seed(this ApplicationDbContext context)
        {
            var users = new List<User>()
            {
                new User(){
                    Age = 22,
                    Name = "Diptangsu Goswami",
                    Username = "diptangsu"
                },
                new User(){
                    Age = 22,
                    Name = "Sai Teja",
                    Username = "saiteja310"
                },
                new User(){
                    Age = 22,
                    Name = "Gita",
                    Username = "gitaalekhyapaul"
                }
            };
            context.AddRange(users);
            context.SaveChanges();
        }
    }
}
