import { useEffect, useState } from "react";
import "./App.css";
import moment from "moment";
import Advice from "./Advice";
import Time from "./Time";

function App() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Time />
      </div>
      <Advice />
    </>
  );
}

export default App;

// function Message(props) {
//   return <p>You have read {props.count} advices</p>;
// }
