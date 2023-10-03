import { combineReducers } from "redux";

import { counterReducer, initialCounterState } from "./counter";

export const initialRootState: ReduxStore.RootStore.State = {
  counter: initialCounterState,
};

export default combineReducers({
  counter: counterReducer,
});
