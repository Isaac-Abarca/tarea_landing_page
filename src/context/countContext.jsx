import React, { useState } from "react";
import PropTypes from "prop-types";

export const CountContext = React.createContext();

export function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <CountContext.Provider value={{ count, incrementCount }}>
      {children}
    </CountContext.Provider>
  );
}

CountProvider.propTypes = {
  children: PropTypes.node.isRequired,
};