import { TYPES } from "./actions";

export const user = (state = {}, action) => {
  switch (action.type) {
    case TYPES.USER_SET_ROLES: {
      const user = {
        ...state,
        roles: action.payload
      };
      return user;
    }

    default:
      return state;
  }
};
