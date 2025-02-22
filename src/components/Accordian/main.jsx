import React, { useState } from "react";
import data from "./data";
import "./app.css";

// single selection
// multiple selection
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMulSelection, setEnableMulSelection] = useState(false);
  const [multiSelection, setMultiSelection] = useState([]);

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }
  function handleMultipleSelection(currentId) { 
    //multiSelection = [];  Question 1 is not selected
    let cpyMulti = [...multiSelection]; // copy = []
    const findIndexOfCI = cpyMulti.indexOf(currentId);  // it returns -1
    // console.log(findIndexOfCI);


    if (findIndexOfCI === -1) {  // true (1 is NOT in the array)
      cpyMulti.push(currentId); // copy = [1]
    } else {
      cpyMulti.splice(findIndexOfCI, 1); //again select Q1  it removes 1 from the array
    }
    setMultiSelection(cpyMulti);// copy = [1]
    console.log(selected, multiSelection);
  }
  return (
    <>
      <div className="wrapper">
        <div className="title">
          <h1>Accordian</h1>
        </div>
        <div className="accordian">
          <button onClick={() => setEnableMulSelection(!enableMulSelection)}>
            MultipleSelection
          </button>
          {data && data.length > 0 ? (
            data.map((d, index) => (
              <div key={index} className="question-container">
                <div
                  onClick={
                    enableMulSelection
                      ? () => handleMultipleSelection(d.id)
                      : () => handleSingleSelection(d.id)
                  }
                  className="questions"
                >
                  <h3>{d.question}</h3>
                  <span className="toggle-icon">
                    {enableMulSelection
                      ? multiSelection.indexOf(d.id) !== -1
                        ? "-"
                        : "+"
                      : selected === d.id
                      ? "-"
                      : "+"}
                  </span>
                </div>
                {enableMulSelection
                  ? multiSelection.indexOf(d.id) !== -1 && (
                      <div className="answers">
                        <p>{d.answer}</p>
                      </div>
                    )
                  : selected === d.id && (
                      <div className="answers">
                        <p>{d.answer}</p>
                      </div>
                    )}
                {/* {selected === d.id ? (
                  <div className="answers">
                    <p>{d.answer}</p>
                  </div>
                ) : null} */}
              </div>
            ))
          ) : (
            <div className="no-data">No data found</div>
          )}
        </div>
      </div>
    </>
  );
}


//Note

// multiSelection	copy.indexOf(1)	Condition (indexOf(1) === -1)	Effect
// [] (empty)	-1	✅ true → Add 1	1 is added
// [1]	0 (1 exists)	❌ false → Remove 1	1 is removed
// [] (empty again)	-1	✅ true → Add 1	1 is added again