import React, { Fragment } from "react";
import { render } from "react-dom";
import { Timeline, Event } from "react-timeline-scribble";
import styles from "./styles";

const App = () => (
  <Fragment>
    <h1 style={styles.text}>Shaikha's TimeLine</h1>
    <h4 style={styles.text}>ps.Nothing really special</h4>
    <Timeline>
      <Event interval={"19 - 2 - 1995"} title={"When I Came To Life"}>
        Shaikha came to the world to make your life better
      </Event>
      <Event interval={"31-8-2002"} title={"My BFF Came to Life"}>
        My younger brother Ahmad My best friend was born to make my life harder
      </Event>
      <Event interval={"May, 2012"} title={"Graduated from the HighSchool"}>
        And still wondering what knowladge i got from High School
      </Event>
      <Event interval={"Aug, 2012"} title={"Got Accepted to KU"}>
        Accpeted in Alied health Scienes Center in Kuwait University
      </Event>
      <Event interval={"May,2018"} title={"ByeBye Uni"}>
        FINALLY graduated from AHSC ( Meet the honory student)
      </Event>
      <Event interval={"May 2020"} title={"Corona Era"}>
        survived COVID19 Quarntaine
      </Event>
      <Event interval={"June,2020"} title={"CODED!!"}>
        accpeted in Coded summer bootcamp and i really hope that i'll do
        greatjon!! CODED TEAM ARE AMAZING!
      </Event>
    </Timeline>
  </Fragment>
);
export default App;
render(<App />, document.getElementById("root"));
