export const initialUserState: ReduxStore.UserStore.State = {
  currentUser: {} as User.Record,
  loggedIn: false,
  loading: true,
};

export default function userReducer(
  state: ReduxStore.UserStore.State = initialUserState,
  action: ReduxStore.UserStore.Action
): ReduxStore.UserStore.State {
  switch (action.type) {
    case "user/login":
      if (!action.payload || typeof action.payload !== "object") {
        return state;
      }

      return {
        ...state,
        currentUser: action.payload,
        loggedIn:
          typeof action.payload === "object" &&
          Object.keys(action.payload).length > 0,
        loading: false,
      };

    default:
      return state;
  }
}
