import {
  ActionGetResponse,
  ActionPostRequest,
  createActionHeaders,
} from "@solana/actions";

const headers = createActionHeaders();

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id")!;

  // const data = await getData(id)
  const payload: ActionGetResponse = {
    type: "action",
    title: "",
    description: "",
    icon: "",
    label: "",
    links: {
      actions: [
        {
          type: "post",
          href: `/api?id=${id}`,
          label: "",
        },
      ],
    },
  };

  return Response.json(payload, { headers });
}

export async function OPTIONS() {
  return new Response(null, { headers });
}

export async function POST(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id")!;

    const body: ActionPostRequest = await req.json();
    const account = body.account;
  } catch (err) {
    console.log(err);
  }
}
