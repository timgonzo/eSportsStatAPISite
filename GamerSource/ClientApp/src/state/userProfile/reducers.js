import { TYPES } from "./actions";

import logger from "../../logger";
const _logger = logger.extend("redux:reducers:userProfile");

const initialState = {
  user: {}
};

const userProfileReducers = (state = initialState, action) => {
  _logger(`called with:${action}`);
  switch (action.type) {
    case TYPES.USER_PROFILE_GET_RESPONSE:
      return {
        ...state,
        user: action.payload
      };

    case TYPES.USER_PROFILE_UPDATE_RESPONSE:
      return {
        ...state,
        user: action.payload
      };

    case TYPES.USER_PROFILE_ADD_RESPONSE:
      return {
        ...state,
        user: action.payload
      };

    case TYPES.USER_PROFILE_DELETE_RESPONSE:
      return {
        user: action.payload
      };

    default:
      return state;
  }
};

export default userProfileReducers;

export const getUserProfile = state => state.user;
export const updateUserProfile = state => state.user;
export const addUser = state => state.user;
export const deleteUser = state => state.user;
