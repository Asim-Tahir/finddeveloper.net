import ms from "ms";

export interface LoginPayload {
  username: string;
  password: string;
}

export async function POST(request: Request): Promise<Response> {
  try {
    const { username, password }: LoginPayload = await request.json();

    if (!username || !password) {
      return Response.json(
        {
          error: `Please provide non-empty username and password and try again.`,
        },
        {
          status: 400,
        }
      );
    }

    // Calculate user ID in 1-10 range from `username:password` string
    const id: number =
      (`${username}:${password}`
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0) %
        10) +
      1;

    const apiURL = new URL(
      `/users/${id}/`,
      "https://jsonplaceholder.typicode.com"
    );

    try {
    } catch (error: unknown) {}

    const response = await fetch(apiURL.href, {
      next: { revalidate: ms("1d") },
    });

    if (!response.ok) {
      return Response.json(
        {
          error:
            "Wrong username and password. Please provide check username and password and try again.",
        },
        {
          status: 401,
        }
      );
    }

    const data: User.Record = await response.json();

    return Response.json(data, { status: 200 });
  } catch (error: unknown) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
