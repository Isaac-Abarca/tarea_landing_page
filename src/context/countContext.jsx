import React, { useState } from "react";
import PropTypes from "prop-types";

export const CountContext = React.createContext();

export function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  const drecrementCount = () => {
    setCount((count) => count - 1);
  };

  const reset = () => {
    setCount((count) => count  - count);
  };

  return (
    <CountContext.Provider value={{ count, incrementCount, drecrementCount, reset }}>
      {children}
    </CountContext.Provider>
  );
}

CountProvider.propTypes = {
  children: PropTypes.node.isRequired,
};