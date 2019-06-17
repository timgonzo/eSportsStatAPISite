using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace GamerSource.Models.Requests
{
    public class UserUpdateRequest
    {
        [Required]
        [Range(1, Int32.MaxValue)]
        public int Id { get; set; }

        [MaxLength(255)]
        public string Email { get; set; }

        public bool IsConfirmed { get; set; }
        [Range(1, 2)]
        public int Status { get; set; }

        [MaxLength(128)]
        public string PasswordHash { get; set; }
    }
}
