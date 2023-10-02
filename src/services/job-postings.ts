import ms from "ms";

export interface ErrorResponse {
  error: string;
  example: string;
}

const JobPostingsService = {
  getList(
    duplicate: number = 2,
    revalidate: number | false = ms("6h")
  ): Promise<Array<JobPostings.Record>> {
    try {
      const apiURL = new URL("/api/job-postings", location.origin);
      apiURL.searchParams.set("duplicate", Math.round(duplicate).toFixed(0));

      return new Promise<Array<JobPostings.Record>>(
        (resolve, reject: (reason?: string) => void) => {
          fetch(apiURL.href, { cache: "force-cache", next: { revalidate } })
            .then((response) =>
              response
                .json()
                .then((data: Array<JobPostings.Record> | ErrorResponse) => ({
                  success: response.ok,
                  data,
                }))
            )
            .then(({ success, data }) => {
              if (!success) {
                // Reject when response is not successful
                reject((data as ErrorResponse).error);

                // Stop further execution
                return;
              }

              // Resolve data when response is successful
              resolve(data as Array<JobPostings.Record>);
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

export default JobPostingsService;
