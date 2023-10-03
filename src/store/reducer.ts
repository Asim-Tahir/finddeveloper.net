import { combineReducers } from "redux";

import { counterReducer, initialCounterState } from "./counter";
import {
  userReducer,
  initialUserState,
} from "./user";

export const initialRootState: ReduxStore.RootStore.State = {
  counter: initialCounterState,
  user: initialUserState,
};

export default combineReducers({
  counter: counterReducer,
  user: userReducer,
});
