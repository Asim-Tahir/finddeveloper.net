import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import type { ThunkDispatch } from "redux-thunk";

export const useAppDispatch = useDispatch<
  ThunkDispatch<
    ReduxStore.RootStore.State,
    unknown,
    ReduxStore.RootStore.Action
  >
>;
export const useAppSelector: TypedUseSelectorHook<ReduxStore.RootStore.State> =
  useSelector;
