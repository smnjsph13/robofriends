import React from "react";
import Card from "./Card";

const CardList = ({ robotsFiltered }) => {
  return (
    <div>
      {robotsFiltered.map((user, i) => {
        return (
          <Card
            key={i}
            id={robotsFiltered[i].id}
            name={robotsFiltered[i].name}
            email={robotsFiltered[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
