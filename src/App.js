import React, { useState } from "react";

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
      <h1 className="text-center mt-5">React Hooks with useState</h1>
      <div className="text-center" style={{ marginTop: "30vh" }}>
        <h1>{count}</h1>
        <br />
        <button
          onClick={DecNum}
          type="button"
          className="btn btn-primary btn-xl"
          style={{ marginRight: "15px" }}
        >
          Less
        </button>
        <button
          onClick={IncNum}
          type="button"
          className="btn btn-primary btn-xl"
        >
          Add
        </button>
      </div>
      <h6 className="text-center" style={{ marginTop: "30vh" }}>
        Copyright &copy; 2021 Sanajit Jana. All Rights Reserved.
      </h6>
    </>
  );
};

export default App;
