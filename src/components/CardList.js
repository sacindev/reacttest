import React from "react";
import LazyLoad from "react-lazyload";
import anime from "animejs/lib/anime.es.js";

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
        <LazyLoad key={item.id} height={200} offset={200} once>
          <div
            className="cardlist"
            id={"card_" + item.id}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              boxShadow: "0px 0px 15px 2px",
              borderRadius: "10px",
              border: ".5px solid #555",
              height:"200px"
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
        </LazyLoad>
      ))}
    </div>
  );
};

export default CardList;
