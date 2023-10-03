import type { Action } from "redux";
import type * as ReduxThunk from "redux-thunk";

export = ReduxStore;
export as namespace ReduxStore;

declare namespace ReduxStore {
  declare namespace RootStore {
    declare interface State {
      counter: CounterStore.State;
    }

    declare type ActionType = CounterStore.ActionType;

    declare type Action = CounterStore.Action;

    declare type ThunkActionCreator<
      ReturnType = void,
      ExtraArgument = unknown
    > = ReduxThunk.ThunkAction<ReturnType, State, ExtraArgument, Action>;
  }

  declare namespace CounterStore {
    declare interface State {
      value: number;
    }

    declare interface IncrementAction extends Action {
      type: "counter/increment";
    }

    declare interface DecrementAction extends Action {
      type: "counter/decrement";
    }

    declare interface RandomAction extends Action {
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
