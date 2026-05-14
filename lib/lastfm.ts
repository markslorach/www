export type Track = {
  title: string;
  url: string;
  album: string;
  artist: string;
  artwork: string | null;
}

export async function getLastPlayed(): Promise<Track> {
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=markslorach&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`;

    const res = await fetch(url);

    if (!res.ok) throw new Error("Failed to fetch track data");

    const data = await res.json();
    const track = data.recenttracks.track[0];

    if (!track) throw new Error("No track found");

    const artwork = track.image[3]["#text"]

    return {
      title: track.name,
      url: track.url,
      album: track.album["#text"],
      artist: track.artist["#text"],
      artwork: !artwork || artwork.includes("2a96cbd8b46e442fc41c2b86b821562f") ? null : artwork
    };
}