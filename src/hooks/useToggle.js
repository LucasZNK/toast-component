import React from "react";

function useToggle(initialState = false) {
  const [state, setState] = React.useState(initialState);

  function toggleState() {
    setState((currentValue) => !currentValue);
  }

  return [state, toggleState];
}

export default useToggle;
