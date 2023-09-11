import React, { useState, Children, PointerEvent, ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  color: string;
  position: Position;
  onMove: (x: number, y: number) => void;
}

interface Position {
  x: number;
  y: number;
}

export default function Box({ children, color, position, onMove }: BoxProps) {
  const [lastCoordinates, setLastCoordinates] = useState<Position | null>(null);

  function handlePointerDown(e: PointerEvent) {
    if (e.target instanceof HTMLElement) {
      e.target.setPointerCapture(e.pointerId);
    }
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handlePointerMove(e: PointerEvent) {
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      onMove(dx, dy);
    }
  }

  function handlePointerUp(e: PointerEvent) {
    setLastCoordinates(null);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: "grab",
        backgroundColor: color,
        position: "absolute",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
      }}
    >
      {children}
    </div>
  );
}
