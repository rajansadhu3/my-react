import React from "react";
import Card from "./Card";
import { resObj } from "../utils/mockData";

const CardContainer = () => {
  return (
    <div>
      <div className="filter">
        <button className="filter-btn">Top Rated Resturants</button>
      </div>
      <div className="cardContainerWrapper">
        {resObj.map((resturantItem, index) => (
          <Card key={index} resData={resturantItem} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
