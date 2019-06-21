import * as userServices from "../../services/usersServices";

import logger from "../../logger";
const _logger = logger.extend("redux:actions:userProfile");

export const TYPES = {
  USER_PROFILE_GET_REQUEST: "USER_PROFILE_GET_REQUEST",
  USER_PROFILE_GET_RESPONSE: "USER_PROFILE_GET_RESPONSE",
  USER_PROFILE_UPDATE_REQUEST: "USER_PROFILE_UPDATE_REQUEST",
  USER_PROFILE_UPDATE_RESPONSE: "USER_PROFILE_UPDATE_RESPONSE",
  USER_PROFILE_ADD_REQUEST: "USER_PROFILE_ADD_REQUEST",
  USER_PROFILE_ADD_RESPONSE: "USER_PROFILE_ADD_RESPONSE",
  USER_PROFILE_DELETE_REQUEST: "USER_PROFILE_DELETE_REQUEST",
  USER_PROFILE_DELETE_RESPONSE: "USER_PROFILE_DELETE_RESPONSE"
};

//Get User Profile By ID
export const getUserProfile = userId => {
  return dispatch => {
    dispatch(userProfileGetRequest());
    return userServices
      .getById(userId)
      .then(response => {
        //_logger("User data: ", response.item);
        return response.item;
      })
      .then(userInfo => dispatch(userProfileGetResponse(userInfo)));
    //.then(this.props.history.push())
  };
};

const userProfileGetRequest = () => {
  _logger("User get requested");
  return {
    type: TYPES.USER_PROFILE_GET_REQUEST
  };
};

const userProfileGetResponse = user => {
  _logger("User profile get request info: ", user);
  return {
    type: TYPES.USER_PROFILE_GET_RESPONSE,
    payload: user
  };
};

//Update user by ID
export const updateUserProfile = user => {
  return dispatch => {
    dispatch(userProfileUpdateRequest());
    return userServices
      .updateProfile(user)
      .then(response => dispatch(userProfileUpdateResponse(response, user)));
  };
};

const userProfileUpdateRequest = () => {
  _logger("User update requested");
  return {
    type: TYPES.USER_PROFILE_UPDATE_REQUEST
  };
};

const userProfileUpdateResponse = (serverResponse, user) => {
  _logger("User profile update response: ", serverResponse);
  return {
    type: TYPES.USER_PROFILE_UPDATE_RESPONSE,
    payload: user
  };
};

//Add user
export const addUser = user => {
  return dispatch => {
    dispatch(userProfileAddRequest());
    return userServices.add(user).then(response => {
      dispatch(userProfileAddResponse(response, user));
    });
  };
};

const userProfileAddRequest = () => {
  _logger("Requested adding user");
  return {
    type: TYPES.USER_PROFILE_ADD_REQUEST
  };
};

const userProfileAddResponse = (serverResponse, user) => {
  _logger("User profile add response: ", serverResponse);
  return {
    type: TYPES.USER_PROFILE_ADD_RESPONSE,
    payload: user
  };
};

//Delete user by ID
export const deleteUser = userId => {
  return dispatch => {
    dispatch(userDeleteRequest());
    userServices
      .deleteUser(userId)
      .then(response => userDeleteResponse(response));
  };
};

const userDeleteRequest = () => {
  _logger("User deletion requested");
  return {
    type: TYPES.USER_PROFILE_DELETE_REQUEST
  };
};

const userDeleteResponse = serverResponse => {
  _logger("User deletion response: ", serverResponse);
  return {
    type: TYPES.USER_PROFILE_DELETE_RESPONSE
  };
};
