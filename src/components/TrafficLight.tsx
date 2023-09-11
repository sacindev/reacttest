import React, { useState } from "react";
import { server } from "typescript";

interface TrafficLightMessage {
  [key: string]: string;
}

export default function TrafficLight() {
  const [walk, setWalk] = useState("red");

  function handleClick() {
    setWalk((walk) => {
      if (walk === "red") {
        return "green";
      } else if (walk === "yellow") {
        return "red";
      } else {
        return "yellow";
      }
    });
  }

  const messages: TrafficLightMessage = {
    red: "Parar",
    yellow: "Parar es lo siguiente",
    green: "Caminar",
  };

  return (
    <>
      <button onClick={handleClick}>Cambia a {messages[walk]}</button>
    </>
  );
}
