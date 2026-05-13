const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=markslorach&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`;

export async function getLastPlayed() {
  try {
    const res = await fetch(url, { next: { revalidate: 30 } });

    if (!res.ok) return { error: "Failed to fetch track data" };

    const data = await res.json();
    const track = data.recenttracks.track[0];

    if (!track) return { error: "No track found" };

    return {
      data: {
        title: track.name as string,
        url: track.url as string,
        album: track.album["#text"] as string,
        artist: track.artist["#text"] as string,
        artwork: track.image[3]["#text"] as string || null
      },
    };
  } catch {
    return { error: "Failed to fetch track data" };
  }
}
