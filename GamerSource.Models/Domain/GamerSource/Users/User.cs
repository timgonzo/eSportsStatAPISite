using System;

namespace GamerSource.Models.Domain
{
    public class User
    {
        public int Id { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
        public EntityType EntityType { get; set; }
        public bool IsConfirmed { get; set; }
        public int Status { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
    }
}