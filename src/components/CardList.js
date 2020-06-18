import React from "react";
import LazyLoad from "react-lazyload";
import anime from "animejs/lib/anime.es.js";

const CardList = ({ characters }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit,minmax(400px, 1fr))`,
        gridGap: "1em",
        width: "100%",
        justifyItems: "center",
      }}
    >
      {characters.map((item) => (
        <LazyLoad key={item.id} height={200} offset={200}>
          <div
            className="cardlist"
            id={"card_" + item.id}
            style={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "repeat(2, 1fr)",
              boxShadow: "0px 0px 5px 0px",
              width: "fit-content",
            }}
          >
            <div style={{ width: "200px" }}>
              <h5>Name: {item.name}</h5>
              <h5>Type: {item.type}</h5>
              <h5>Specie: {item.species}</h5>
            </div>
            <div
              style={{
                height: "200px",
                backgroundImage: `url(${item.image})`,
                backgroundSize: "contain",
                width: "200px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </LazyLoad>
      ))}
    </div>
  );
};

export default CardList;
