"use client";

import { Provider } from "react-redux";
import store from "./store";
import { initialRootState } from "./reducer";

export default function ReduxProvider({
  children,
}: React.PropsWithChildren): JSX.Element {
  return (
    <Provider store={store} serverState={initialRootState}>
      {children}
    </Provider>
  );
}
