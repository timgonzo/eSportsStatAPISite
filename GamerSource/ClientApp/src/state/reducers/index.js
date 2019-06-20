import { csgo as csgoReducer } from "../csgo/reducers";
import { userProfile as userProfileReducer } from "../userProfile/reducers";

export const csgo = csgoReducer;
export const user = userProfileReducer;

//Can use multiple reducers from individual components to make higher order reducers just like the ones in csgo/reducers.js

//I could do:
// export const rootReducer = combineReducers(csgo, user);
//If I used rootReducer from "./reducers/index" in my creatStore function in store.js
//I would then update the whole store as opposed to a specific property of store
//defined in this file.
//*Because I am reducing a specific property, my component-specific reducers need to
//return that specific property.
