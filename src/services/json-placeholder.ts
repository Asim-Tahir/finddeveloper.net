import ms from "ms";

const JSONPlaceholderService = {
  getUserBy(
    id: number,
    revalidate: number | false = ms("6h")
  ): Promise<User.Record> {
    try {
      if (
        typeof id !== "number" ||
        isNaN(id) ||
        (typeof id === "number" && (0 <= id || id > 10))
      ) {
        Promise.reject("Invalid user ID. User ID should be in the range 1-10");
      }

      const apiURL = new URL(
        `/users/${id}/`,
        "https://jsonplaceholder.typicode.com"
      );

      return new Promise<User.Record>(
        (resolve, reject: (reason?: string) => void) => {
          fetch(apiURL.href, { next: { revalidate } })
            .then((response) =>
              response.json().then((data: User.Record | {}) => ({
                success: response.ok,
                data,
              }))
            )
            .then(({ success, data }) => {
              if (!success) {
                // Reject when response is not successful
                reject("Invalid request");

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

export default JSONPlaceholderService;
