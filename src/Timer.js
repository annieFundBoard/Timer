import React from "react";

const Timer = ({ title, subTitle }) => {
  const [count, setCount] = React.useState(0);

  // problem: we need to call timer so that we can stop it

  // create a ref here so that we can call it later?
  const timerRef = React.useRef(0);

  const stopTimer = () => {
    clearInterval(timerRef.current);
  }

  const resetTimer = () => {
    setCount(0);
  }

  const startTimer = () => {
    // if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount(activeCount => activeCount + 1);
    }, 1000);
  }

  React.useEffect(() => {
    timerRef.current = setInterval(() => {
      // increament the value in {count}
      setCount(activeCount => activeCount + 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [])

  return (
    <div>
      <h3>{title}</h3>
      <h4>{subTitle}</h4>
      <span>{count}</span>
      <button onClick={stopTimer}>Stop</button>
      {
        count === 0 ?
        <button onClick={startTimer}>Start</button>
          :
        <button onClick={resetTimer}>Reset</button>
      }
    </div>
  )
}

export default Timer;
