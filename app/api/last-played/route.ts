export async function GET() {
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=markslorach&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`;

  const res = await fetch(url);

  if (!res.ok) return Response.json({ error: "Failed to fetch track data" }, { status: 500 });

  const data = await res.json();
  const track = data.recenttracks.track[0];

  if (!track) return Response.json({ error: "No track found" }, { status: 404 });

  const artwork = track.image[3]["#text"];

  return Response.json({
    title: track.name,
    url: track.url,
    album: track.album["#text"],
    artist: track.artist["#text"],
    artwork: !artwork || artwork.includes("2a96cbd8b46e442fc41c2b86b821562f") ? null : artwork
  });
}