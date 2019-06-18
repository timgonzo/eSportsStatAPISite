using System.Data.SqlClient;
using GamerSource.Data.Providers;
using GamerSource.Models;

namespace GamerSource.Services
{
    public class UserProfileServices : IUserProfileServices
    {

        private IDataProvider _dataProvider;


        public UserProfileServices(IDataProvider dataProvider)
        {
            _dataProvider = dataProvider;
        }

        public void Update(UserProfileUpdateRequest model, int Id)
        {
            _dataProvider.ExecuteNonQuery(
                "dbo.UserProfiles_Update",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", Id);
                    paramCol.AddWithValue("@FirstName", model.FirstName);
                    paramCol.AddWithValue("@LastName", model.LastName);
                    paramCol.AddWithValue("@Phone", model.Phone);
                });
        }

    }
}
