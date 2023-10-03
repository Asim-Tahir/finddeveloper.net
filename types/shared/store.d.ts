import type * as Redux from "redux";
import type * as ReduxThunk from "redux-thunk";

export = ReduxStore;
export as namespace ReduxStore;

declare namespace ReduxStore {
  declare namespace RootStore {
    declare interface State {
      counter: CounterStore.State;
      user: UserStore.State;
    }

    declare type ActionType =
      | CounterStore.ActionType
      | UserStore.ActionType;

    declare type Action = CounterStore.Action | UserStore.Action;

    declare type ThunkActionCreator<
      ReturnType = void,
      ExtraArgument = unknown
    > = ReduxThunk.ThunkAction<ReturnType, State, ExtraArgument, Action>;
  }

  declare namespace UserStore {
    declare interface State {
      currentUser: User.Record;
      loggedIn: boolean;
      loading: boolean;
    }

    declare interface LoginActionPayload {
      username: string;
      password: string;
    }

    declare interface LoginAction extends Redux.AnyAction {
      type: "user/login";
      payload: User.Record;
    }

    declare type ActionType = Pick<LoginAction, "type">;

    declare type Action = LoginAction;
  }

  declare namespace CounterStore {
    declare interface State {
      value: number;
    }

    declare interface IncrementAction extends Redux.AnyAction {
      type: "counter/increment";
    }

    declare interface DecrementAction extends Redux.AnyAction {
      type: "counter/decrement";
    }

    declare interface RandomAction extends Redux.AnyAction {
      type: "counter/randomize";
      payload: number;
    }

    declare type ActionType =
      | Pick<IncrementAction, "type">
      | Pick<DecrementAction, "type">
      | Pick<RandomAction, "type">;

    declare type Action = IncrementAction | DecrementAction | RandomAction;
  }
}
