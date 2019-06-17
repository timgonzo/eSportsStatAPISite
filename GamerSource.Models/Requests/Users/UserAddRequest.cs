using System.ComponentModel.DataAnnotations;

namespace GamerSource.Models.Requests
{
    public class UserAddRequest
    {
        [Required]
        [MaxLength(255)]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(255)]
        public string LastName { get; set; }

        [Required]
        [MaxLength(255)]
        public string Email { get; set; }

        [Required]
        [MaxLength(128)]
        public string PasswordHash { get; set; }

    }
}