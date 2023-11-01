


export default function TimerChallange({ title, targetTime }) {

  function handleStart(){
    setTimeout(() => {}, 1000);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={}>Start Challenge</button>
      </p>
      <p className="active">Time is running... /Timer inactive</p>
    </section>
  );
}
