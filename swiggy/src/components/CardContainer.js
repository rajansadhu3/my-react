import React, { useState } from "react";
import Card from "./Card";
import { resObj } from "../utils/mockData";

const CardContainer = () => {
  const [listOfResturants, setlistOfResturants] = useState(resObj);
  return (
    <div>
      <div className="filter">
        <button
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setlistOfResturants(filteredList);
          }}
          className="filter-btn"
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="cardContainerWrapper">
        {listOfResturants.map((resturantItem, index) => (
          <Card key={index} resData={resturantItem} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
