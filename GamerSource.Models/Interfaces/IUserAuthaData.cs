using System.Collections.Generic;

namespace GamerSource.Models
{
    public interface IUserAuthData
    {
        int Id { get; }
        string Name { get; }
        IEnumerable<string> Roles { get; }
        object TenantId { get; }
        string AvatarUrl { get; }
    }
}