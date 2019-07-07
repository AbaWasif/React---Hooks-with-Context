import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const resetCount = () => setCount(0);
  const decreaseCount = () => setCount(count - 1);

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  useEffect(() => {
    console.log("Component updated");
  });

  return (
    <div className="row">
      <h1 className="w-100">Count : {count} </h1>
      <br />
      <br />
      <button className="col-sm btn-primary btn-sm m-2" onClick={increaseCount}>
        Increase
      </button>

      <button className="col-sm-2 btn-warning btn-sm m-2" onClick={resetCount}>
        Reset
      </button>

      <button className="col-sm btn-danger btn-sm m-2" onClick={decreaseCount}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
