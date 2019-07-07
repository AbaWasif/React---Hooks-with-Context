import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="row">
      <h1 className="w-100">Count : {count} </h1>
      <br />
      <br />
      <button
        className="col-sm btn-primary btn-sm m-2"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>

      <button
        className="col-sm btn-danger btn-sm m-2"
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
