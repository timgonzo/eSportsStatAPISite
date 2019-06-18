using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GamerSource.Models;

namespace GamerSource.Services
{
    public interface IUserProfileServices
    {
        void Update(UserProfileUpdateRequest model, int Id);
    };
}
