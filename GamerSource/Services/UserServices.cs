using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using GamerSource.Data;
using GamerSource.Data.Providers;
using GamerSource.Models;
using GamerSource.Models.Domain;
using GamerSource.Models.Requests;
using Microsoft.Extensions.Configuration;

namespace GamerSource.Services
{
    public class UserServices : IUserServices
    {
        private IDataProvider _dataProvider;


        public UserServices(IDataProvider dataProvider)
        {
            _dataProvider = dataProvider;
        }

        private User BaseUserMapper(IDataReader reader, ref int index)
        {
            User model = new User();
            model.Id = reader.GetSafeInt32(index++);
            model.Email = reader.GetSafeString(index++);
            model.IsConfirmed = reader.GetSafeBool(index++);
            model.Status = reader.GetSafeInt32(index++);
            model.DateCreated = reader.GetSafeDateTime(index++);
            model.DateModified = reader.GetDateTime(index++);
            return model;
        }

        public UserWithProfileAndRoles SelectById(int id)
        {
            UserWithProfileAndRoles user = null;
            UserProfile profile = null;
            List<RoleType> roles = null;
            _dataProvider.ExecuteCmd(
                "dbo.Users_SelectById",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", id);
                },
                singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    if (user == null)
                    {
                        user = new UserWithProfileAndRoles();
                    }
                    switch (set)
                    {
                        case 0:
                            int userIndex = 0;
                            user.Id = reader.GetInt32(userIndex++);
                            user.DateCreated = reader.GetSafeDateTime(userIndex++);
                            user.DateModified = reader.GetDateTime(userIndex++);
                            user.EntityType = reader.GetSafeEnum<EntityType>(userIndex++);
                            user.IsConfirmed = reader.GetSafeBool(userIndex++);
                            user.Status = reader.GetSafeInt32(userIndex++);
                            user.Email = reader.GetSafeString(userIndex++);

                            break;
                        case 1:
                            if (user.Profile == null)
                            {
                                profile = new UserProfile();
                            }
                            int profileIndex = 0;
                            profile.FirstName = reader.GetSafeString(profileIndex++);
                            profile.LastName = reader.GetSafeString(profileIndex++);
                            profile.Phone = reader.GetSafeString(profileIndex++);
                            user.Profile = profile;
                            break;
                        case 2:
                            if (roles == null)
                            {
                                roles = new List<RoleType>();
                                user.Roles = roles;
                            }
                            int roleIndex = 0;
                            RoleType roleType = reader.GetSafeEnum<RoleType>(roleIndex++);
                            roles.Add(roleType);
                            break;
                    }
                }
                );
            return user;
        }

        public int Add(UserAddRequest model)
        {
            int userId = 0;
            _dataProvider.ExecuteNonQuery(
                "dbo.Users_Insert",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@FirstName", model.FirstName);
                    paramCol.AddWithValue("@LastName", model.LastName);
                    paramCol.AddWithValue("@Email", model.Email);
                    paramCol.AddWithValue("@Password", model.PasswordHash);

                    SqlParameter idParameter = new SqlParameter("@Id", SqlDbType.Int);
                    idParameter.Direction = ParameterDirection.Output;
                    paramCol.Add(idParameter);
                },
                returnParameters: delegate (SqlParameterCollection paramCol)
                {
                    Int32.TryParse(paramCol["@Id"].Value.ToString(), out userId);
                }
                );
            return userId;
        }

        public void Update(UserUpdateRequest model, int Id)
        {
            _dataProvider.ExecuteNonQuery(
                "dbo.Users_Update",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", Id);
                    paramCol.AddWithValue("@Email", model.Email);
                    paramCol.AddWithValue("@IsConfirmed", model.IsConfirmed);
                    paramCol.AddWithValue("@Status", model.Status);
                    paramCol.AddWithValue("@Password", model.PasswordHash);
                });
        }

        public void Delete(int Id)
        {
            _dataProvider.ExecuteNonQuery(
                "dbo.Users_Delete",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", Id);
                }
                );
        }


    }


}
