using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace basic_CRUD_app.Models
{
    public class User
    {
        [JsonPropertyName("id")]
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [JsonPropertyName("username")]
        [Required]
        public string Username { get; set; }

        [JsonPropertyName("age")]
        [Required]
        public int Age { get; set; }

        [JsonPropertyName("name")]
        [Required]
        public string Name { get; set; }
    }
}
