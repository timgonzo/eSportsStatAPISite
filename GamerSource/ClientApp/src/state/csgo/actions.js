import * as PandaScoreServices from "../../services/PandaScoreServices";
import logger from "../../logger";

const _logger = logger.extend("timgonzo:redux:actions");

export const TYPES = {
  CSGO_RECEIVE_LEAGUES_PAGED: "CSGO_RECEIVE_LEAGUES_PAGED"
};

export const onUserProfileActionError = () => {
  _logger("There was an error with your CSGO Actions.");
};

export const parseResponse = jQueryString => {
  const parsedResponse = JSON.parse(jQueryString);
  _logger("Parsed Response Object: ", parsedResponse);
  return {
    type: TYPES.CSGO_RECEIVE_LEAGUES_PAGED,
    payload: parsedResponse
  };
};

export const getCsgoLeaguesPaged = (pageIndex, pageSize) => {
  return dispatch => {
    return PandaScoreServices.getCsgoLeaguesPaged(pageIndex, pageSize).then(
      response =>
        dispatch(parseResponse(response.item)).catch(onUserProfileActionError)
    );
  };
};
