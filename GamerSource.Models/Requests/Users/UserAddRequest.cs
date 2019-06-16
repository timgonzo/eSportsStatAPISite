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
        public string Password { get; set; }

        [Required]
        public bool IsConfirmed { get; set; }

        [Required]
        [Range(1, 10, ErrorMessage = "Status must be an integer value between 1 and 10")]
        public int Status { get; set; }

        [MaxLength(255)]
        public string AvatarUrl { get; set; }
    }
}