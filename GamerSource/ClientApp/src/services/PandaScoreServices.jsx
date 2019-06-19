import axios from "axios";
import * as serviceHelper from "./serviceHelper";

const apiUrl = "api/pandascore/csgo/";

const getCsgoLeaguesPaged = (pageIndex, pageSize) => {
  const config = {
    method: "GET",
    withCredentials: false,
    url: apiUrl + "leagues/" + pageIndex + "/" + pageSize,
    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
};

const getCsgoSeriesByLeaguePaged = (leagueId, pageIndex, pageSize) => {
  const config = {
    method: "GET",
    withCredentials: false,
    url: apiUrl + "series/" + leagueId + "/" + pageIndex + "/" + pageSize,
    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
};

const GetCsgoTournamentBySeriesPaged = (seriesId, pageIndex, pageSize) => {
  const config = {
    method: "GET",
    withCredentials: false,
    url: apiUrl + "tournaments/" + seriesId + "/" + pageIndex + "/" + pageSize,
    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
};

const GetCsgoMatchesByTournamentPaged = (tournamentId, pageIndex, pageSize) => {
  const config = {
    method: "GET",
    withCredentials: false,
    url: apiUrl + "matches/" + tournamentId + "/" + pageIndex + "/" + pageSize,
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
  getCsgoSeriesByLeaguePaged,
  GetCsgoTournamentBySeriesPaged,
  GetCsgoMatchesByTournamentPaged
};
