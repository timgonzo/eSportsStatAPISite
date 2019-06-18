using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GamerSource.Models;
using GamerSource.Services;
using GamerSource.Web.Controllers;
using GamerSource.Web.Models.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GamerSource.Controllers
{
    [Route("api/users/profile")]
    [ApiController]
    public class UserProfileApiController : BaseApiController
    {
        private ILogger _logger;
        private IUserProfileServices _userProfileServices;

        public UserProfileApiController(IUserProfileServices userProfileServices, ILogger<UserProfileApiController> logger) : base(logger)
        {
            _logger = logger;
            _userProfileServices = userProfileServices;
        }

        [HttpPut("{id:int}")]
        [AllowAnonymous]
        public ActionResult<SuccessResponse> Update(UserProfileUpdateRequest model, int id)
        {
            try
            {
                if (model.Id == id)
                {
                    _userProfileServices.Update(model, id);
                    SuccessResponse response = new SuccessResponse();
                    return Ok200(response);
                }
                else
                {
                    return StatusCode(400, new ErrorResponse("Bad Request: Body Id does not match Entity"));
                }
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.ToString());
                return StatusCode(500, new ErrorResponse(ex.Message));
            }
        }
    }
}