import React, { useState } from "react";
import "./Game.css";

export default function Game() {
  const [plateform, setPlatform] = useState(["","","","","","","","","",]);
  const [flag, setFlag] = useState(0);

  let changeData = (index) => {
    if (plateform[index] !== "") {
      alert("Already Clicked");
      return;
    }
    if (flag == 0) {
      plateform[index] = "X";
      setFlag(1);
    } else {
      plateform[index] = "0";
      setFlag(0);
    }
    setPlatform([...plateform]);
  };
  let checkwinner = () => {
    const boxes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let box of boxes) {
      const [a, b, c] = box;
      if (plateform[a] === plateform[b] && plateform[b] === plateform[c]) {
        return plateform[a];
      }
    }
  };
  const iswinner = checkwinner();
  return (
    <>
      <div className="container1">
        <div className="boxes">
          {plateform ? (
            plateform.map((item, index) => (
              <button onClick={() => changeData(index)}>{item}</button>
            ))
          ) : (
            <h2>Loading</h2>
          )}
        </div>
        <div>{iswinner} won the game</div>
      </div>
    </>
  );
}
