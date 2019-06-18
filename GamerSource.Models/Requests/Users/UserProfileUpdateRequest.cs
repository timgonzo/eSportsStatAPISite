using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace GamerSource.Models
{
    public class UserProfileUpdateRequest
    {
        [Required]
        [Range(1, Int32.MaxValue)]
        public int Id { get; set; }
        [MaxLength(255)]
        public string FirstName { get; set; }
        [MaxLength(255)]
        public string LastName { get; set; }
        [MaxLength(255)]
        public string Phone { get; set; }
    }
}
