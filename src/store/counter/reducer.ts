export const initialCounterState: ReduxStore.CounterStore.State = {
  value: 0,
};

export default function counterReducer(
  state: ReduxStore.CounterStore.State = initialCounterState,
  action: ReduxStore.CounterStore.Action
): ReduxStore.CounterStore.State {
  switch (action.type) {
    case "counter/increment":
      return { ...state, value: state.value + 1 };

    case "counter/decrement":
      return { ...state, value: state.value - 1 };

    case "counter/randomize":
      if (
        !action.payload ||
        typeof action.payload !== "number" ||
        (typeof action.payload === "number" && isNaN(action.payload))
      )
        return state;

      return { ...state, value: action.payload };

    default:
      return state;
  }
}
