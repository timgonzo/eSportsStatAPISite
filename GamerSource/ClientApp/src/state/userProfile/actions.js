import * as userServices from "../../services/usersServices";

export const TYPES = {
  USER_STORE_PROFILE: "USER_STORE_PROFILE",
  USER_UPDATE_PROFILE: "USER_UPDATE_PROFILE"
};


export const getUserProfileById = (data) =>{
  userServices.getById(data.id)
    .then(data =>dispatch(storeUserProfile(data)))
  }

export const storeUserProfile = data => {
  return {
    type: TYPES.USER_STORE_PROFILE,
    payload: data.item
  };
};

export const sendUserProfileUpdate = data => {
  return dispatch => {    userServices.updateProfile(data);
  };
};





export const 
return {
  type: TYPES.USER_UPDATE_PROFILE,
  payload: data
};
