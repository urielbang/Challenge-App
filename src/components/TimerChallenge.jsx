import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, time }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();
  const dialogRef = useRef();

  const startTimer = () => {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialogRef.current.showModal();
    }, time * 1000);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
    setTimerStarted(false);
  };

  return (
    <>
      <ResultModal targetTime={time} result="lost" ref={dialogRef} />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {time} second{time > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : startTimer}>
            {timerStarted && !timerExpired ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted && !timerExpired ? "active" : undefined}>
          {timerStarted && !timerExpired
            ? "Time is running ..."
            : "Time inactive"}
        </p>
      </section>
    </>
  );
}
