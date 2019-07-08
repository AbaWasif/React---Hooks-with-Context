import React, { useReducer } from "react";
import "./App.css";
import RootContext from "./context/rootContext";
import RootReducer from "./context/rootReducer";
import { INCREMENT, RESET, DECREMENT } from "./actions/types";

import Counter from "./components/counter";

const App = () => {
  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(RootReducer, initialState);

  const increaseCount = () => {
    dispatch({ type: INCREMENT });
  };

  const resetCount = () => {
    dispatch({ type: RESET });
  };

  const decreaseCount = () => {
    dispatch({ type: DECREMENT });
  };

  return (
    <RootContext.Provider
      value={{ count: state.count, increaseCount, resetCount, decreaseCount }}
    >
      <div className="App">
        <header className="App-header">
          <Counter />
        </header>
      </div>
    </RootContext.Provider>
  );
};

export default App;
