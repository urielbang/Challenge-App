import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, time }) {
  const [timeRemaining, settimeRemaining] = useState(time * 1000);
  const timer = useRef();
  const dialogRef = useRef();

  const timerIsActive = timeRemaining > 0 && timeRemaining < time * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialogRef.current.open();
  }

  const handleReset = () => {
    settimeRemaining(time * 1000);
  };

  const startTimer = () => {
    timer.current = setInterval(() => {
      settimeRemaining((prevTimeRemain) => prevTimeRemain - 10);
    }, 10);
  };

  const handleStop = () => {
    dialogRef.current.open();
    clearInterval(timer.current);
  };

  return (
    <>
      <ResultModal
        targetTime={time}
        ref={dialogRef}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {time} second{time > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : startTimer}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running ..." : "Time inactive"}
        </p>
      </section>
    </>
  );
}
