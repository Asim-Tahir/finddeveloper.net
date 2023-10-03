import ms from "ms";

export const UserService = {
  login(
    {
      username,
      password,
    }: {
      username: string;
      password: string;
    },
    revalidate: number | false = ms("1d")
  ): Promise<User.Record> {
    try {
      if (
        typeof username !== "string" ||
        typeof password !== "string" ||
        !username ||
        !password
      ) {
        Promise.reject(
          "Invalid username and password. Please provide valid username and password and try again."
        );
      }

      return new Promise<User.Record>(
        (resolve, reject: (reason?: string) => void) => {
          const apiURL = new URL(`/api/login`, location.origin);

          fetch(apiURL.href, {
            method: "POST",
            body: JSON.stringify({ username, password }),
            next: { revalidate },
          })
            .then((response) =>
              response.json().then((data: User.Record | {}) => ({
                success: response.ok,
                data,
              }))
            )
            .then(({ success, data }) => {
              if (!success) {
                // Reject when response is not successful
                reject(
                  "Wrong username and password. Please provide check username and password and try again."
                );

                // Stop further execution
                return;
              }

              // Resolve data when response is successful
              resolve(data as User.Record);
            })
            .catch((reason: unknown) => {
              // Reject with error message when fetch promise rejected
              reject((reason as Error).message);
            });
        }
      );
    } catch (error: unknown) {
      // Return rejected promise with error message when error occurs
      return Promise.reject((error as Error).message);
    }
  },
};

export default UserService;
