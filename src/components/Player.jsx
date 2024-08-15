import { useState, useRef } from "react";

export default function Player() {
  const refPlayerName = useRef();

  const [payerName, setPlayerName] = useState(null);

  const handleClick = () => {
    setPlayerName(refPlayerName.current.value);
  };
  return (
    <section id="player">
      <h2>Welcome {payerName ?? "unknown entity"}</h2>
      <p>
        <input ref={refPlayerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
