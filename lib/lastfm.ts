"use server"

export async function getLastPlayed() {
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=markslorach&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`;

  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error("Failed to fetch track data");

    const data = await res.json();
    const track = data.recenttracks.track[0];

    if (!track) throw new Error("No track found");

    const artwork = track.image[3]["#text"] as string;

    return {
      title: track.name as string,
      url: track.url as string,
      album: track.album["#text"] as string,
      artist: track.artist["#text"] as string,
      artwork: !artwork || artwork.includes("2a96cbd8b46e442fc41c2b86b821562f") ? null : artwork
    };
  } catch (error) {
    throw error;
  }
}