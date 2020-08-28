import React, { useState, useEffect } from "react";

function Child() {
  const [childState, setChildState] = useState(1);

  useEffect(() => {
    document.title = `ChildState ${childState}`;
    console.log("re-render Child Component");
  });

  return (
    <div>
      <button onClick={() => setChildState(childState + 5)}>Child</button>
    </div>
  );
}

export default Child;
