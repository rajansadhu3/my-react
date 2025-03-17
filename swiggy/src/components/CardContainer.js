import React from "react";
import Card from "./Card";
import { resObj } from "../utils/mockData";

const CardContainer = () => {
  return (
    <div className="cardContainerWrapper">
      {resObj.map((resturantItem) => (
        <Card resData={resturantItem} />
      ))}
    </div>
  );
};

export default CardContainer;
