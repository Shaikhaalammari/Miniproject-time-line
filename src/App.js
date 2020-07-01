import React from "react";
import styles from "./styles";
import Events from "./Events";
import EventsList from "./components/EventsList";

function App() {
  return (
    <div>
      <div>
        <h1 style={styles.text}>Shaikha's TimeLine</h1>
        <h4 style={styles.text}> Ps: nothing special in my timeline</h4>
        {EventsList}
      </div>
    </div>
  );
}

//i suck in react!! need to recap everything again </3

export default App;

export default App;
