import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredplayerName] = useState(null);
  const [submited, setSubmited] = useState(false);


  function handleChange(event) {
    setSubmited(false);
    setEnteredplayerName(event.target.value);
  }

  function handleClick(){
    setSubmited(true)
  }

  return (
    <section id="player">
      <h2>Welcome {submited ? enteredPlayerName:  'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
