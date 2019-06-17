using GamerSource.Models.Domain;
using GamerSource.Models.Requests;

namespace GamerSource.Services
{
    public interface IUserServices
    {
        int Add(UserAddRequest model);
        void Delete(int Id);
        UserWithProfileAndRoles SelectById(int id);
        void Update(UserUpdateRequest model, int Id);
    }
}