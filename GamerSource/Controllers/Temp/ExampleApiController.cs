//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.Extensions.Logging;
//using GamerSource.Models.Domain;
//using GamerSource.Models.Requests;
//using GamerSource.Services;
//using GamerSource.Web.Controllers;
//using GamerSource.Web.Models.Responses;
//using System.Collections.Generic;

//// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

//namespace GamerSource.Web.Api.Controllers
//{
//    [AllowAnonymous]
//    [Route("api/examples")]
//    public class ExamplesApiController : BaseApiController
//    {
//        private IUserService _userService;
//        private IAuthenticationService<int> _authService;

//        public ExamplesApiController(IUserService userService
//            , IAuthenticationService<int> authService
//            , ILogger<ExamplesApiController> logger) : base(logger)
//        {
//            _userService = userService;

//            _authService = authService;

//        }

//        [HttpGet]
//        public ActionResult<ItemsResponse<UserBase>> GetAllUser()
//        {
//            List<UserBase> userList = new List<UserBase>();
//            for (int i = 1; i <= 20; i++)
//            {
//                userList.Add(
//                  new UserBase()
//                  {
//                      Id = i,
//                      Name = "Emma" + i,
//                      Roles = new string[] { "blogger" + i },
//                      TenantId = "State Test " + i
//                  }
//               );
//            }

//            ItemsResponse<UserBase> response = new ItemsResponse<UserBase>();
//            response.Items = userList;
//            return Ok200(response);
//        }

//        [HttpGet("{id}")]
//        public ActionResult<ItemResponse<UserBase>> GetUserById(int id)
//        {
//            ItemResponse<UserBase> response = new ItemResponse<UserBase>();
//            response.Item = new UserBase()
//            {
//                Id = id,
//                Name = "Emma" + id,
//                Roles = new string[] { "blogger" + id.ToString() },
//                TenantId = "State Test" + id,
//            };
//            return Ok200(response);
//        }

//        [HttpPost]
//        public ActionResult<ItemResponse<int>> Post(UserBaseAddRequest model)
//        {
//            ItemResponse<int> response = new ItemResponse<int>();
//            return Created201(response);
//        }

//        [HttpPut("{id}")]
//        public ActionResult<SuccessResponse> Put(UserBaseAddRequest model)
//        {
//            SuccessResponse response = new SuccessResponse();
//            return Ok200(response);
//        }

//        [HttpDelete("{id}")]
//        public ActionResult<SuccessResponse> Delete(int id)
//        {
//            SuccessResponse response = new SuccessResponse();
//            return Ok200(response);
//        }
//    }
//}
