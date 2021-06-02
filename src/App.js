import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };

  const DecNum = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1 className="text-center mt-5">
        React{" "}
        <b>
          <i>Hooks</i>
        </b>{" "}
        with useState
      </h1>
      <div className="text-center" style={{ marginTop: "30vh" }}>
        <h1>{count}</h1>
        <br />
        <button
          onClick={IncNum}
          type="button"
          className="btn btn-primary btn-xl"
          style={{ marginRight: "15px" }}
        >
          Add
        </button>
        <button
          onClick={DecNum}
          type="button"
          className="btn btn-primary btn-xl"
        >
          Less
        </button>
      </div>
    </>
  );
};

export default App;
