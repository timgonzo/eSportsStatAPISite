using System;
using System.Collections.Generic;
using System.Text;

namespace GamerSource.Models.Domain
{
    public class UserWithProfileAndRoles: User
    {


        public UserProfile Profile { get; set; }
        public List<RoleType> Roles { get; set; }
    }
}
