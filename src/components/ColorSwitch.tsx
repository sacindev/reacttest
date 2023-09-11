import React from "react";

interface ColorSwitchProps {
  onChangeColor: () => void; // Aquí puedes especificar el tipo correcto de acuerdo a tu caso
}

export default function ColorSwitch({ onChangeColor }: ColorSwitchProps) {
  return (
    <div
      onClick={() => {
        console.log("Padre de boton");
      }}
    >
      <button
        onClick={(event) => {
          event.stopPropagation();
          onChangeColor();
        }}
      >
        <span
          onClick={(event) => {
            event.stopPropagation();
            console.log("Hijo de boton");
          }}
        >
          Cambiar color
        </span>
      </button>
    </div>
  );
}
