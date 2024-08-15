import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" time={1} />
        <TimerChallenge title="Not easy" time={5} />
        <TimerChallenge title="Pros Only" time={10} />
      </div>
    </>
  );
}

export default App;
