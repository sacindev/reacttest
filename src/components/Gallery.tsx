import React, { useState } from "react";
import { sculptureList } from "./data/gallery.js";

export default function Gallery() {
  const [index, setIndex] = useState<any>(0);
  const [showMore, setShowMore] = useState(false);
  let sculpture = sculptureList[index];

  function handleNextClick() {
    setIndex((index: any) => {
      const nextIndex = index + 1;
      const nextItem = sculptureList[nextIndex];
      return nextItem !== undefined ? nextIndex : index;
    });
  }
  function handlePreviousClick() {
    setIndex((index: any) => {
      const prevIndex = index - 1;
      const prevItem = sculptureList[prevIndex];
      return prevItem !== undefined ? prevIndex : index;
    });
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <>
      <button onClick={handleNextClick}>Siguiente</button>
      <button onClick={handlePreviousClick}>Anterior</button>
      <h2>
        <i>{sculpture.name} </i>
        por {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} de {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Ocultar" : "Mostrar"} detalles
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
