import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import Draggable from "react-draggable";

const CardList = ({ characters }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(400px, 1fr))`,
        gridGap: "1em",
        justifyItems: "center",
      }}
    >
      {characters.map((item) => (
        <Draggable
          // allowAnyClick="false"
          key={item.id}
          height={200}
          offset={200}
          handle=".image__card"
        >
          <div
            className="cardlist"
            id={"card_" + item.id}
            style={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "repeat(2, 1fr)",
              boxShadow: "0px 0px 5px 0px",
              width: "fit-content",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width:"200px"
              }}
            >
              <h5>Name: {item.name}</h5>
              <h5>Type: {item.type}</h5>
              <h5>Specie: {item.species}</h5>
            </div>
            <div
              className="image__card"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "norepeat",
                backgroundPosition: "center",
                borderRadius: "0 10px 10px 0",
                width:"200px"
              }}
            ></div>
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default CardList;
