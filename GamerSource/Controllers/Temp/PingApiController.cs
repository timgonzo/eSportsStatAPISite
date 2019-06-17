﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using GamerSource.Web.Controllers;
using GamerSource.Web.Models.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GamerSource.Web.Api.Controllers
{
    /// <summary>
    /// This controller is not required for the application to work. 
    /// You could remove it but it serves as a simple entry point for development
    /// </summary>
    [Route("api/ping")]
    [ApiController]
    public class PingApiController : BaseApiController
    {
        public PingApiController(ILogger<PingApiController> logger) : base(logger)
        {

        }

        [HttpGet()]
        [AllowAnonymous]
        public ActionResult<ItemResponse<object>> GetUserById(int id)
        {
            Logger.LogInformation("Ping endpoint firing");

            ItemResponse<object> response = new ItemResponse<object>();

            response.Item = DateTime.Now.Ticks;

            return Ok200(response);
        }
    }
}