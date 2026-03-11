const playlistData = [
  {
    songTitle: "Blinding Lights",
    artist: "The Weeknd",
    albumArt: "https://via.placeholder.com/150"
  },
  {
    songTitle: "Levitating",
    artist: "Dua Lipa",
    albumArt: "https://via.placeholder.com/150"
  },
  {
    songTitle: "Peaches",
    artist: "Justin Bieber",
    albumArt: "https://via.placeholder.com/150"
  },
  {
    songTitle: "Stay",
    artist: "The Kid LAROI",
    albumArt: "https://via.placeholder.com/150"
  }
];

function SongBody(props) {
  return (
    <div>
      <h2>{props.songTitle}</h2>
      <p>{props.artist}</p>
    </div>
  );
}

function AlbumArt(props) {
  return (
    <img src={props.albumArt} alt="album" width="150" />
  );
}

import SongBody from "./SongBody";
import AlbumArt from "./AlbumArt";

function SongCard(props) {
  const song = props.songObject;

  return (
    <div>
      <AlbumArt albumArt={song.albumArt} />
      <SongBody songTitle={song.songTitle} artist={song.artist} />
    </div>
  );
}

import playlistData from "./playlistData";
import SongCard from "./SongCard";

function App() {
  return (
    <div>
      {playlistData.map((song, index) => (
        <SongCard key={index} songObject={song} />
      ))}
    </div>
  );
}






export default playlistData;