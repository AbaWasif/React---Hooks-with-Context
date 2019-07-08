import React, { useEffect, useContext } from "react";
import RootContext from "../context/rootContext";

const Counter = () => {
  const context = useContext(RootContext);

  // const [count, setCount] = useState(0);

  // const increaseCount = () => setCount(count + 1);
  // const resetCount = () => setCount(0);
  // const decreaseCount = () => setCount(count - 1);

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  useEffect(() => {
    console.log({ "Count Updated to": context.count });
  });

  return (
    <div className="row">
      <h1 className="w-100">Count : {context.count} </h1>
      <br />
      <br />
      <button
        className="col-sm btn-primary btn-sm m-2"
        onClick={context.increaseCount}
      >
        Increase
      </button>

      <button
        className="col-sm-2 btn-warning btn-sm m-2"
        onClick={context.resetCount}
      >
        Reset
      </button>

      <button
        className="col-sm btn-danger btn-sm m-2"
        onClick={context.decreaseCount}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
