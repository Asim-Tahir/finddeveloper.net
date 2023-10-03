import { UserService } from "@/services";

const userActions = {
  login({
    username,
    password,
  }: ReduxStore.UserStore.LoginActionPayload): ReduxStore.RootStore.ThunkActionCreator<
    Promise<void>
  > {
    return async function (dispatch) {
      try {
        const currentUser = await UserService.login({
          username,
          password,
        });

        dispatch({ type: "user/login", payload: currentUser });
      } catch (error: unknown) {
        console.error((error as Error).message);
      }
    };
  },
};

export default userActions;
