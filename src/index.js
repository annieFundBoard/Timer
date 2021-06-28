import React from "react";
import ReactDOM from "react-dom";
import Timer from "./Timer";

// when you click on the button, replace it with input fields
// you need to get Title and Subtitle from it, then have the user to click "Create"
// after "create" is clicked, add the timer and show the plus button again

const App = () => {
  const [timerList, setTimerList] = React.useState([]);
  const [isActivelyAddingTimer, setIsActivelyAddingTimer] = React.useState(false);
  const timerTitle = React.useRef(null);
  const timerSubtitle = React.useRef(null);
  
  const onAddTimer = () => { 
    setIsActivelyAddingTimer(true);
  }

  const onCreateTimer = () => {
    setTimerList([
      ...timerList,
      <Timer title={timerTitle.current.value} subTitle={timerSubtitle.current.value} />
    ]);

    setIsActivelyAddingTimer(false);
  }

    return (
      <div>
        <h1>Timers</h1>
        {timerList}
        {isActivelyAddingTimer 
          ? 
          <form>
            <input type="text" placeholder="Title" ref={timerTitle} /> 
            <input type="text" placeholder="Subtitle" ref={timerSubtitle} /> 
            <button type="button" onClick={() => onCreateTimer()}>Create</button>
            <button type="button" onClick={() => setIsActivelyAddingTimer(false)}>Cancel</button>
          </form>
            : <button onClick={onAddTimer}>+</button>} 

      </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
