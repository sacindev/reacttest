import React from "react";
function LightSwitch() {
  function handleClick(event: any) {
    let bodyStyle = document.body.style;

    if (bodyStyle.backgroundColor === "black") {
      bodyStyle.backgroundColor = "white";
    } else {
      bodyStyle.backgroundColor = "black";
    }
  }

  return <button onClick={handleClick}>Alterna las luces</button>;
}


export default LightSwitch