function GameItem(props) {
  function handleClick() {
    alert("You selected " + props.name + "!");
  }

  return (
    <button onClick={handleClick}>
      {props.name}
    </button>
  );
}

export default GameItem;


import GameItem from "./GameItem";

function App() {
  return (
    <div>
      <h1>Game Selector</h1>

      <GameItem name="Minecraft" />
      <GameItem name="Fortnite" />
      <GameItem name="CS:GO" />
      <GameItem name="Valorant" />

    </div>
  );
}



function SongItem(props) {
  function playSong() {
    alert("Now playing: " + props.name);
  }

  return (
    <button onClick={playSong}>
      {props.name}
    </button>
  );
}