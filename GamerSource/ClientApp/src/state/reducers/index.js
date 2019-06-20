import csgoReducers from "../csgo/reducers";
import userProfileReducers from "../userProfile/reducers";

export const userProfileReducer = userProfileReducers;
export const csgoReducer = csgoReducers;

//Can use multiple reducers from individual components to make higher order reducers just like the ones in csgo/reducers.js

//I could do:
// export const rootReducer = combineReducers(csgo, user);
//If I used rootReducer from "./reducers/index" in my creatStore function in store.js
//I would then update the whole store as opposed to a specific property of store
//defined in this file.
//*Because I am reducing a specific property, my component-specific reducers need to
//return that specific property.
