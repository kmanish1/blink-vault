import {
  ACTIONS_CORS_HEADERS,
  ActionsJson,
  createActionHeaders,
} from "@solana/actions";

export const GET = async () => {
  const payload: ActionsJson = {
    rules: [
      {
        pathPattern: "/",
        apiPath: "/api/",
      },
      // fallback route
      {
        pathPattern: "/api/**",
        apiPath: "/api/",
      },
    ],
  };

  return Response.json(payload, {
    headers: createActionHeaders(),
  });
};
// ensures cors
export const OPTIONS = GET;
