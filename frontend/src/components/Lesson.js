import "../App.css";

import AppContext from "../contexts/AppContext";
import B from "./B";
import BasicReducer from "./BasicReducer";

import { useReducer } from "react";
import CompB from "./CompB";

import Animal from "./Animal";

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "add_1":
      return currentState + 1;
    case "multiple_3":
      return currentState * 3;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

const Lesson = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const handleEdit = () => {
    const button = document.getElementById("bu");
    button.click();
  };
  return (
    <AppContext.Provider
      value={{ countProvided: count, dispatchProvided: dispatch }}
    >
      <B />
      {/* <BasicReducer /> */}
      Count {count}
      <CompB />
      <button onClick={handleEdit}>hello</button>
      <input
        id="bu"
        type="file"
        onChange={(event) => console.log(event.target.files[0])}
      />
      <Animal type={"dog"} />
    </AppContext.Provider>
  );
};

export default Lesson;
