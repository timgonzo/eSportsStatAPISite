using System;
using System.Collections.Generic;
using System.Text;

namespace GamerSource.Models.Domain
{
    public class UserProfile
    {
        public int Id { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }

        public EntityType EntityType { get; set; }

        public int UserId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Phone { get; set; }

    }
}
