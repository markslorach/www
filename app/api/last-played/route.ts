import { getLastPlayed } from "@/lib/lastfm";

export async function GET() {
  try {
    const data = await getLastPlayed();

    return Response.json(data);
  } catch {
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
