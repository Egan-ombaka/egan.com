import React, { useEffect, useState } from 'react';



const Spotify = ({ accessToken }) => {
  const [topTrack, setTopTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!accessToken) return;
    // Fetch the user's top track (last 4 weeks) from Spotify
    fetch(
      "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=1",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch top track");
        }
        return res.json();
      })
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setTopTrack(data.items[0]);
        } else {
          setError("No top track found.");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [accessToken]);

  if (!accessToken) return <div>Please log in to Spotify.</div>;
  if (loading) return <div>Loading top track...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Your Top Track (Last 4 Weeks): {topTrack.name}</h2>
      <p>Artist: {topTrack.artists.map((artist) => artist.name).join(", ")}</p>
      {topTrack.preview_url ? (
        <audio controls src={topTrack.preview_url}>
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p>No preview available for this track.</p>
      )}
    </div>
  );
};
export default Spotify;
