import ms from "ms";

export function counterRandomizeAction(): ReduxStore.RootStore.ThunkActionCreator<
  Promise<number | void>
> {
  return async function (dispatch) {
    try {
      // See: https://www.random.org/clients/http/api/
      const apiURL = new URL("https://www.random.org/integers/");

      apiURL.searchParams.set("num", "1");
      apiURL.searchParams.set("min", "1");
      apiURL.searchParams.set("max", "10");
      apiURL.searchParams.set("base", "10");
      apiURL.searchParams.set("col", "1");
      apiURL.searchParams.set("format", "plain");
      apiURL.searchParams.set("rnd", "new");

      const response = await fetch(apiURL.href, {
        cache: "force-cache",
        next: { revalidate: ms("2h") },
      });
      const data = await response.text();
      const rndNumber = parseInt(data);

      dispatch({ type: "counter/randomize", payload: rndNumber });

      return rndNumber;
    } catch (error: unknown) {
      console.error(
        "Error occur at counter/randomize:",
        (error as Error).message
      );
    }
  };
}
