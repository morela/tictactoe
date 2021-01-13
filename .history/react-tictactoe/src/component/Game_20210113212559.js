import React, { useState } from "react";
import Layout from "./Layout";

const style = {
  width: "200px",
  margin: "20px auto",
};

const pStyle = {
  color: "green",
};

function Game() {
const [layout, setLayout] = useState(Array(9).fill(null));
const [xIsNext, setXisNext] = useState(true);
const winner = checkWinner(layout);

const handleClick = i =>{
const layoutState = [...layout];
if (winner || layoutState[i]) return;
layoutState[i] = xIsNext ? 'X' : 'O';
setLayout(layoutState);
setXisNext(!xIsNext);
}


  return (
    <React.Fragment>
      <Layout boxes={layout} />
      <div style={styles}>
        <p style={pStyle}> The winner goes here</p>
      </div>
    </React.Fragment>
  );
}

export default Game;
