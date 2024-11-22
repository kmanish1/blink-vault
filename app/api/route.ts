import {
  ActionGetResponse,
  ActionPostRequest,
  ActionPostResponse,
  createActionHeaders,
  createPostResponse,
} from "@solana/actions";
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
 
import { getData } from "./func";

const headers = createActionHeaders();

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id")!;

  const data = await getData(id)
  const payload: ActionGetResponse = {
    type: "action",
    title: data.outerTitle,
    description: data.outerContent,
    icon: data.outerImageLink,
    label: "",
    links: {
      actions: [
        {
          type: "post",
          href: `/api?id=${id}&to=${data.walletAddress}&price=${data.outerPrice}`,
          label: `Pay ${data.outerPrice} sol`,
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
    const to = url.searchParams.get("to")!;
    const price = parseFloat(url.searchParams.get("price")!);

    const body: ActionPostRequest = await req.json();
    const account = new PublicKey(body.account);

    const connection = new Connection(clusterApiUrl("devnet"));

    const { blockhash, lastValidBlockHeight } =
      await connection.getLatestBlockhash();

    const tx = new Transaction({
      feePayer: account,
      blockhash,
      lastValidBlockHeight,
    });

    const transfer = SystemProgram.transfer({
      fromPubkey: account,
      toPubkey: new PublicKey(to),
      lamports: price * LAMPORTS_PER_SOL,
    });

    tx.add(transfer);

    const payload: ActionPostResponse = await createPostResponse({
      fields: {
        transaction: tx,
        message: "",
        type: "transaction",
        links: {
          next: {
            href: `/api/next?id=${id}`,
            type: "post",
          },
        },
      },
    });

    return Response.json(payload, { headers });
  } catch (err) {
    console.log(err);
  }
}
