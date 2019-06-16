import axios from "axios";
import * as serviceHelper from "./serviceHelper";

const baseURL = "https://api.pandascore.co";
const token = "rs-dg4j8BDkwMji2FFsGiV5ai10OTt85Z-Ny4okxVAzdxTk-1NY";

const getCsgoLeaguesPaged = (pageIndex, pageSize, sort) => {
  const config = {
    method: "GET",
    withCredentials: false,
    url:
      baseURL +
      "/csgo/leagues/?page=" +
      pageIndex +
      "&per_page=" +
      pageSize +
      "&sort=" +
      sort +
      "&token=" +
      token,

    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
};

const getCsgoSeriesByLeague = (pageIndex, pageSize, leagueId) => {
  const config = {
    method: "GET",
    withCredentials: false,
    url:
      baseURL +
      "/csgo/series/?page=" +
      pageIndex +
      "&per_page=" +
      pageSize +
      "&?filter[league_id]=" +
      leagueId +
      "&sort=" +
      "-begin_at" +
      "&token=" +
      token,

    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
};

const getCsgoTournamentsBySeries = (pageIndex, pageSize, serieId) => {
  const config = {
    method: "GET",
    withCredentials: false,
    url:
      baseURL +
      "/csgo/tournaments/?page=" +
      pageIndex +
      "&per_page=" +
      pageSize +
      "&serie_id=" +
      serieId +
      "&sort=" +
      "-begin_at" +
      "&token=" +
      token,

    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
};

const getCsgoMatchesByTournament = (pageIndex, pageSize, tournamentId) => {
  const config = {
    method: "GET",
    withCredentials: false,
    url:
      baseURL +
      "/csgo/matches/?page=" +
      pageIndex +
      "&per_page=" +
      pageSize +
      "&?filter[tournament_id]=" +
      tournamentId +
      "&sort=" +
      "-begin_at" +
      "&token=" +
      token,

    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
};

const getCsgoTeam = teamId => {
  const config = {
    method: "GET",
    withCredentials: false,
    url: baseURL + "/csgo/teams/?filter[id]=" + teamId + "&token=" + token,

    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
};

const getCsgoPlayer = playerId => {
  const config = {
    method: "GET",
    withCredentials: false,
    url: baseURL + "/csgo/players/?filter[id]=" + playerId + "&token=" + token,

    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
};

export {
  getCsgoLeaguesPaged,
  getCsgoSeriesByLeague,
  getCsgoTournamentsBySeries,
  getCsgoMatchesByTournament,
  getCsgoTeam,
  getCsgoPlayer
};
