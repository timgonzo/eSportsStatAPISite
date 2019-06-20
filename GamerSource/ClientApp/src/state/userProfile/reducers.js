import { TYPES } from "./actions";

//let initialUserState = {};

export const userProfile = (state = {}, action) => {
  let modifiedState = { ...state };
  switch (action.type) {
    case TYPES.USER_SET_PROFILE: {
      modifiedState.user = action.payload;
      return modifiedState.user;
    }
    default:
      return state;
  }
};
