using System.Collections.Generic;

namespace GamerSource.Models.Domain
{
    public class UserBase : IUserAuthData
    {
        public int Id
        {
            get; set;
        }

        public string Name
        {
            get; set;
        }

        public IEnumerable<string> Roles
        {
            get; set;
        }

        public object TenantId
        {
            get; set;
        }

        public string AvatarUrl
        {
            get; set;
        }
    }
}