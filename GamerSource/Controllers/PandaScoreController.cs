using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using GamerSource.Services;
using GamerSource.Web.Controllers;
using GamerSource.Web.Models.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GamerSource.Controllers
{
    [Route("api/pandascore")]
    [ApiController]
    public class PandaScoreController: BaseApiController
    {
        private ILogger _logger;

        public PandaScoreController(ILogger<UserProfileApiController> logger) : base(logger)
        {
            _logger = logger;
        }

        [HttpGet("csgo/leagues/{pageIndex:int}/{pageSize:int}")]
        [AllowAnonymous]
        public async Task<ActionResult<ItemResponse<string>>> GetCsgoLeaguesPaged(int pageIndex, int pageSize)
        {
            string token = "rs-dg4j8BDkwMji2FFsGiV5ai10OTt85Z-Ny4okxVAzdxTk-1NY";

            ApiHelper.InitializeClient();

            string url = "https://api.pandascore.co/csgo/leagues/?token=" + token + "&sort=name&page=" + pageIndex + "&per_page=" + pageSize;

            using (HttpResponseMessage response = await ApiHelper.ApiClient.GetAsync(url))
            {
                try
                {
                    ItemResponse<string> data = new ItemResponse<string>();
                    if (response.IsSuccessStatusCode)
                    {
                        data.Item = await response.Content.ReadAsStringAsync();
                        if (data.Item == null)
                        {
                            return NotFound404(new ErrorResponse("Record Not Found"));
                        }
                        else
                        {
                            return Ok200(data);
                        }
                    }
                    else
                    {
                        throw new Exception(response.ReasonPhrase);
                    }
                }
                catch (Exception ex)
                {
                    Logger.LogError(ex.ToString());
                    return StatusCode(500, new ErrorResponse(ex.Message));
                }
            }
        }



        [HttpGet("csgo/series/{leagueId:int}/{pageIndex:int}/{pageSize:int}")]
        [AllowAnonymous]
        public async Task<ActionResult<ItemResponse<string>>> GetCsgoSeriesByLeaguePaged(int leagueId, int pageIndex, int pageSize)
        {
            string token = "rs-dg4j8BDkwMji2FFsGiV5ai10OTt85Z-Ny4okxVAzdxTk-1NY";

            ApiHelper.InitializeClient();

            string url = "https://api.pandascore.co/csgo/series/?token=" + token + "&sort=name&page=" + pageIndex + "&per_page=" + pageSize + "&league_id?filter[id]=" + leagueId;

            using (HttpResponseMessage response = await ApiHelper.ApiClient.GetAsync(url))
            {
                try
                {
                    ItemResponse<string> data = new ItemResponse<string>();
                    if (response.IsSuccessStatusCode)
                    {
                        data.Item = await response.Content.ReadAsStringAsync();
                        if (data.Item == null)
                        {
                            return NotFound404(new ErrorResponse("Record Not Found"));
                        }
                        else
                        {
                            return Ok200(data);
                        }
                    }
                    else
                    {
                        throw new Exception(response.ReasonPhrase);
                    }
                }
                catch (Exception ex)
                {
                    Logger.LogError(ex.ToString());
                    return StatusCode(500, new ErrorResponse(ex.Message));
                }
            }
        }

        [HttpGet("csgo/tournaments/{leagueId:int}/{pageIndex:int}/{pageSize:int}")]
        [AllowAnonymous]
        public async Task<ActionResult<ItemResponse<string>>> GetCsgoTournamentBySeriesPaged(int seriesId, int pageIndex, int pageSize)
        {
            string token = "rs-dg4j8BDkwMji2FFsGiV5ai10OTt85Z-Ny4okxVAzdxTk-1NY";

            ApiHelper.InitializeClient();

            string url = "https://api.pandascore.co/csgo/tournaments/?token=" + token + "&sort=-begin_at&page=" + pageIndex + "&per_page=" + pageSize + "&serie_id=" + seriesId;

            using (HttpResponseMessage response = await ApiHelper.ApiClient.GetAsync(url))
            {
                try
                {
                    ItemResponse<string> data = new ItemResponse<string>();
                    if (response.IsSuccessStatusCode)
                    {
                        data.Item = await response.Content.ReadAsStringAsync();
                        if (data.Item == null)
                        {
                            return NotFound404(new ErrorResponse("Record Not Found"));
                        }
                        else
                        {
                            return Ok200(data);
                        }
                    }
                    else
                    {
                        throw new Exception(response.ReasonPhrase);
                    }
                }
                catch (Exception ex)
                {
                    Logger.LogError(ex.ToString());
                    return StatusCode(500, new ErrorResponse(ex.Message));
                }
            }
        }

        [HttpGet("csgo/matches/{tournamentId:int}/{pageIndex:int}/{pageSize:int}")]
        [AllowAnonymous]
        public async Task<ActionResult<ItemResponse<string>>> GetCsgoMatchesByTournamentPaged(int tournamentId, int pageIndex, int pageSize)
        {
            string token = "rs-dg4j8BDkwMji2FFsGiV5ai10OTt85Z-Ny4okxVAzdxTk-1NY";

            ApiHelper.InitializeClient();

            string url = "https://api.pandascore.co/csgo/matches/?token=" + token + "&sort=-begin_at&page=" + pageIndex + "&per_page=" + pageSize + "&filter[tournament_id]=" + tournamentId;

            using (HttpResponseMessage response = await ApiHelper.ApiClient.GetAsync(url))
            {
                try
                {
                    ItemResponse<string> data = new ItemResponse<string>();
                    if (response.IsSuccessStatusCode)
                    {
                        data.Item = await response.Content.ReadAsStringAsync();
                        if (data.Item == null)
                        {
                            return NotFound404(new ErrorResponse("Record Not Found"));
                        }
                        else
                        {
                            return Ok200(data);
                        }
                    }
                    else
                    {
                        throw new Exception(response.ReasonPhrase);
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
}