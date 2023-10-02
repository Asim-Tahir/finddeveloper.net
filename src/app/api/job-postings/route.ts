import jobPostings from "@/mocks/job-postings.json";

export async function GET(request: Request): Promise<Response> {
  try {
    const { searchParams } = new URL(request.url);
    const duplicate = parseInt(searchParams.get("duplicate") ?? "1");

    if (
      typeof duplicate !== "number" ||
      isNaN(duplicate) ||
      (typeof duplicate === "number" && duplicate < 2)
    ) {
      const exampleURL = new URL(request.url);
      exampleURL.searchParams.set("duplicate", "2");

      return Response.json(
        {
          error: `Invalid "duplicate" value. Please enter a number value greater than or equal to 2.`,
          example: exampleURL.href,
        },
        {
          status: 400,
        }
      );
    }

    return Response.json(
      Array<Array<JobPostings.Record>>(duplicate)
        .fill(jobPostings as Array<JobPostings.Record>)
        .flat(),
      { status: 200 }
    );
  } catch (error: unknown) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
