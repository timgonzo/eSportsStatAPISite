using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GamerSource.Data.Providers;
using GamerSource.Models.Domain;
using GamerSource.Models.Requests;
using GamerSource.Services;
using GamerSource.Web.Controllers;
using GamerSource.Web.Models.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GamerSource.Web.Api.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersApiController : BaseApiController
    {

        private ILogger _logger;
        private IUserServices _userServices;

        public UsersApiController(IUserServices userServices, ILogger<UsersApiController> logger) : base(logger)
        {
            _logger = logger;
            _userServices = userServices;
        }

        [HttpPost]
        [AllowAnonymous]
        public ActionResult<ItemResponse<int>> Add(UserAddRequest model)
        {
            try
            {
                int id = _userServices.Add(model);
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = id
                };
                return Created201(response);
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.ToString());
                return StatusCode(500, new ErrorResponse(ex.Message));
            }
        }

        [HttpDelete("{id:int}")]
        [AllowAnonymous]
        public ActionResult<SuccessResponse> Delete(int id)
        {
            try
            {
                _userServices.Delete(id);
                SuccessResponse response = new SuccessResponse();
                return Ok200(response);
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.ToString());
                return StatusCode(500, new ErrorResponse(ex.Message));
            }
        }

        [HttpGet("{id:int}")]
        [AllowAnonymous]
        public ActionResult<SuccessResponse> SelectById(int id)
        {
            try
            {
                UserWithProfileAndRoles user = _userServices.SelectById(id);
                if(user == null)
                {
                    return NotFound404(new ErrorResponse("Record Not Found"));
                }
                else
                {
                    ItemResponse<UserWithProfileAndRoles> response = new ItemResponse<UserWithProfileAndRoles>();
                    response.Item = user;
                    return Ok200(response);
                }
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.ToString());
                return StatusCode(500, new ErrorResponse(ex.Message));
            }
        }

        [HttpPut("{id:int}")]
        public ActionResult<SuccessResponse> Update(UserUpdateRequest model, int id)
        {
            try
            {
                if(model.Id == id)
                {
                    _userServices.Update(model, id);
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