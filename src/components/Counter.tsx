import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
            setNumber(4 + number) //4 + 0 = 4
            setNumber((number) => 5 + number) // 5 + 4 = 9
            setNumber(4 + number) //4 + 0 = 4
        }}
      >
        +3
      </button>
    </>
  );
}
