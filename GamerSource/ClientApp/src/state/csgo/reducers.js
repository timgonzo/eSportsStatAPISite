import { TYPES } from "./actions";

let defaultState = {
  count: 0,
  pageIndex: 1,
  pageSize: 8,
  items: {
    all: [],
    byId: {}
  },
  selectedId: 4205
};

export const csgo = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.CSGO_RECEIVE_LEAGUES_PAGED: {
      const newLeagues = {
        ...state,
        all: action.payload
      };
      return newLeagues;
    }
    default:
      return state;
  }
};

//likely written wrong, was naive to Redux functionality
//when this was written
